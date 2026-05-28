import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Historial.css"; // Importación del CSS separado

function Historial() {
  const navigate = useNavigate();

  const [fecha, setFecha] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("Todos");
  const [estadoFiltro, setEstadoFiltro] = useState("Todos");

  // DATA: Mantenida íntegramente
  const [reservas, setReservas] = useState([
    {
      id: "VM1101",
      hotel: "Santuario de Machu Picchu",
      tipo: "Viaje",
      imagen: "/picchu.jpg",
      fecha: "2024-05-20",
      fechaVista: "20 de mayo, 2024",
      estado: "Completado",
      precio: "S/ 450.00",
      ubicacion: "Cusco, Perú",
      personas: "1 persona",
    },
    {
      id: "VM1102",
      hotel: "Sobrevuelo Líneas de Nazca",
      tipo: "Viaje",
      imagen: "/nazca.jpg",
      fecha: "2024-06-15",
      fechaVista: "15 de junio, 2024",
      estado: "Completado",
      precio: "S/ 380.00",
      ubicacion: "Ica, Perú",
      personas: "2 personas",
    },
    {
      id: "VM1103",
      hotel: "Lago Titicaca e Islas",
      tipo: "Viaje",
      imagen: "/titi.jpg",
      fecha: "2024-07-10",
      fechaVista: "10 de julio, 2024",
      estado: "Cancelado",
      precio: "S/ 220.00",
      ubicacion: "Puno, Perú",
      personas: "1 persona",
    },
    {
      id: "VM1104",
      hotel: "Ciudadela de Chan Chan",
      tipo: "Viaje",
      imagen: "/chan.jpg",
      fecha: "2024-08-05",
      fechaVista: "05 de agosto, 2024",
      estado: "Próximo viaje",
      precio: "S/ 150.00",
      ubicacion: "Trujillo, Perú",
      personas: "1 persona",
    },
    {
      id: "VM1105",
      hotel: "City Tour Lima Colonial",
      tipo: "Viaje",
      imagen: "/lima.jpg",
      fecha: "2024-09-12",
      fechaVista: "12 de septiembre, 2024",
      estado: "Próximo viaje",
      precio: "S/ 120.00",
      ubicacion: "Lima, Perú",
      personas: "3 personas",
    },
  ]);

  const [mostrarModal, setMostrarModal] = useState(false);
  const [idAEliminar, setIdAEliminar] = useState(null);

  const abrirConfirmacion = (id) => {
    setIdAEliminar(id);
    setMostrarModal(true);
  };

  const confirmarEliminacion = () => {
    setReservas(reservas.filter((res) => res.id !== idAEliminar));
    setMostrarModal(false);
  };

  // Lógica de filtrado
  const reservasFiltradas = reservas.filter((res) => {
    const coincideBusqueda = res.hotel.toLowerCase().includes(busqueda.toLowerCase());
    const coincideTipo = tipoFiltro === "Todos" || res.tipo === tipoFiltro;
    const coincideEstado = estadoFiltro === "Todos" || res.estado === estadoFiltro;
    const coincideFecha = fecha === "" || res.fecha === fecha;
    return coincideBusqueda && coincideTipo && coincideEstado && coincideFecha;
  });

  return (
    <div className="historial-container">
      <Sidebar />
      
      <div className="historial-main-content">
        <h1 className="historial-title">Tu Historial</h1>

        {/* FILTROS SUPERIORES */}
        <div className="filtros-superiores">
          <div className="filter-group">
            <label className="label-style">Fecha:</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="input-style"
            />
          </div>
          <div className="filter-group-expand">
            <label className="label-style">Buscar:</label>
            <input
              type="text"
              placeholder="Buscar destino..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="input-style"
            />
          </div>
          <button
            onClick={() => {
              setFecha("");
              setBusqueda("");
              setTipoFiltro("Todos");
              setEstadoFiltro("Todos");
            }}
            className="boton-gris"
          >
            Limpiar Filtros
          </button>
        </div>

        {/* TABS Y SELECTOR ESTADO */}
        <div className="tab-container">
          <div>
            {["Todos", "Hotel", "Viaje"].map((t) => (
              <button
                key={t}
                onClick={() => setTipoFiltro(t)}
                className="tab-button"
                style={{
                  borderBottom: tipoFiltro === t ? "3px solid #0ea5a8" : "none",
                  color: tipoFiltro === t ? "#0ea5a8" : "#64748b",
                }}
              >
                {t}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label style={{ fontWeight: "bold", color: "#444", fontSize: "14px" }}>
              Estado:
            </label>
            <select
              value={estadoFiltro}
              onChange={(e) => setEstadoFiltro(e.target.value)}
              className="select-style"
            >
              <option value="Todos">Todos</option>
              <option value="Completado">Completado</option>
              <option value="Cancelado">Cancelado</option>
              <option value="Próximo viaje">Próximo viaje</option>
            </select>
          </div>
        </div>

        {/* LISTADO DE TARJETAS */}
        <div className="reserva-list">
          {reservasFiltradas.map((res) => (
            <div key={res.id} className="card-reserva">
              <img src={res.imagen} alt={res.hotel} className="card-image" />
              <div style={{ flex: 2 }}>
                <h3 className="hotel-title">{res.hotel}</h3>
                <p className="detail-text">📍 {res.ubicacion}</p>
                <p className="detail-text">📅 {res.fechaVista}</p>
                <p className="detail-text">🆔 Reserva #{res.id}</p>
              </div>
              <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <span
                  className={`badge-base ${
                    res.estado === "Completado" 
                      ? "badge-completado" 
                      : res.estado === "Cancelado" 
                        ? "badge-cancelado" 
                        : "badge-proximo"
                  }`}
                >
                  {res.estado}
                </span>
              </div>
              <div className="right-side-card">
                <div style={{ textAlign: "right", marginBottom: "10px" }}>
                  <p className="price-text">{res.precio}</p>
                  <p style={{ margin: 0, fontSize: "0.75rem", color: "#64748b" }}>
                    {res.personas}
                  </p>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={() =>
                      navigate("/detalle-reserva", { state: { reserva: res } })
                    }
                    className="outline-button-details"
                  >
                    Ver detalles
                  </button>
                  <button
                    onClick={() => abrirConfirmacion(res.id)}
                    className="delete-icon-button"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL ELIMINAR */}
      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-confirm-content">
            <h3>¿Estás seguro?</h3>
            <p>¿Realmente deseas eliminar esta reserva?</p>
            <div className="modal-footer">
              <button
                onClick={() => setMostrarModal(false)}
                className="btn-cancelar-modal"
              >
                No
              </button>
              <button onClick={confirmarEliminacion} className="btn-eliminar-modal">
                Sí, eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Historial;