function CambiarPassword({
  verificarActual,
  mostrarPassword,
  passwordActual,
  setPasswordActual,
  nuevaPassword,
  setNuevaPassword,
  confirmarPassword,
  setConfirmarPassword,
  contraseñaGuardada,
  setContraseñaGuardada,
  setVerificarActual,
  setMostrarPassword,
  setMostrarEditar,
  overlayStyle,
  modalStyle,
  inputStyle,
  labelStyle,
  botonTurquesa,
}) {

  return (
    <>
      {/* VERIFICAR CONTRASEÑA */}
      {verificarActual && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <h2>Verificar identidad</h2>

            <p>
              Ingresa tu contraseña
              actual
            </p>

            <input
              type="password"
              value={passwordActual}
              onChange={(e) =>
                setPasswordActual(
                  e.target.value
                )
              }
              style={inputStyle}
            />

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
                  setPasswordActual("");

                  setVerificarActual(
                    false
                  );
                }}
              >
                Cancelar
              </button>

              <button
                onClick={() => {
                  if (
                    passwordActual ===
                    contraseñaGuardada
                  ) {
                    setVerificarActual(
                      false
                    );
                    setMostrarPassword(
                      true
                    );
                  } else {
                    alert(
                      "Contraseña actual incorrecta"
                    );
                  }
                }}
                style={botonTurquesa}
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      )}
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
    </>
  );
}

export default CambiarPassword;

      