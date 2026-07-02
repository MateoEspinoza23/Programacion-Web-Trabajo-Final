import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Typography, TextField, InputAdornment,Select, MenuItem, FormControl, InputLabel,
Card, CardMedia, CardContent,Button, Chip, Grid} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import eventos from '../data/Eventos.json';
import './Eventos.css';

const Eventos = () => {
    const [busqueda, setBusqueda]       = useState('');
    const [categoria, setCategoria]     = useState('Todas');
    const navigate = useNavigate();

    const categorias = ['Todas', 'Entretenimiento', 'Cultura'];

    const eventosFiltrados = eventos.filter((ev) => {
        const coincideBusqueda = ev.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
                                ev.lugar.toLowerCase().includes(busqueda.toLowerCase());
        const coincideCategoria = categoria === 'Todas' || ev.categoria === categoria;
        return coincideBusqueda && coincideCategoria;
    });

    const colorCategoria = {
        Entretenimiento: 'error',
        Cultura:         'success',
    };

    return (
        <Box className="eventos-page">
    
        {/* ENCABEZADO */}
        <Box className="eventos-header">
            <Typography variant="body2" className="eventos-breadcrumb">
            Home / <strong>Eventos</strong>
            </Typography>
        </Box>
    
        {/* CONTENIDO */}
        <Box className="eventos-contenido">
    
            {/* FILTROS */}
            <Box className="eventos-filtros">
            <FormControl fullWidth size="small" className="eventos-filtro-item">
                <InputLabel>Categoría</InputLabel>
                <Select
                value={categoria}
                label="Categoría"
                onChange={e => setCategoria(e.target.value)}
                >
                {categorias.map(c => (
                    <MenuItem key={c} value={c}>{c}</MenuItem>
                ))}
                </Select>
            </FormControl>
    
            <Button
                fullWidth variant="outlined" color="error"
                className="eventos-filtro-item"
                onClick={() => { setBusqueda(''); setCategoria('Todas'); }}
            >
                Limpiar filtro
            </Button>
            </Box>
    
            {/* LISTA DE EVENTOS */}
            <Box className="eventos-lista">
    
            {/* BUSCADOR */}
            <TextField
                fullWidth size="small" placeholder="Ej: Festival del Inti Raymi"
                className="eventos-buscador"
                value={busqueda}
                onChange={e => setBusqueda(e.target.value)}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                    </InputAdornment>
                )
                }}
            />
    
            {/* RESULTADOS */}
            <Typography variant="body2" className="eventos-resultados">
                Mostrando {eventosFiltrados.length} de {eventos.length} resultados
            </Typography>
    
            {/* CARDS */}
            <Grid container spacing={2}>
                {eventosFiltrados.map(ev => (
                <Grid item xs={12} key={ev.id}>
                    <Card className="evento-card">
                    <Box className="evento-card-img-wrap">
                        <CardMedia
                        component="img"
                        image={ev.img}
                        alt={ev.titulo}
                        className="evento-card-img"
                        />
                        {ev.dia && (
                        <Box className="evento-fecha-badge">
                            <Typography variant="h6">{ev.dia}</Typography>
                            <Typography variant="caption">{ev.mes}</Typography>
                        </Box>
                        )}
                        <Chip
                        label={ev.categoria}
                        color={colorCategoria[ev.categoria]}
                        size="small"
                        className="evento-chip"
                        />
                    </Box>
    
                    <CardContent className="evento-card-content">
                        <Typography variant="h6" className="evento-titulo">
                        {ev.titulo}
                        </Typography>
                        <Box className="evento-info">
                        <CalendarMonthIcon fontSize="small" color="error" />
                        <Typography variant="body2">{ev.fecha}</Typography>
                        </Box>
                        <Box className="evento-info">
                        <LocationOnIcon fontSize="small" color="error" />
                        <Typography variant="body2">{ev.lugar}</Typography>
                        </Box>
                        <Typography variant="body2" className="evento-desc">
                        {ev.descripcion}
                        </Typography>
                    </CardContent>
                </Card>
                </Grid>
            ))}
            </Grid>

            {eventosFiltrados.length === 0 && (
                <Typography variant="body1" className="eventos-vacio">
                    No se encontraron eventos con ese filtro.
                </Typography>
            )}
            </Box>
        </Box>
    </Box>
    );
}; 
export default Eventos;