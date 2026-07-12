import "./ReservaCheckout.css";

import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, TextField, Button, Box, Divider } from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";

export default function ReservaCheckout() {
  // 1. Estado en memoria (Mock data) como exige la Nota 3 del proyecto
  const location = useLocation();
  const navigate = useNavigate();

  const reserva = location.state?.reserva;

  if (!reserva) {
    return (
      <div className="checkout-empty">
        <div className="checkout-empty-card">

          <div className="checkout-empty-icon">
            🧳
          </div>

          <h2>Aún no tienes una reserva activa</h2>

          <p>
            Explora nuestros destinos turísticos y realiza
            tu primera reserva.
          </p>

          <button
            className="btn-primary"
            onClick={() => navigate("/")}
          >
            Explorar destinos
          </button>

        </div>
      </div>
    );
  }

  const PRECIOS = {
    Estandar: 15,
    VIP: 45,
    Premium: 90
  };

  const precioUnitario =
    PRECIOS[reserva.tipoBoleto] || 15;

  const subtotal =
    precioUnitario * pasajeros;

  const igv = subtotal * 0.18;

  const total = subtotal + igv;

  const [fechaIda, setFechaIda] = useState(reserva.fechaIda);
  const [fechaVuelta, setFechaVuelta] = useState(reserva.fechaVuelta);
  const [pasajeros, setPasajeros] = useState(reserva.cantidadPasajeros);



  // Funciones simuladas para los botones de acción
  const handleConfirmar = () => {

    alert("¡Pago realizado correctamente!");

    navigate("/historial");

  };


  const handleCancelar = () => {

    navigate("/");

  };

  return (
    <Container
      maxWidth="lg"
      className="checkout-container"
    >
      <Typography
        variant="h4"
        className="checkout-title"
      >
        Checkout y Gestión de Reserva
      </Typography>

      <Grid container spacing={4}>
        {/* COLUMNA IZQUIERDA: Formulario de Edición y Cancelación */}
        <Grid item xs={12} md={7}>
          <Card
            elevation={0}
            className="checkout-card"
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>Detalles de tu viaje</Typography>
              <Divider sx={{ mb: 3 }} />

              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField label="Destino" defaultValue={reserva.destino} InputProps={{ readOnly: true }} fullWidth />

                <Grid container spacing={2}>
                  <Grid item xs={6}>

                    <TextField
                      label="Fecha de Ida"
                      type="date"
                      value={fechaIda}
                      onChange={(e) => setFechaIda(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      label="Fecha de Vuelta"
                      type="date"
                      value={fechaVuelta}
                      onChange={(e) => setFechaVuelta(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                </Grid>

                <TextField
                  label="Cantidad de Pasajeros"
                  type="number"
                  value={pasajeros}
                  onChange={(e) => setPasajeros(Number(e.target.value))}
                  fullWidth
                />
                <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                  <Button
                    variant="outlined"
                    className="btn-secondary"
                    onClick={() =>
                      navigate(-1)
                    }
                  >
                    Editar Reserva
                  </Button>
                  <Button variant="outlined" color="error" fullWidth onClick={handleCancelar}>Cancelar Reserva</Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* COLUMNA DERECHA: Resumen de Compra y Método de Pago */}
        <Grid item xs={12} md={5}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Resumen de Compra</Typography>
              <Divider sx={{ mb: 2 }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography>Costo de Tickets ({pasajeros}x)</Typography>
                <Typography>S/ {subtotal.toFixed(2)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography>Impuestos y Cargos</Typography>
                <Typography>S/ {igv.toFixed(2)}</Typography>
              </Box>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                <Typography variant="h6" fontWeight="bold">Total a Pagar</Typography>
                <Typography variant="h6" color="primary" fontWeight="bold">
                  S/ {total.toFixed(2)}
                </Typography>
              </Box>

              <Typography variant="subtitle1" gutterBottom fontWeight="bold">Método de Pago</Typography>
              <TextField label="Número de Tarjeta" placeholder="**** **** **** ****" fullWidth sx={{ mb: 2 }} />

              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <TextField label="Vencimiento (MM/AA)" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField label="CVC" type="password" fullWidth />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                fullWidth
                className="btn-primary" onClick={handleConfirmar}>
                Confirmar y Pagar
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

