function EditarPerfil({
  nombre,
  setNombre,
  correo,
  setCorreo,
  telefono,
  setTelefono,
  pais,
  setPais,
  ciudad,
  setCiudad,
  fechaNacimiento,
  setFechaNacimiento,
  setMostrarEditar,
  inputStyle,
  labelStyle,
}) {
  return (
    <div
      style={{
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
      }}
    >
      <div
        style={{
          background:
            "white",
          width: "800px",
          maxWidth: "92%",
          borderRadius:
            "18px",
          padding: "28px",
          maxHeight:
            "90vh",
          overflowY:
            "auto",
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
          <div>
            <h2
              style={{
                margin: 0,
              }}
            >
              Editar perfil
            </h2>

            <p
              style={{
                marginTop:
                  "3px",
                color:
                  "#64748b",
                fontSize:
                  "14px",
              }}
            >
              Actualiza tu información personal
            </p>
          </div>

          <button
            onClick={() =>
              setMostrarEditar(
                false
              )
            }
            style={{
              border: "none",
              background:
                "transparent",
              fontSize:
                "22px",
              cursor:
                "pointer",
            }}
          >
            ×
          </button>
        </div>

        {/* FOTO */}
        <div
          style={{
            textAlign:
              "center",
            marginBottom:
              "25px",
          }}
        >
          <img
            src="https://i.pravatar.cc/120"
            alt="perfil"
            style={{
              width: "95px",
              height: "95px",
              borderRadius:
                "50%",
            }}
          />

          <p
            style={{
              marginTop:
                "8px",
              color:
                "#0ea5a8",
              fontWeight:
                "bold",
            }}
          >
            Cambiar foto
          </p>
        </div>

        {/* FORM */}
        <div
          style={{
            display: "flex",
            flexDirection:
              "column",
            gap: "16px",
          }}
        >
          <div>
            <label
              style={
                labelStyle
              }
            >
              Nombre completo
            </label>

            <input
              value={nombre}
              onChange={(e) =>
                setNombre(
                  e.target.value
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
              Correo
            </label>

            <input
              value={correo}
              onChange={(e) =>
                setCorreo(
                  e.target.value
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
              Teléfono
            </label>

            <input
              value={telefono}
              onChange={(e) =>
                setTelefono(
                  e.target.value
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
              País
            </label>

            <input
              value={pais}
              onChange={(e) =>
                setPais(
                  e.target.value
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
              Ciudad
            </label>

            <input
              value={ciudad}
              onChange={(e) =>
                setCiudad(
                  e.target.value
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
              Fecha de
              nacimiento
            </label>

            <input
              value={
                fechaNacimiento
              }
              onChange={(e) =>
                setFechaNacimiento(
                  e.target.value
                )
              }
              style={
                inputStyle
              }
            />
          </div>
        </div>

        {/* BOTONES */}
        <div
          style={{
            display: "flex",
            justifyContent:
              "flex-end",
            gap: "15px",
            marginTop:
              "25px",
          }}
        >
          <button
            onClick={() =>
              setMostrarEditar(
                false
              )
            }
            style={{
              padding:
                "10px 18px",
              borderRadius:
                "10px",
              border:
                "1px solid #ccc",
              background:
                "white",
            }}
          >
            Cancelar
          </button>

          <button
            onClick={() =>
              setMostrarEditar(
                false
              )
            }
            style={{
              padding:
                "10px 18px",
              borderRadius:
                "10px",
              border:
                "none",
              background:
                "#0ea5a8",
              color:
                "white",
            }}
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditarPerfil;