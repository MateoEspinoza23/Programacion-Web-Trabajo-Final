import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";
import "./Historial.css";

import { AuthContext } from "../../context/Auth";

import {
  getReservas,
  deleteReserva,
} from "../../services/reservaService";

function Historial() {

  const navigate = useNavigate();

  const { usuario: usuarioGlobal } = useContext(AuthContext);

  const [fecha, setFecha] = useState("");
  const [busqueda, setBusqueda] = useState("");

  const [reservas, setReservas] = useState([]);

  const [mostrarModal, setMostrarModal] = useState(false);
  const [idAEliminar, setIdAEliminar] = useState(null);

  const [reservaSeleccionada, setReservaSeleccionada] = useState(null);
  const [mostrarModalDetalle, setMostrarModalDetalle] = useState(false);

  useEffect(() => {

    if (usuarioGlobal) {

      cargarReservas();

    }

  }, [usuarioGlobal]);

  const cargarReservas = async () => {

    try {

      const data = await getReservas();

      console.log("TODAS LAS RESERVAS:", data);
      console.log("USUARIO LOGUEADO:", usuarioGlobal);

      const correoUsuario = usuarioGlobal?.correo;

      const filtradas = data

        .filter((res) => res.usuarioEmail === correoUsuario)

        .map((res) => {

          let foto = "/default.jpg";

          if (res.destino === "Machu Picchu")
            foto = "/picchu.jpg";

          if (
            res.destino === "Lineas de Nazca" ||
            res.destino === "Líneas de Nazca"
          )
            foto = "/nazca.jpg";

          if (res.destino === "Montaña de 7 Colores")
            foto = "/7colores.jpg";

          if (res.destino === "Lago Titicaca")
            foto = "/titicaca.jpg";

          if (res.destino === "Chan Chan")
            foto = "/chanchan.jpg";

          if (res.destino === "Centro de Lima")
            foto = "/lima.jpg";

          return {

            ...res,

            imagen: foto,

            estado: res.estado || "Confirmada",

          };

        });

      setReservas(filtradas);

    } catch (error) {

      console.error(error);

      alert("No se pudieron cargar las reservas.");

    }

  };

  const abrirConfirmacion = (id) => {

    setIdAEliminar(id);

    setMostrarModal(true);

  };

  const confirmarEliminacion = async () => {

    try {

      const reserva = reservas.find(
        (r) => r.idReserva === idAEliminar
      );

      if (!reserva) return;

      await deleteReserva(reserva.id);

      setMostrarModal(false);

      setIdAEliminar(null);

      await cargarReservas();

    } catch (error) {

      console.error(error);

      alert("No se pudo eliminar la reserva.");

    }

  };

  const verDetalles = (res) => {

    setReservaSeleccionada(res);

    setMostrarModalDetalle(true);

  };

  const reservasFiltradas = reservas.filter((res) => {

    const coincideBusqueda =
      res.destino
        ?.toLowerCase()
        .includes(busqueda.toLowerCase());

    const coincideFecha =
      fecha === "" ||
      res.fechaViaje === fecha;

    return coincideBusqueda && coincideFecha;

  });

  return (
    <div className="historial-container">

      <Sidebar />

      <div className="historial-main-content">

        <h1 className="historial-title">
          Tu Historial
        </h1>

        {/* ================= FILTROS ================= */}

        <div className="filtros-superiores">

          <div className="filter-group">

            <label className="label-style">
              Fecha:
            </label>

            <input
              type="date"
              value={fecha}
              onChange={(e) =>
                setFecha(e.target.value)
              }
              className="input-style"
            />

          </div>

          <div className="filter-group-expand">

            <label className="label-style">
              Buscar:
            </label>

            <input
              type="text"
              placeholder="Buscar destino..."
              value={busqueda}
              onChange={(e) =>
                setBusqueda(e.target.value)
              }
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

        {/* ================= LISTADO ================= */}

        <div className="reserva-list">

          {reservasFiltradas.length === 0 ? (

            <div
              style={{
                width: "100%",
                textAlign: "center",
                padding: "60px"
              }}
            >

              <h2>
                No existen reservas registradas.
              </h2>

            </div>

          ) : (

            reservasFiltradas.map((res) => (

              <div
                key={res.id}
                className="card-reserva"
              >

                <img
                  src={res.imagen}
                  alt={res.destino}
                  className="card-image"
                />

                <div style={{ flex: 2 }}>

                  <h3 className="hotel-title">

                    {res.destino}

                  </h3>

                  <p className="detail-text">

                    📅 {res.fechaViaje}

                  </p>

                  <p className="detail-text">

                    👥 {res.cantidadPasajeros}

                  </p>

                  <p className="detail-text">

                    🆔 {res.idReserva}

                  </p>

                  <p className="detail-text">

                    🎫 {res.tipoBoleto}

                  </p>

                  <p className="detail-text">

                    💺

                    {Array.isArray(res.asientos)
                      ? res.asientos.join(", ")
                      : res.asientos}

                  </p>

                </div>

                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center"
                  }}
                >

                  <span
                    className={`badge-base ${res.estado === "Cancelado"

                      ? "badge-cancelado"

                      : "badge-completado"

                      }`}
                  >

                    {res.estado}

                  </span>

                </div>

                <div className="right-side-card">

                  <div
                    style={{
                      textAlign: "right",
                      marginBottom: "10px"
                    }}
                  >

                    <p className="price-text">

                      S/ {res.totalPagar}

                    </p>

                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "8px"
                    }}
                  >

                    <button
                      className="outline-button-details"
                      onClick={() =>
                        verDetalles(res)
                      }
                    >

                      Ver detalles

                    </button>

                    <button
                      className="delete-icon-button"
                      onClick={() =>
                        abrirConfirmacion(
                          res.idReserva
                        )
                      }
                    >

                      🗑️

                    </button>

                  </div>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

      {mostrarModal && (

        <div className="modal-overlay">

          <div className="modal-confirm-content">

            <h3>

              ¿Estás seguro?

            </h3>

            <p>

              ¿Realmente deseas eliminar esta reserva?

            </p>

            <div className="modal-footer">

              <button
                onClick={() => setMostrarModal(false)}
                className="btn-cancelar-modal"
              >

                No

              </button>

              <button
                onClick={confirmarEliminacion}
                className="btn-eliminar-modal"
              >

                Sí, eliminar

              </button>

            </div>

          </div>

        </div>

      )}

      {mostrarModalDetalle && reservaSeleccionada && (

        <div className="modal-overlay">

          <div className="modal-detalle-container">

            <div className="modal-detalle-header">

              <button
                onClick={() =>
                  setMostrarModalDetalle(false)
                }
                className="btn-volver"
              >

                ← Volver al historial

              </button>

              <h2>

                Detalle de reserva

              </h2>

              <span className="reserva-id-tag">

                Reserva #{reservaSeleccionada.idReserva}

              </span>

            </div>

            <div className="modal-detalle-body">

              <div className="detalle-main-info">

                <div className="reserva-card-horizontal">

                  <img
                    src={reservaSeleccionada.imagen}
                    alt={reservaSeleccionada.destino}
                    className="card-image"
                  />

                  <div className="reserva-card-text">

                    <span className="badge-estado-detalle">

                      {reservaSeleccionada.estado}

                    </span>

                    <h3>

                      {reservaSeleccionada.destino}

                    </h3>

                    <p>

                      📅 {reservaSeleccionada.fechaViaje}

                    </p>

                    <p>

                      👥 {reservaSeleccionada.cantidadPasajeros}

                    </p>

                    <p>

                      🎫 {reservaSeleccionada.tipoBoleto}

                    </p>

                    <p>

                      💺 {

                        Array.isArray(
                          reservaSeleccionada.asientos
                        )

                          ? reservaSeleccionada.asientos.join(", ")

                          : reservaSeleccionada.asientos

                      }

                    </p>

                  </div>

                  <div className="reserva-card-price">

                    <p>

                      Total pagado

                    </p>

                    <span>

                      S/ {reservaSeleccionada.totalPagar}

                    </span>

                  </div>

                </div>

                <div className="informacion-adicional-box">

                  <h4>

                    Información de la reserva

                  </h4>

                  <div className="info-grid">

                    <div className="info-item">

                      <span>

                        Fecha de reserva

                      </span>

                      <p>

                        {reservaSeleccionada.fechaRegistro}

                      </p>

                    </div>

                    <div className="info-item">

                      <span>

                        Usuario

                      </span>

                      <p>

                        {reservaSeleccionada.usuarioEmail}

                      </p>

                    </div>

                    <div className="info-item">

                      <span>

                        Código

                      </span>

                      <p>

                        {reservaSeleccionada.idReserva}

                      </p>

                    </div>

                    <div className="info-item">

                      <span>

                        Estado

                      </span>

                      <p>

                        {reservaSeleccionada.estado}

                      </p>

                    </div>

                  </div>

                </div>

              </div>

              <div className="detalle-resumen-pago">

                <h4>

                  Resumen de pago

                </h4>

                <div className="pago-row">

                  <span>

                    Total

                  </span>

                  <span>

                    S/ {reservaSeleccionada.totalPagar}

                  </span>

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
