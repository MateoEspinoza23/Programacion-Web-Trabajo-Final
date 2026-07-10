import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, TextField, Button, Box, Divider } from '@mui/material';

export default function ReservaCheckout() {
  // 1. Estado en memoria (Mock data) como exige la Nota 3 del proyecto
  const [reserva, setReserva] = useState({
    destino: 'Cusco - Machu Picchu',
    fechaIda: '2026-06-15',
    fechaVuelta: '2026-06-20',
    pasajeros: 2,
    precioBase: 450
  });

  const impuestos = 50;
  const total = reserva.precioBase + impuestos;

  // Funciones simuladas para los botones de acción
  const handleConfirmar = () => alert("¡Transacción aprobada! Reserva confirmada con éxito.");
  const handleCancelar = () => alert("Reserva cancelada. Redirigiendo al inicio...");

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Checkout y Gestión de Reserva
      </Typography>

      <Grid container spacing={4}>
        {/* COLUMNA IZQUIERDA: Formulario de Edición y Cancelación */}
        <Grid item xs={12} md={7}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h6" gutterBottom>Detalles de tu viaje</Typography>
              <Divider sx={{ mb: 3 }} />

              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField label="Destino" defaultValue={reserva.destino} InputProps={{ readOnly: true }} fullWidth />
                
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField label="Fecha de Ida" type="date" defaultValue={reserva.fechaIda} fullWidth />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField label="Fecha de Vuelta" type="date" defaultValue={reserva.fechaVuelta} fullWidth />
                  </Grid>
                </Grid>
                
                <TextField label="Cantidad de Pasajeros" type="number" defaultValue={reserva.pasajeros} fullWidth />

                <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                  <Button variant="outlined" color="primary" fullWidth>Editar Reserva</Button>
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
                <Typography>Costo de Tickets ({reserva.pasajeros}x)</Typography>
                <Typography>${reserva.precioBase}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography>Impuestos y Cargos</Typography>
                <Typography>${impuestos}</Typography>
              </Box>
              
              <Divider sx={{ mb: 2 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                <Typography variant="h6" fontWeight="bold">Total a Pagar</Typography>
                <Typography variant="h6" color="primary" fontWeight="bold">${total}</Typography>
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

              <Button variant="contained" color="success" size="large" fullWidth onClick={handleConfirmar}>
                Confirmar y Pagar
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}