import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Box, 
  TextField, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  Divider,
  Grid
} from '@mui/material';

export default function CrudHoteles() {
  // 1. Estado para simular la Base de Datos en memoria
  const [hoteles, setHoteles] = useState([
    { id: 1, nombre: 'Hotel Cusco Imperial', ubicacion: 'Cusco', precio: 120, habitaciones: 15, descripcion: 'Excelente hotel cerca a la plaza de armas.' },
    { id: 2, nombre: 'Resort Lima Costa', ubicacion: 'Lima', precio: 200, habitaciones: 40, descripcion: 'Vista al mar y servicio premium.' },
  ]);

  // 2. Estados para el control del Modal (Ventana Emergente)
  const [openModal, setOpenModal] = useState(false);
  const [nuevoHotel, setNuevoHotel] = useState({
    nombre: '',
    ubicacion: '',
    precio: '',
    habitaciones: '',
    descripcion: ''
  });

  // Funciones de apertura y cierre del Modal
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => {
    setOpenModal(false);
    setNuevoHotel({ nombre: '', ubicacion: '', precio: '', habitaciones: '', descripcion: '' });
  };

  // 3. Manejador de cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoHotel({ ...nuevoHotel, [name]: value });
  };

  // 4. Operación del CRUD: Crear (Agregar a la tabla)
  const handleGuardar = (e) => {
    e.preventDefault();
    if (!nuevoHotel.nombre || !nuevoHotel.ubicacion || !nuevoHotel.precio) {
      alert("Por favor, completa los campos principales.");
      return;
    }

    const nuevoRegistro = {
      id: hoteles.length > 0 ? Math.max(...hoteles.map(h => h.id)) + 1 : 1,
      nombre: nuevoHotel.nombre,
      ubicacion: nuevoHotel.ubicacion,
      precio: Number(nuevoHotel.precio),
      habitaciones: Number(nuevoHotel.habitaciones) || 0,
      descripcion: nuevoHotel.descripcion
    };

    setHoteles([...hoteles, nuevoRegistro]);
    handleClose();
  };

  // 5. Operación del CRUD: Eliminar
  const handleEliminar = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este hotel?")) {
      const listaActualizada = hoteles.filter(hotel => hotel.id !== id);
      setHoteles(listaActualizada);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* Cabecera del Panel */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" color="primary">
          Panel de Administración: CRUD Hoteles
        </Typography>
        <Button variant="contained" color="primary" size="large" onClick={handleOpen}>
          + Registrar Hotel
        </Button>
      </Box>

      {/* Tabla de Visualización de Datos */}
      <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ backgroundColor: '#1976d2' }}>
            <TableRow>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Nombre</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Ubicación</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Precio p/Noche</TableCell>
              <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Habitaciones</TableCell>
              <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold' }}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hoteles.map((hotel) => (
              <TableRow key={hotel.id} hover>
                <TableCell>{hotel.id}</TableCell>
                <TableCell>
                  <Typography variant="body1" fontWeight="medium">{hotel.nombre}</Typography>
                  <Typography variant="caption" color="textSecondary">{hotel.descripcion}</Typography>
                </TableCell>
                <TableCell>{hotel.ubicacion}</TableCell>
                <TableCell>${hotel.precio}</TableCell>
                <TableCell>{hotel.habitaciones} disp.</TableCell>
                <TableCell align="center">
                  <Button size="small" color="primary" variant="outlined" sx={{ mr: 1 }}>
                    Editar
                  </Button>
                  <Button size="small" color="error" variant="outlined" onClick={() => handleEliminar(hotel.id)}>
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Ventana Emergente (Modal Formularios) */}
      <Dialog open={openModal} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle fontWeight="bold">Registrar Nuevo Establecimiento</DialogTitle>
        <Divider />
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mt: 1 }}>
            <TextField 
              label="Nombre del Hotel" 
              name="nombre" 
              value={nuevoHotel.nombre} 
              onChange={handleChange} 
              fullWidth 
              required 
            />
            <TextField 
              label="Ubicación / Ciudad" 
              name="ubicacion" 
              value={nuevoHotel.ubicacion} 
              onChange={handleChange} 
              fullWidth 
              required 
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField 
                  label="Precio por noche ($)" 
                  name="precio" 
                  type="number" 
                  value={nuevoHotel.precio} 
                  onChange={handleChange} 
                  fullWidth 
                  required 
                />
              </Grid>
              <Grid item xs={6}>
                <TextField 
                  label="Total Habitaciones" 
                  name="habitaciones" 
                  type="number" 
                  value={nuevoHotel.habitaciones} 
                  onChange={handleChange} 
                  fullWidth 
                />
              </Grid>
            </Grid>
            <TextField 
              label="Descripción del Hotel" 
              name="descripcion" 
              value={nuevoHotel.descripcion} 
              onChange={handleChange} 
              multiline 
              rows={3} 
              fullWidth 
            />
          </Box>
        </DialogContent>
        <Divider />
        <DialogActions sx={{ p: 2.5 }}>
          <Button onClick={handleClose} color="inherit">Cancelar</Button>
          <Button onClick={handleGuardar} variant="contained" color="success">
            Guardar Hotel
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}