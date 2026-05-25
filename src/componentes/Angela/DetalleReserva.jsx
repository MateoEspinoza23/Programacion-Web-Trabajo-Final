import React from "react";
import { useNavigate } from "react-router-dom";

function DetalleReserva() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      {/* ARRIBA */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <button
          onClick={() => navigate("/historial")}
          style={{
            border: "none",
            background: "transparent",
            color: "#0ea5a8",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          ← Volver al historial
        </button>

        <button
          onClick={() => navigate("/perfil")}
          style={{
            border: "none",
            background: "#f5f7fb",
            padding: "10px 16px",
            borderRadius: "25px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          👤 Perfil
        </button>
      </div>

      {/* TARJETA */}
      <div
        style={{
          background: "#fff",
          borderRadius: "14px",
          padding: "25px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        }}
      >
        {/* IMAGEN + INFO */}
        <div
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <img
            src="/picchu.jpg"
            alt="hotel"
            style={{
              width: "320px",
              height: "220px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />

          <div style={{ flex: 1 }}>
            <h2>Hotel Cusco Palace</h2>

            <p>📍 Ubicación: Cusco, Perú</p>
            <p>📅 Fecha: 20/05/2026</p>
            <p>👤 Personas: 2</p>

            <h3
              style={{
                marginTop: "20px",
                color: "#0ea5a8",
              }}
            >
              Total pagado: S/350
            </h3>
          </div>
        </div>

        {/* BOTONES */}
        <div
          style={{
            marginTop: "25px",
            display: "flex",
            gap: "15px",
          }}
        >
          <button
            onClick={() => navigate("/perfil")}
            style={{
              padding: "10px 18px",
              borderRadius: "10px",
              border: "none",
              background: "#0ea5a8",
              color: "white",
              cursor: "pointer",
            }}
          >
            Editar
          </button>

          <button
            style={{
              padding: "10px 18px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              background: "white",
              cursor: "pointer",
            }}
          >
            Comprobante
          </button>

          <button
            style={{
              padding: "10px 18px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              background: "white",
              cursor: "pointer",
            }}
          >
            Soporte Técnico
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetalleReserva;