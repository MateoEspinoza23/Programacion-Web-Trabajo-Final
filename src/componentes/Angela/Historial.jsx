import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Historial.css";

import { AuthContext } from "../../context/Auth"; 
import { ReservaContext } from "../../context/ReservaContext";

function Historial() {
  const navigate = useNavigate();

  const [fecha, setFecha] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const { usuario: usuarioGlobal } = useContext(AuthContext); 
  const { reservas: reservasGlobales } = useContext(ReservaContext);

  const [reservas, setReservas] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [idAEliminar, setIdAEliminar] = useState(null);

  // --- NUEVOS ESTADOS PARA LA VENTANITA DE DETALLES ---
  const [reservaSeleccionada, setReservaSeleccionada] = useState(null);
  const [mostrarModalDetalle, setMostrarModalDetalle] = useState(false);

  useEffect(() => {
    if (usuarioGlobal && reservasGlobales) {
      const filtradas = reservasGlobales
        .filter((res) => res.usuarioEmail === usuarioGlobal.correo)
        .map((res) => {
          
          let foto = "/default.jpg"; 
          if (res.destino === "Machu Picchu") foto = "/picchu.jpg";
          if (res.destino === "Líneas de Nazca") foto = "/nazca.jpg"; 
          if (res.destino === "Montaña de 7 Colores") foto = "/7colores.jpg";
          
          // Retornamos la reserva con la nueva propiedad 'imagen'
          return { ...res, imagen: foto };
        });
      setReservas(filtradas);
    }
  }, [usuarioGlobal, reservasGlobales]);

  const abrirConfirmacion = (id) => {
    setIdAEliminar(id);
    setMostrarModal(true);
  };

  const confirmarEliminacion = () => {
    setReservas(reservas.filter((res) => res.idReserva !== idAEliminar));
    setMostrarModal(false);
  };

  // --- FUNCIÓN PARA ABRIR LA VENTANITA ---
  const verDetalles = (res) => {
    setReservaSeleccionada(res);
    setMostrarModalDetalle(true);
  };

  // Lógica de filtrado
  const reservasFiltradas = reservas.filter((res) => {
    const coincideBusqueda = res.destino?.toLowerCase().includes(busqueda.toLowerCase());
    const coincideFecha = fecha === "" || res.fechaViaje === fecha;
    return coincideBusqueda && coincideFecha;
  });

  return (
    <div className="historial-container">
      <Sidebar />
      
      <div className="historial-main-content">
        <h1 className="historial-title">Tu Historial</h1>

        {/* FILTROS */}
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
            }}
            className="boton-gris"
          >
            Limpiar Filtros
          </button>
        </div>

        {/* LISTADO DE TARJETAS */}
        <div className="reserva-list">
          {reservasFiltradas.map((res) => (
            <div key={res.idReserva} className="card-reserva">
              <img src={res.imagen} alt={res.destino} className="card-image" />
              <div style={{ flex: 2 }}>
                <h3 className="hotel-title">{res.destino}</h3> 
                <p className="detail-text">📍 {res.ubicacion}</p>
                <p className="detail-text">📅 {res.fechaViaje}</p>
                <p className="detail-text">🆔 Reserva #{res.idReserva}</p>
              </div>
              
              <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                <span className={`badge-base ${
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
                  <p className="price-text">S/ {res.totalPagar}</p>
                  <p style={{ margin: 0, fontSize: "0.75rem", color: "#64748b" }}>
                    {res.personas}
                  </p>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={() => verDetalles(res)} // <-- CAMBIADO PARA ABRIR VENTANITA
                    className="outline-button-details"
                  >
                    Ver detalles
                  </button>
                  <button
                    onClick={() => abrirConfirmacion(res.idReserva)} 
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

      {/* --- MODAL ELIMINAR (Ya lo tenías) --- */}
      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-confirm-content">
            <h3>¿Estás seguro?</h3>
            <p>¿Realmente deseas eliminar esta reserva?</p>
            <div className="modal-footer">
              <button onClick={() => setMostrarModal(false)} className="btn-cancelar-modal">No</button>
              <button onClick={confirmarEliminacion} className="btn-eliminar-modal">Sí, eliminar</button>
            </div>
          </div>
        </div>
      )}

      {/* VENTANITA DE DETALLES MEJORADA */}
      {mostrarModalDetalle && reservaSeleccionada && (
        <div className="modal-overlay">
          <div className="modal-detalle-container">
            <div className="modal-detalle-header">
              <button onClick={() => setMostrarModalDetalle(false)} className="btn-volver">
                ← Volver al historial
              </button>
              <h2>Detalle de reserva</h2>
              <span className="reserva-id-tag">Reserva #{reservaSeleccionada.idReserva} 📋</span>
            </div>

            <div className="modal-detalle-body">
              {/* Info Principal */}
              <div className="detalle-main-info">
                <div className="reserva-card-horizontal">
                    <img src={reservaSeleccionada.imagen} alt={reservaSeleccionada.destino} className="card-image" />                  <div className="reserva-card-text">
                    <span className="badge-estado-detalle">{reservaSeleccionada.estado}</span>
                    <h3>{reservaSeleccionada.destino}</h3>
                    <p>📍 Ubicación: {reservaSeleccionada.ubicacion}</p>
                    <p>📅 Fecha: {reservaSeleccionada.fechaViaje}</p>
                    <p>👤 {reservaSeleccionada.personas}</p>
                  </div>
                  <div className="reserva-card-price">
                    <p>Total pagado</p>
                    <span>S/ {reservaSeleccionada.totalPagar}</span>
                  </div>
                </div>

                <div className="informacion-adicional-box">
                  <h4>Información de la reserva</h4>
                  <div className="info-grid">
                    <div className="info-item">
                      <span>Fecha de reserva:</span>
                      <p>{reservaSeleccionada.fechaReserva || "10/11/2024"}</p>
                    </div>
                    <div className="info-item">
                      <span>Método de pago:</span>
                      <p>Tarjeta Débito/Crédito</p>
                    </div>
                    <div className="info-item">
                      <span>Pago realizado:</span>
                      <p>{reservaSeleccionada.fechaPago || reservaSeleccionada.fechaViaje}</p>
                    </div>
                    <div className="info-item">
                      <span>Código de reserva:</span>
                      <p>VM{reservaSeleccionada.idReserva}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resumen de Pago */}
              <div className="detalle-resumen-pago">
                <h4>Resumen de pago</h4>
                <div className="pago-row">
                  <span>Precio del tour</span>
                  <span>S/ {(reservaSeleccionada.totalPagar * 0.9).toFixed(2)}</span>
                </div>
                <div className="pago-row">
                  <span>Impuestos y cargos</span>
                  <span>S/ {(reservaSeleccionada.totalPagar * 0.1).toFixed(2)}</span>
                </div>
                <div className="pago-total-row">
                  <span>Total pagado</span>
                  <span className="total-highlight">S/ {reservaSeleccionada.totalPagar}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Historial;