import { useState } from "react";
import EditarPerfil from "./EditarPerfil";
import CambiarContraseña from "./CambiarContraseña";

function PerfilCard() {
  const [mostrarEditar, setMostrarEditar] =
    useState(false);

  const [nombre, setNombre] =
    useState("Usuario");

  const [correo, setCorreo] =
    useState(
      "usuario@gmail.com"
    );

  const [telefono, setTelefono] =
    useState(
      "+51 999 999 999"
    );

  const [pais, setPais] =
    useState("Perú");

  const [ciudad, setCiudad] =
    useState("Lima");

  const [fechaNacimiento, setFechaNacimiento] =
    useState(
      "15/08/1995"
    );

  //CAMBIAR CONTRASEÑA
  const [mostrarPassword, setMostrarPassword] =
  useState(false);

  const [verificarActual, setVerificarActual] =
    useState(false);

  const [passwordActual, setPasswordActual] =
    useState("");

  const [nuevaPassword, setNuevaPassword] =
    useState("");

  const [confirmarPassword, setConfirmarPassword] =
    useState("");

  const [
  contraseñaGuardada, setContraseñaGuardada] = useState("123456");

  const contraseñaOculta =
    "*".repeat(
      contraseñaGuardada.length
    );
  const [mostrarDatos, setMostrarDatos] =
    useState(false);

  const [pasaporte, setPasaporte] =
    useState("AB1234567");

  const [dni, setDni] =
    useState("47582961");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          width: "100%",
        }}
      >
        {/* INFORMACIÓN PERSONAL */}
        <div
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "25px",
            boxShadow:
              "0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              marginBottom: "25px",
            }}
          >
            <h2>
              Información personal
            </h2>

            <button
              onClick={() =>
                setMostrarEditar(true)
              }
              style={{
                padding:
                  "10px 18px",
                borderRadius:
                  "10px",
                border:
                  "1px solid #0ea5a8",
                background:
                  "white",
                color:
                  "#0ea5a8",
                cursor:
                  "pointer",
              }}
            >
              Editar perfil
            </button>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
            }}
          >
            <img
              src="https://i.pravatar.cc/140"
              alt="perfil"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit:
                  "cover",
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "1fr 1fr",
                gap: "20px 40px",
                paddingLeft: "20px",
                textAlign: "left",
              }}
            >
              <div>
                <strong>
                  Nombre completo
                </strong>
                <p>{nombre}</p>
              </div>

              <div>
                <strong>País</strong>
                <p>{pais}</p>
              </div>

              <div>
                <strong>
                  Correo electrónico
                </strong>
                <p>{correo}</p>
              </div>

              <div>
                <strong>
                  Ciudad
                </strong>
                <p>{ciudad}</p>
              </div>

              <div>
                <strong>
                  Teléfono
                </strong>
                <p>{telefono}</p>
              </div>

              <div>
                <strong>
                  Fecha de nacimiento
                </strong>
                <p>
                  {
                    fechaNacimiento
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SEGURIDAD */}
        <div
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "25px",
            boxShadow:
              "0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems:
                "center",
              marginBottom:
                "15px",
            }}
          >
            <h2>
              Seguridad de la cuenta
            </h2>

            <button
              onClick={() => {
                setPasswordActual("");
                setNuevaPassword("");
                setConfirmarPassword("");

                setVerificarActual(true);
              }}
              style={{
                padding:
                  "10px 18px",
                borderRadius:
                  "10px",
                border:
                  "1px solid #0ea5a8",
                background:
                  "white",
                color:
                  "#0ea5a8",
                cursor:
                  "pointer",
              }}
            >
              Cambiar contraseña
            </button>
          </div>

          <div
            style={{
              marginTop: "12px",
              textAlign: "left",
            }}
          >
            <strong
              style={{
                display:
                  "block",
                marginBottom:
                  "6px",
              }}
            >
              Contraseña:
            </strong>

            <p
              style={{
                margin: 0,
                fontSize: "20px",
                fontWeight:
                  "bold",
                letterSpacing:
                  "2px",
              }}
            >
              {
                contraseñaOculta
              }
            </p>
          </div>
        </div>

        {/* DATOS */}
        <div
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "25px",
            boxShadow:
              "0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              marginBottom:
                "20px",
            }}
          >
            <h2>
              Datos personales
            </h2>

            <button
              onClick={() =>
                setMostrarDatos(true)
              }
              style={{
                padding:
                  "10px 18px",
                borderRadius:
                  "10px",
                border:
                  "1px solid #0ea5a8",
                background:
                  "white",
                color:
                  "#0ea5a8",
                cursor:
                  "pointer",
              }}
            >
              Editar datos
            </button>
          </div>

          <div
            style={{
              border:
                "1px solid #eee",
              borderRadius:
                "10px",
              padding:
                "15px",
              marginBottom:
                "12px",
              textAlign:
                "left",
            }}
          >
            <strong>
              Pasaporte
            </strong>
            <p>{pasaporte}</p>
          </div>

          <div
            style={{
              border:
                "1px solid #eee",
              borderRadius:
                "10px",
              padding:
                "15px",
              textAlign:
                "left",
            }}
          >
            <strong>DNI</strong>
            <p>{dni}</p>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {mostrarEditar && (
        <EditarPerfil
          nombre={nombre}
          setNombre={setNombre}
          correo={correo}
          setCorreo={setCorreo}
          telefono={telefono}
          setTelefono={setTelefono}
          pais={pais}
          setPais={setPais}
          ciudad={ciudad}
          setCiudad={setCiudad}
          fechaNacimiento={fechaNacimiento}
          setFechaNacimiento={setFechaNacimiento}
          setMostrarEditar={setMostrarEditar}
          inputStyle={inputStyle}
          labelStyle={labelStyle}
        />
      )}
      
      {/* CAMBIAR CONTRASEÑA */}
      <CambiarContraseña
        verificarActual={verificarActual}
        mostrarPassword={mostrarPassword}
        passwordActual={passwordActual}
        setPasswordActual={setPasswordActual}
        nuevaPassword={nuevaPassword}
        setNuevaPassword={setNuevaPassword}
        confirmarPassword={confirmarPassword}
        setConfirmarPassword={setConfirmarPassword}
        contraseñaGuardada={contraseñaGuardada}
        setContraseñaGuardada={setContraseñaGuardada}
        setVerificarActual={setVerificarActual}
        setMostrarPassword={setMostrarPassword}
        setMostrarEditar={setMostrarEditar}
        overlayStyle={overlayStyle}
        modalStyle={modalStyle}
        inputStyle={inputStyle}
        labelStyle={labelStyle}
        botonTurquesa={botonTurquesa}
      />

      {/* ACTUALIZAR CONTRASEÑA */}
      {mostrarPassword && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h2>
              Actualizar contraseña
            </h2>

            <div>
              <label
                style={labelStyle}
              >
                Nueva contraseña
              </label>

              <input
                type="password"
                value={nuevaPassword}
                onChange={(e) =>
                  setNuevaPassword(
                    e.target.value
                  )
                }
                style={inputStyle}
              />
            </div>

            <div>
              <label
                style={labelStyle}
              >
                Confirmar contraseña
              </label>

              <input
                type="password"
                value={
                  confirmarPassword
                }
                onChange={(e) =>
                  setConfirmarPassword(
                    e.target.value
                  )
                }
                style={inputStyle}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "flex-end",
                gap: "12px",
                marginTop: "20px",
              }}
            >
              <button
                onClick={() => {
                  setNuevaPassword("");
                  setConfirmarPassword(
                    ""
                  );

                  setMostrarPassword(
                    false
                  );

                  setMostrarEditar(
                    true
                  );
                }}
              >
                Cancelar
              </button>

              <button
                onClick={() => {
                  if (
                    nuevaPassword ===
                      confirmarPassword &&
                    nuevaPassword !==
                      ""
                  ) {
                    setContraseñaGuardada(
                      nuevaPassword
                    );

                    alert(
                      "Contraseña actualizada"
                    );

                    setMostrarPassword(
                      false
                    );

                    setPasswordActual(
                      ""
                    );

                    setNuevaPassword(
                      ""
                    );

                    setConfirmarPassword(
                      ""
                    );
                  } else {
                    alert(
                      "Las contraseñas no coinciden"
                    );
                  }
                }}
                style={botonTurquesa}
              >
                Actualizar
              </button>
            </div>
          </div>
        </div>
      )}
      {/* EDITAR DATOS */}
      {mostrarDatos && (
        <div
          style={overlayStyle}
        >
          <div
            style={modalStyle}
          >
            <h2>
              Editar datos
              personales
            </h2>

            <div>
              <label
                style={
                  labelStyle
                }
              >
                Pasaporte
              </label>

              <input
                value={
                  pasaporte
                }
                onChange={(e) =>
                  setPasaporte(
                    e.target
                      .value
                  )
                }
                style={
                  inputStyle
                }
              />
            </div>

            <div>
              <label
                style={
                  labelStyle
                }
              >
                DNI
              </label>

              <input
                value={dni}
                onChange={(e) =>
                  setDni(
                    e.target
                      .value
                  )
                }
                style={
                  inputStyle
                }
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "flex-end",
                gap: "12px",
                marginTop: "20px",
              }}
            >
              <button
                onClick={() =>
                  setMostrarDatos(
                    false
                  )
                }
              >
                Cancelar
              </button>

              <button
                onClick={() =>
                  setMostrarDatos(
                    false
                  )
                }
                style={
                  botonTurquesa
                }
              >
                Guardar
                cambios
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "6px",
  borderRadius: "8px",
  border: "1px solid #248394",
};

const labelStyle = {
  display: "block",
  textAlign: "left",
  marginBottom: "6px",
  fontWeight: "500",
};
const overlayStyle = {
  position: "fixed",
  inset: 0,
  background:
    "rgba(0,0,0,0.45)",
  display: "flex",
  justifyContent:
    "center",
  alignItems:
    "center",
  zIndex: 999,
};

const modalStyle = {
  background: "white",
  width: "450px",
  padding: "28px",
  borderRadius:
    "18px",
};

const botonTurquesa = {
  padding:
    "10px 18px",
  borderRadius:
    "10px",
  border: "none",
  background:
    "#0ea5a8",
  color: "white",
  cursor:
    "pointer",
};

export default PerfilCard;