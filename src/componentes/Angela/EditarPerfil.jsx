import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./EditarPerfil.css"; // Importamos los estilos

function EditarPerfil() {
  const navigate = useNavigate();

  // 1. CARGAR DATOS ACTUALES
  const [usuario, setUsuario] = useState({
    nombre: "Usuaritoxd",
    email: "usuario@example.com",
    telefono: "+51 987 654 321",
    ubicacion: "Lima, Perú",
    foto: "https://i.pravatar.cc/150?u=avatar",
  });

  useEffect(() => {
    const datosGuardados = localStorage.getItem("userProfile");
    if (datosGuardados) {
      setUsuario(JSON.parse(datosGuardados));
    }
  }, []);

  // 2. MANEJAR CAMBIOS EN INPUTS
  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  // 3. GUARDAR CAMBIOS
  const handleGuardar = (e) => {
    e.preventDefault();
    localStorage.setItem("userProfile", JSON.stringify(usuario));
    alert("¡Perfil actualizado con éxito!");
    navigate("/perfil");
  };

  return (
    <div className="container-editar-perfil">
      <Sidebar />

      <div className="main-content">
        <button onClick={() => navigate("/perfil")} className="back-link">
          ← Cancelar y volver
        </button>

        <h2 className="title-perfil">Editar Perfil</h2>

        <div className="card-perfil">
          <form onSubmit={handleGuardar}>
            <div className="avatar-section">
              <img src={usuario.foto} alt="Avatar" className="avatar-img" />
              <button type="button" className="change-pic-button">
                Cambiar foto
              </button>
            </div>

            <div className="grid-inputs">
              <div className="input-group">
                <label className="label-perfil">Nombre Completo</label>
                <input
                  type="text"
                  name="nombre"
                  value={usuario.nombre}
                  onChange={handleChange}
                  className="input-perfil"
                />
              </div>

              <div className="input-group">
                <label className="label-perfil">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={usuario.email}
                  onChange={handleChange}
                  className="input-perfil"
                />
              </div>

              <div className="input-group">
                <label className="label-perfil">Teléfono</label>
                <input
                  type="text"
                  name="telefono"
                  value={usuario.telefono}
                  onChange={handleChange}
                  className="input-perfil"
                />
              </div>

              <div className="input-group">
                <label className="label-perfil">Ubicación</label>
                <input
                  type="text"
                  name="ubicacion"
                  value={usuario.ubicacion}
                  onChange={handleChange}
                  className="input-perfil"
                />
              </div>
            </div>

            <div className="button-container">
              <button type="submit" className="save-button">
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditarPerfil;