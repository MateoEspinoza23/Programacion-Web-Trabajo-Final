import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./DetalleReserva.css"; // Importación de los estilos

const DATOS_USUARIO = {
  nombre: "Usuario",
  foto: "https://i.pravatar.cc/150?u=user123",
};

function DetalleReserva() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mostrarPoliticas, setMostrarPoliticas] = useState(false);

  // Recupera la reserva del historial
  const reserva = location.state?.reserva;

  if (!reserva) {
    return (
      <div className="error-container">
        <Sidebar />
        <div className="error-content">
          <h2>No se seleccionó ninguna reserva</h2>
          <button onClick={() => navigate("/historial")}>Volver</button>
        </div>
      </div>
    );
  }

  // Lógica matemática para el resumen de pago (Mantenida intacta)
  const totalNumerico = parseFloat(
    reserva.precio.replace("S/ ", "").replace(",", ""),
  );
  const igv = (totalNumerico * 0.18).toFixed(2);
  const subtotal = (totalNumerico - igv).toFixed(2);

  return (
    <div className="page-container-detalle">
      <Sidebar />

      <div className="main-content-detalle">
        {/* BARRA SUPERIOR */}
        <div className="header-nav">
          <button onClick={() => navigate("/historial")} className="back-link-detalle">
            ← Volver al historial
          </button>
          <div className="user-profile-nav" onClick={() => navigate("/perfil")}>
            <span className="user-name-nav">
              {DATOS_USUARIO.nombre}
            </span>
            <img
              src={DATOS_USUARIO.foto}
              alt="Perfil"
              className="avatar-small"
            />
          </div>
        </div>

        <h2 className="title-detalle">Detalle de reserva</h2>
        <p className="subtitle-detalle">Reserva #{reserva.id} 📄</p>

        <div className="layout-grid">
          {/* COLUMNA IZQUIERDA (Principal) */}
          <div className="column-left">
            <div className="card-detalle">
              {/* Info Superior: Imagen y datos básicos */}
              <div className="card-header-info">
                <img
                  src={reserva.imagen}
                  alt={reserva.hotel}
                  className="tour-image"
                />
                <div style={{ flex: 1 }}>
                  <span className="status-badge">{reserva.estado}</span>
                  <h3 className="hotel-name">
                    {reserva.hotel}
                  </h3>
                  <p className="info-text">📍 Ubicación: {reserva.ubicacion}</p>
                  <p className="info-text">📅 Fecha: {reserva.fechaVista}</p>
                  <p className="info-text">
                    👤 {reserva.personas || "1 persona"}
                  </p>
                </div>
                <div className="price-container-top">
                  <p className="label-total-pagado">Total pagado</p>
                  <p className="price-large">{reserva.precio}</p>
                </div>
              </div>

              {/* Pestaña Información */}
              <div className="tabs-container">
                <span className="active-tab">Información</span>
              </div>

              {/* Info Reserva + Políticas */}
              <div className="sections-row">
                <div className="sub-section">
                  <h4 className="section-title">INFORMACIÓN DE LA RESERVA</h4>
                  <div className="data-row">
                    <span>Estado</span>
                    <span style={{ fontWeight: "bold" }}>{reserva.estado}</span>
                  </div>
                  <div className="data-row">
                    <span>Código de operación</span>
                    <span>{reserva.id}</span>
                  </div>
                  <div className="data-row">
                    <span>Tipo de servicio</span>
                    <span>Viaje</span>
                  </div>
                </div>

                <div className="sub-section">
                  <h4 className="section-title">POLÍTICAS Y CONDICIONES</h4>
                  <p className="policy-text">
                    Revisa nuestras normas de cancelación vigentes.
                  </p>
                  <button
                    onClick={() => setMostrarPoliticas(true)}
                    className="politica-button"
                  >
                    📋 Ver políticas de cancelación
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="column-right">
            <div className="card-detalle">
              <h4 className="section-title">RESUMEN DE PAGO</h4>
              <div className="data-row">
                <span>Precio Base</span>
                <span>S/ {subtotal}</span>
              </div>
              <div className="data-row">
                <span>Impuestos (IGV 18%)</span>
                <span>S/ {igv}</span>
              </div>
              <hr className="divider" />
              <div className="data-row data-row-bold">
                <span>Total pagado</span>
                <span className="text-teal">{reserva.precio}</span>
              </div>
              <div className="status-box">
                ✅ Pago procesado con éxito <br />
                <small style={{ fontWeight: "normal" }}>
                  {reserva.fechaVista}
                </small>
              </div>
            </div>

            <div className="card-detalle">
              <h4 className="section-title">ACCIONES</h4>
              <button className="action-button">
                🔄 Solicitar Nueva Reserva
              </button>
              <button className="action-button-secondary">
                ⭐ Calificar Servicio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL DE POLÍTICAS */}
      {mostrarPoliticas && (
        <div className="modal-overlay">
          <div className="modal-politica">
            <div className="modal-header">
              <h3 style={{ margin: 0 }}>Políticas de Cancelación</h3>
              <button
                onClick={() => setMostrarPoliticas(false)}
                className="close-modal"
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <p>1. Cancelación 48h antes: Reembolso del 90%.</p>
              <p>2. Cambios de fecha: Sujetos a disponibilidad.</p>
              <p>3. Ausencia: Se pierde el 100% del pago.</p>
            </div>
            <button
              onClick={() => setMostrarPoliticas(false)}
              className="action-button"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetalleReserva;