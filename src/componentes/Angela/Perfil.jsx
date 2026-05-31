import React, { useState, useEffect, useContext } from "react";
import Sidebar from "./Sidebar";
import "./Perfil.css"; 
import { AuthContext } from '../../context/Auth';
import usuariosData from "../../data/usuarios.json"; 

function Perfil() {
  const { usuario: usuarioGlobal, actualizarUsuario } = useContext(AuthContext);
  
  const [showEditModal, setShowEditModal] = useState(false);
  const [showPassModal, setShowPassModal] = useState(false);
  const [showDocsModal, setShowDocsModal] = useState(false);

  const [usuario, setUsuario] = useState({
    nombre: "", email: "", telefono: "", pais: "", ciudad: "",
    nacimiento: "", foto: "", pasaporte: "", dni: "", password: "",
  });

  const [tempData, setTempData] = useState({ ...usuario });
  const [passCheck, setPassCheck] = useState({ actual: "", nueva: "" });

  useEffect(() => {
    if (usuarioGlobal) {
      const correoBusqueda = usuarioGlobal.correo || usuarioGlobal.email;
      const usuarioEnEnJson = usuariosData ? usuariosData.find(u => u.correo === correoBusqueda) : null;
      const contraReal = usuarioEnEnJson ? usuarioEnEnJson.contraseña : "";
      const nombreArchivo = (usuarioGlobal.nombre || (usuarioEnEnJson ? usuarioEnEnJson.nombre : "usuario"))
        .trim()
        .split(" ")[0]
        .toLowerCase();

      const nuevoEstado = {
        nombre: usuarioGlobal.nombre || (usuarioEnEnJson ? usuarioEnEnJson.nombre : ""),
        email: correoBusqueda || "",
        telefono: usuarioGlobal.telefono || (usuarioEnEnJson ? usuarioEnEnJson.telefono : ""),
        pais: usuarioGlobal.pais || (usuarioEnEnJson ? usuarioEnEnJson.pais : ""),
        ciudad: usuarioGlobal.ciudad || (usuarioEnEnJson ? usuarioEnEnJson.ciudad : ""),
        nacimiento: usuarioGlobal.nacimiento || "2000-01-01",
        foto: `/${nombreArchivo}.jpg`,
        dni: usuarioGlobal.dni || "",
        password: contraReal, 
      };
      setUsuario(nuevoEstado);
      setTempData(nuevoEstado);
    }
  }, [usuarioGlobal]);

  const handleGuardar = (tipoModal) => {
    let usuarioActualizado;

    if (tipoModal === "pass") {
      if (passCheck.actual !== usuario.password) {
        alert("La contraseña actual es incorrecta.");
        return;
      }
      usuarioActualizado = { ...usuario, password: passCheck.nueva };
      setPassCheck({ actual: "", nueva: "" });
      setShowPassModal(false);
    } else {
      usuarioActualizado = { ...tempData };
      if (tipoModal === "perfil") setShowEditModal(false);
      if (tipoModal === "docs") setShowDocsModal(false);
    }

    setUsuario(usuarioActualizado);

    if (actualizarUsuario) {
      actualizarUsuario({
        ...usuarioActualizado,
        correo: usuarioActualizado.email 
      });
    }

    alert("¡Cambios guardados con éxito!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="perfil-container">
      <Sidebar />

      <div className="perfil-main-content">
        <div className="perfil-wrapper">
          <h1 className="perfil-title">Mi Perfil</h1>
          <p className="perfil-subtitle">
            Administra tu información personal y los ajustes de tu cuenta.
          </p>

          <div className="perfil-sections-gap">
            <div className="section-card">
              <div className="card-header">
                <h3 className="card-title">Información personal</h3>
                <button
                  onClick={() => {
                    setTempData({ ...usuario });
                    setShowEditModal(true);
                  }}
                  className="outline-button"
                >
                  Editar Perfil
                </button>
              </div>
              <div className="personal-info-flex">
                  <img 
                    src={usuario.foto} 
                    alt="Perfil" 
                    className="profile-avatar" 
                    onError={(e) => { 
                      e.target.src = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"; 
                    }} 
                  />                <div className="grid-info">
                  <div><label className="label-style">Nombre completo</label><p className="data-text">{usuario.nombre}</p></div>
                  <div><label className="label-style">País</label><p className="data-text">{usuario.pais}</p></div>
                  <div><label className="label-style">Correo electrónico</label><p className="data-text">{usuario.email}</p></div>
                  <div><label className="label-style">Ciudad</label><p className="data-text">{usuario.ciudad}</p></div>
                  <div><label className="label-style">Teléfono</label><p className="data-text">{usuario.telefono}</p></div>
                  <div>
                    <label className="label-style">F. Nacimiento</label>
                    <p className="data-text">{usuario.nacimiento.split("-").reverse().join("/")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-card">
              <div className="card-header" style={{ marginBottom: 0 }}>
                <div>
                  <h3 className="card-title" style={{ marginBottom: "10px" }}>Seguridad de la cuenta</h3>
                  <label className="label-style">Contraseña:</label>
                  <p className="data-text">******</p>
                </div>
                <button onClick={() => setShowPassModal(true)} className="outline-button">
                  Actualizar Contraseña
                </button>
              </div>
            </div>

            <div className="section-card">
              <div className="card-header">
                <h3 className="card-title">Datos personales</h3>
                <button
                  onClick={() => {
                    setTempData({ ...usuario });
                    setShowDocsModal(true);
                  }}
                  className="outline-button"
                >
                  Editar Datos
                </button>
              </div>
              <div className="docs-grid">
                <div className="input-box-display">
                  <label className="label-style">Pasaporte</label>
                  <p className="data-text">{usuario.pasaporte}</p>
                </div>
                <div className="input-box-display">
                  <label className="label-style">DNI</label>
                  <p className="data-text">{usuario.dni}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- MODALES --- */}
        {showEditModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2 className="card-title" style={{ textAlign: "center", marginBottom: "20px" }}>Editar Perfil</h2>
              <div className="modal-grid">
                <div style={{ gridColumn: "span 2" }}>
                  <label className="label-style">Nombre completo</label>
                  <input type="text" name="nombre" value={tempData.nombre} onChange={handleChange} className="modal-input" />
                </div>
                <div style={{ gridColumn: "span 2" }}>
                  <label className="label-style">Correo electrónico</label>
                  <input type="email" name="email" value={tempData.email} onChange={handleChange} className="modal-input" />
                </div>
                <div><label className="label-style">País</label><input type="text" name="pais" value={tempData.pais} onChange={handleChange} className="modal-input" /></div>
                <div><label className="label-style">Ciudad</label><input type="text" name="ciudad" value={tempData.ciudad} onChange={handleChange} className="modal-input" /></div>
                <div><label className="label-style">Teléfono</label><input type="text" name="telefono" value={tempData.telefono} onChange={handleChange} className="modal-input" /></div>
                <div><label className="label-style">Fecha nacimiento</label><input type="date" name="nacimiento" value={tempData.nacimiento} onChange={handleChange} className="modal-input" /></div>
              </div>
              <div className="modal-footer">
                <button onClick={() => setShowEditModal(false)} className="cancel-button">Cancelar</button>
                <button onClick={() => handleGuardar("perfil")} className="save-button">Guardar</button>
              </div>
            </div>
          </div>
        )}

        {showPassModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2 className="card-title">Seguridad</h2>
              <label className="label-style">Contraseña Actual</label>
              <input type="password" value={passCheck.actual} onChange={(e) => setPassCheck({ ...passCheck, actual: e.target.value })} className="modal-input" />
              <label className="label-style">Nueva Contraseña</label>
              <input type="password" value={passCheck.nueva} onChange={(e) => setPassCheck({ ...passCheck, nueva: e.target.value })} className="modal-input" />
              <div className="modal-footer">
                <button onClick={() => setShowPassModal(false)} className="cancel-button">Cancelar</button>
                <button onClick={() => handleGuardar("pass")} className="save-button">Actualizar</button>
              </div>
            </div>
          </div>
        )}

        {showDocsModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2 className="card-title">Datos Personales</h2>
              <label className="label-style">Pasaporte</label>
              <input type="text" name="pasaporte" value={tempData.pasaporte} onChange={handleChange} className="modal-input" />
              <label className="label-style">DNI</label>
              <input type="text" name="dni" value={tempData.dni} onChange={handleChange} className="modal-input" />
              <div className="modal-footer">
                <button onClick={() => setShowDocsModal(false)} className="cancel-button">Cancelar</button>
                <button onClick={() => handleGuardar("docs")} className="save-button">Guardar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Perfil;