import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Historial() {
  const [fecha, setFecha] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("Todos");

  const navigate = useNavigate();

  const limpiarFiltros = () => {
    setFecha("");
    setBusqueda("");
    setTipoFiltro("Todos");
  };

  const reservas = [
    {
      hotel: "Hotel Cusco Palace",
      tipo: "Hotel",
      imagen: "/picchu.jpg",
      fecha: "20/05/2026",
      estado: "Confirmado",
      precio: "S/350",
    },
    {
      hotel: "Tour Líneas de Nazca",
      tipo: "Viaje",
      imagen: "/nazca.jpg",
      fecha: "18/05/2026",
      estado: "Confirmado",
      precio: "S/420",
    },
    {
      hotel: "Hotel Miraflores",
      tipo: "Hotel",
      imagen: "/picchu.jpg",
      fecha: "15/05/2026",
      estado: "Pendiente",
      precio: "S/280",
    },
  ];

  const reservasFiltradas = reservas.filter((r) => {
    const coincideNombre =
      busqueda === "" ||
      r.hotel.toLowerCase().includes(busqueda.toLowerCase());

    const coincideFecha =
      fecha === "" ||
      r.fecha ===
        fecha.split("-").reverse().join("/");

    const coincideTipo =
      tipoFiltro === "Todos" ||
      r.tipo === tipoFiltro;

    return (
      coincideNombre &&
      coincideFecha &&
      coincideTipo
    );
  });

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Historial de Reservas
      </h1>

      {/* FILTROS */}
      <aside
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "30px",
          background: "#fff",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p>Fecha</p>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div>
          <p>Hotel o lugar</p>
          <input
            type="text"
            placeholder="Buscar..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              width: "220px",
            }}
          />
        </div>

        <div>
          <p>Tipo</p>

          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <button
              onClick={() => setTipoFiltro("Todos")}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                background:
                  tipoFiltro === "Todos"
                    ? "#0ea5a8"
                    : "white",
                color:
                  tipoFiltro === "Todos"
                    ? "white"
                    : "#333",
                cursor: "pointer",
              }}
            >
              Todos
            </button>

            <button
              onClick={() => setTipoFiltro("Hotel")}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                background:
                  tipoFiltro === "Hotel"
                    ? "#0ea5a8"
                    : "white",
                color:
                  tipoFiltro === "Hotel"
                    ? "white"
                    : "#333",
                cursor: "pointer",
              }}
            >
              Hotel
            </button>

            <button
              onClick={() => setTipoFiltro("Viaje")}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                background:
                  tipoFiltro === "Viaje"
                    ? "#0ea5a8"
                    : "white",
                color:
                  tipoFiltro === "Viaje"
                    ? "white"
                    : "#333",
                cursor: "pointer",
              }}
            >
              Viaje
            </button>
          </div>
        </div>

        <div>
          <button
            onClick={limpiarFiltros}
            style={{
              padding: "10px 18px",
              borderRadius: "8px",
              border: "none",
              background: "#ef4444",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "22px",
            }}
          >
            Limpiar filtros
          </button>
        </div>
      </aside>

      {/* TARJETAS */}
      {reservasFiltradas.map((reserva, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src={reserva.imagen}
            alt="hotel"
            style={{
              width: "130px",
              height: "110px",
              borderRadius: "14px",
              marginRight: "20px",
              objectFit: "cover",
            }}
          />

          <div style={{ flex: 1 }}>
            <h2>{reserva.hotel}</h2>
            <p>Fecha: {reserva.fecha}</p>

            <p>
              Estado:{" "}
              <span
                style={{
                  background:
                    reserva.estado === "Confirmado"
                      ? "#d4edda"
                      : "#fff3cd",
                  color:
                    reserva.estado === "Confirmado"
                      ? "#155724"
                      : "#856404",
                  padding: "5px 10px",
                  borderRadius: "20px",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {reserva.estado}
              </span>
            </p>

            <p>Precio: {reserva.precio}</p>
          </div>

          <button
            onClick={() =>
              navigate("/detalle-reserva")
            }
            style={{
              padding: "10px 18px",
              borderRadius: "10px",
              border: "none",
              background: "#0ea5a8",
              color: "white",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "14px",
              boxShadow:
                "0 4px 8px rgba(0,0,0,0.08)",
            }}
          >
            Ver detalles
          </button>
        </div>
      ))}
    </div>
  );
}

export default Historial;