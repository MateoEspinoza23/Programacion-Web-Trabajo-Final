import React, { useState, useEffect } from "react";

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
  Divider
} from "@mui/material";

import {
  getLugares,
  crearLugar,
  actualizarLugar,
  eliminarLugar
} from "../../services/lugaresService";

export default function CrudHoteles() {

  const [hoteles, setHoteles] = useState([]);

  const [openModal, setOpenModal] = useState(false);

  const [modoEdicion, setModoEdicion] = useState(false);

  const [hotelActual, setHotelActual] = useState({
    id: null,
    nombre: "",
    descripcion: "",
    rutas: "",
    img: ""
  });

  useEffect(() => {
    cargarLugares();
  }, []);

  const cargarLugares = async () => {
    try {
      const datos = await getLugares();
      setHoteles(datos);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpen = () => {

    setModoEdicion(false);

    setHotelActual({
      id: null,
      nombre: "",
      descripcion: "",
      rutas: "",
      img: ""
    });

    setOpenModal(true);
  };

  const handleClose = () => {

    setOpenModal(false);

    setHotelActual({
      id: null,
      nombre: "",
      descripcion: "",
      rutas: "",
      img: ""
    });

  };

  const handleChange = (e) => {

    const { name, value } = e.target;

    setHotelActual({

      ...hotelActual,

      [name]: value

    });

  };

  const handleGuardar = async (e) => {

    e.preventDefault();

    if (
      !hotelActual.nombre.trim() ||
      !hotelActual.descripcion.trim()
    ) {
      alert("Complete los campos obligatorios.");
      return;
    }

    try {

      if (modoEdicion) {

        await actualizarLugar(hotelActual.id, {
          nombre: hotelActual.nombre,
          descripcion: hotelActual.descripcion,
          rutas: hotelActual.rutas,
          img: hotelActual.img
        });

      } else {

        await crearLugar({
          nombre: hotelActual.nombre,
          descripcion: hotelActual.descripcion,
          rutas: hotelActual.rutas,
          img: hotelActual.img
        });

      }

      await cargarLugares();

      handleClose();

    } catch (error) {

      console.error(error);

      alert("Ocurrió un error al guardar.");

    }

  };

  const handleEditar = (hotel) => {

    setModoEdicion(true);

    setHotelActual({
      id: hotel.id,
      nombre: hotel.nombre,
      descripcion: hotel.descripcion,
      rutas: hotel.rutas,
      img: hotel.img
    });

    setOpenModal(true);

  };

  const handleEliminar = async (id) => {

    const confirmar = window.confirm(
      "¿Está seguro de eliminar este registro?"
    );

    if (!confirmar) return;

    try {

      await eliminarLugar(id);

      await cargarLugares();

    } catch (error) {

      console.error(error);

      alert("No se pudo eliminar.");

    }

  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          color="primary"
        >
          Panel de Administración: Lugares Turísticos
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleOpen}
        >
          + Registrar Lugar
        </Button>

      </Box>

      <TableContainer
        component={Paper}
        elevation={3}
      >

        <Table>

          <TableHead
            sx={{
              backgroundColor: "#1976d2"
            }}
          >

            <TableRow>

              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold"
                }}
              >
                ID
              </TableCell>

              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold"
                }}
              >
                Nombre
              </TableCell>

              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold"
                }}
              >
                Descripción
              </TableCell>

              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold"
                }}
              >
                Rutas
              </TableCell>

              <TableCell
                sx={{
                  color: "white",
                  fontWeight: "bold"
                }}
              >
                Imagen
              </TableCell>

              <TableCell
                align="center"
                sx={{
                  color: "white",
                  fontWeight: "bold"
                }}
              >
                Acciones
              </TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {hoteles.map((hotel) => (

              <TableRow
                key={hotel.id}
                hover
              >

                <TableCell>
                  {hotel.id}
                </TableCell>

                <TableCell>
                  {hotel.nombre}
                </TableCell>

                <TableCell>
                  {hotel.descripcion}
                </TableCell>

                <TableCell>
                  {hotel.rutas}
                </TableCell>

                <TableCell>

                  {hotel.img ? (

                    <img
                      src={hotel.img}
                      alt={hotel.nombre}
                      width="100"
                    />

                  ) : (

                    "Sin imagen"

                  )}

                </TableCell>

                <TableCell align="center">

                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ mr: 1 }}
                    onClick={() =>
                      handleEditar(hotel)
                    }
                  >
                    Editar
                  </Button>

                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() =>
                      handleEliminar(hotel.id)
                    }
                  >
                    Eliminar
                  </Button>

                </TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>

      </TableContainer>

      <Dialog
        open={openModal}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >

        <DialogTitle>

          {modoEdicion
            ? "Editar Lugar"
            : "Registrar Lugar"}

        </DialogTitle>

        <Divider />

        <DialogContent>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mt: 2
            }}
          >

            <TextField
              label="Nombre"
              name="nombre"
              value={hotelActual.nombre}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Descripción"
              name="descripcion"
              value={hotelActual.descripcion}
              onChange={handleChange}
              multiline
              rows={3}
              fullWidth
            />

            <TextField
              label="Rutas"
              name="rutas"
              value={hotelActual.rutas}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="URL Imagen"
              name="img"
              value={hotelActual.img}
              onChange={handleChange}
              fullWidth
            />

          </Box>

        </DialogContent>

        <Divider />

        <DialogActions>

          <Button
            onClick={handleClose}
          >
            Cancelar
          </Button>

          <Button
            variant="contained"
            color="success"
            onClick={handleGuardar}
          >
            {modoEdicion
              ? "Actualizar"
              : "Guardar"}
          </Button>

        </DialogActions>

      </Dialog>

    </Container>
  );

}
