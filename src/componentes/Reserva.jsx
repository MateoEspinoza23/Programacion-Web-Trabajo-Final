import React, { useState } from 'react';
import { createReserva } from '../services/reservaService'; // Asegúrate de tener este servicio para manejar la reserva
import { useLocation, useParams } from 'react-router-dom';
import { TextField, Button, MenuItem, Box, Typography, Paper, Grid } from '@mui/material';

const Reserva = () => {
  const { destino } = useParams();
  const location = useLocation();
  const destinoData = location.state?.destinoCompleto;

  // Estados del formulario original
  const [fecha, setFecha] = useState('');
  const [pasajeros, setPasajeros] = useState(1);
  const [tipoBoleto, setTipoBoleto] = useState('Estandar');

  // 🚀 NUEVOS ESTADOS PARA LOS ASIENTOS
  const [mostrarAsientos, setMostrarAsientos] = useState(false); // Controla qué pantalla se ve
  const [asientosSeleccionados, setAsientosSeleccionados] = useState([]); // Guarda los asientos elegidos

  // Datos de respaldo por si acaso
  const nombreDestino = destinoData?.nombre || destino;
  const imagenFondo = destinoData?.img || 'https://images.unsplash.com/photo-1526392060635-9d6019884377';
  const descripcionDestino = destinoData?.descripcion || 'Disfruta de un viaje inolvidable con TuriBus.';
  const fechaRegistro = new Date().toISOString().split("T")[0]; // Fecha actual en formato YYYY-MM-DD

  const usuarioActual = JSON.parse(
    localStorage.getItem("usuarioTuriBus")
  );

  const generarCodigoReserva = () => {
    return "RES-" + Date.now();
  };
  // Simulación de un bus de 24 asientos (true = ocupado por otro usuario, false = disponible)
  const [mapaAsientos] = useState([
    { id: '1A', ocupado: false }, { id: '1B', ocupado: true }, { id: '1C', ocupado: false }, { id: '1D', ocupado: false },
    { id: '2A', ocupado: false }, { id: '2B', ocupado: false }, { id: '2C', ocupado: true }, { id: '2D', ocupado: false },
    { id: '3A', ocupado: true }, { id: '3B', ocupado: false }, { id: '3C', ocupado: false }, { id: '3D', ocupado: false },
    { id: '4A', ocupado: false }, { id: '4B', ocupado: false }, { id: '4C', ocupado: false }, { id: '4D', ocupado: true },
    { id: '5A', ocupado: false }, { id: '5B', ocupado: false }, { id: '5C', ocupado: false }, { id: '5D', ocupado: false },
    { id: '6A', ocupado: true }, { id: '6B', ocupado: true }, { id: '6C', ocupado: false }, { id: '6D', ocupado: false },
  ]);

  // Al dar clic en "Confirmar y ver precios"
  const handleSiguientePaso = (e) => {
    e.preventDefault();
    if (!fecha) {
      alert("Por favor, selecciona una fecha de viaje.");
      return;
    }
    setMostrarAsientos(true); // Cambiamos de pantalla internamente
  };

  // Manejar la selección de asientos
  const seleccionarAsiento = (asientoId) => {
    // Si ya está seleccionado, lo quitamos
    if (asientosSeleccionados.includes(asientoId)) {
      setAsientosSeleccionados(asientosSeleccionados.filter(id => id !== asientoId));
    } else {
      // Control de límite: no puede elegir más asientos que la cantidad de pasajeros
      if (asientosSeleccionados.length >= Number(pasajeros)) {
        alert(`Ya seleccionaste los ${pasajeros} asientos correspondientes a tus pasajeros.`);
        return;
      }
      setAsientosSeleccionados([...asientosSeleccionados, asientoId]);
    }
  };

  const finalizarCompra = async () => {

    try {


      console.log("LOCALSTORAGE:");
      console.log(localStorage.getItem("usuarioTuriBus"));

      const usuarioActual = JSON.parse(localStorage.getItem("usuarioTuriBus"));

      console.log("USUARIO ACTUAL:");
      console.log(usuarioActual);

      const reserva = {

        idReserva: generarCodigoReserva(),

        usuarioEmail: usuarioActual?.correo || "",

        destino: nombreDestino,

        fechaViaje: fecha,

        cantidadPasajeros: Number(pasajeros),

        tipoBoleto,

        asientos: asientosSeleccionados,

        totalPagar:
          tipoBoleto === "VIP"
            ? Number(pasajeros) * 45
            : tipoBoleto === "Premium"
              ? Number(pasajeros) * 90
              : Number(pasajeros) * 15,

        fechaRegistro
      };

      console.log("RESERVA A ENVIAR:", reserva);
      await createReserva(reserva);

      alert("Reserva registrada correctamente.");

      navigate("/checkout", {
        state: {
          reserva
        }
      });

    } catch (error) {

      console.error(error);

      alert("No se pudo registrar la reserva.");

    }

  };

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: 'calc(100vh - 35px)',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${imagenFondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: '40px',
          maxWidth: '600px',
          width: '100%',
          borderRadius: '20px',
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          color: '#fff',
        }}
      >
        {/* Usamos un condicional de React para alternar entre el Formulario y el Mapa de Asientos */}
        {!mostrarAsientos ? (
          /* ================= PESTAÑA 1: FORMULARIO DE REGISTRO ================= */
          <Box>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
              Reserva tu Viaje
            </Typography>
            <Typography variant="h5" component="h2" sx={{ color: '#38bdf8', textAlign: 'center', fontWeight: '600', mb: 1 }}>
              {nombreDestino}
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center', mb: 4, color: '#e2e8f0' }}>
              {descripcionDestino}
            </Typography>

            <Box component="form" onSubmit={handleSiguientePaso} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                label="Fecha de Viaje"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
                sx={{ input: { color: '#fff' }, label: { color: '#e2e8f0' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'rgba(255,255,255,0.4)' }, '&:hover fieldset': { borderColor: '#fff' } } }}
              />

              <TextField
                label="Número de Pasajeros"
                type="number"
                fullWidth
                inputProps={{ min: 1, max: 10 }}
                value={pasajeros}
                onChange={(e) => setPasajeros(e.target.value)}
                required
                sx={{ input: { color: '#fff' }, label: { color: '#e2e8f0' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'rgba(255,255,255,0.4)' }, '&:hover fieldset': { borderColor: '#fff' } } }}
              />

              <TextField
                select
                label="Tipo de Boleto"
                fullWidth
                value={tipoBoleto}
                onChange={(e) => setTipoBoleto(e.target.value)}
                sx={{ '& .MuiSelect-select': { color: '#fff' }, label: { color: '#e2e8f0' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'rgba(255,255,255,0.4)' }, '&:hover fieldset': { borderColor: '#fff' } } }}
              >
                <MenuItem value="Estandar">Estándar (Piso 2)</MenuItem>
                <MenuItem value="VIP">VIP Panoramic (Piso 1)</MenuItem>
                <MenuItem value="Premium">Premium Completo (Snacks Inc.)</MenuItem>
              </TextField>

              <Button type="submit" variant="contained" size="large" sx={{ mt: 1, backgroundColor: '#38bdf8', color: '#0f172a', fontWeight: 'bold', borderRadius: '10px', '&:hover': { backgroundColor: '#0284c7', color: '#fff' } }}>
                CONFIRMAR Y VER PRECIOS
              </Button>
            </Box>
          </Box>
        ) : (
          /* ================= PESTAÑA 2: SELECCIÓN DE ASIENTOS DINÁMICA ================= */
          <Box>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
              Elige tus Asientos
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', color: '#38bdf8', mb: 1, fontWeight: '500' }}>
              Pasajeros: {pasajeros} | Seleccionados: {asientosSeleccionados.length} de {pasajeros}
            </Typography>

            {/* Pequeña Leyenda Visual */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 3, fontSize: '12px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}><Box sx={{ width: 15, height: 15, bgcolor: 'rgba(255,255,255,0.2)', border: '1px solid #fff', borderRadius: 0.5 }} /> Libre</Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}><Box sx={{ width: 15, height: 15, bgcolor: '#38bdf8', borderRadius: 0.5 }} /> Tu Selección</Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}><Box sx={{ width: 15, height: 15, bgcolor: '#ef4444', borderRadius: 0.5 }} /> Ocupado</Box>
            </Box>

            {/* CROQUIS / MAPA DEL BUS (Grid de 4 columnas) */}
            <Box sx={{ background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '15px', mb: 4 }}>
              <Grid container spacing={1.5} justifyContent="center">
                {mapaAsientos.map((asiento) => {
                  const esOcupado = asiento.ocupado;
                  const esElegido = asientosSeleccionados.includes(asiento.id);

                  let colorFondo = 'rgba(255, 255, 255, 0.2)'; // Disponible (Blanco transparente)
                  if (esOcupado) colorFondo = '#ef4444'; // Ocupado (Rojo)
                  if (esElegido) colorFondo = '#38bdf8'; // Tu selección (Celeste Turibus)

                  return (
                    <Grid item xs={3} key={asiento.id} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Button
                        disabled={esOcupado}
                        onClick={() => seleccionarAsiento(asiento.id)}
                        sx={{
                          width: '50px',
                          height: '50px',
                          minWidth: '50px',
                          backgroundColor: colorFondo,
                          color: esElegido ? '#0f172a' : '#fff',
                          fontWeight: 'bold',
                          border: '1px solid rgba(255,255,255,0.3)',
                          borderRadius: '8px',
                          '&:hover': {
                            backgroundColor: esOcupado ? '#ef4444' : 'rgba(255,255,255,0.4)'
                          },
                          '&.Mui-disabled': {
                            color: 'rgba(255,255,255,0.4)',
                            backgroundColor: '#ef4444'
                          }
                        }}
                      >
                        {asiento.id}
                      </Button>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>

            {/* Botoneras de Control */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => { setMostrarAsientos(false); setAsientosSeleccionados([]); }}
                sx={{ color: '#fff', borderColor: '#fff', '&:hover': { borderColor: '#38bdf8', color: '#38bdf8' } }}
              >
                Volver
              </Button>
              <Button
                variant="contained"
                fullWidth
                onClick={finalizarCompra}
                sx={{ backgroundColor: '#38bdf8', color: '#0f172a', fontWeight: 'bold', '&:hover': { backgroundColor: '#0284c7', color: '#fff' } }}
              >
                PAGAR RESERVA
              </Button>
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default Reserva;