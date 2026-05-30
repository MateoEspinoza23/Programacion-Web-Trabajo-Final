import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, Typography, TextField, Button, Alert, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import usuarios from '../data/usuarios.json';

const RegistrarUsuario = () => {
    // 1. CORRECCIÓN DE HOOKS: Se cambió el término incorrecto 'useStage' por 'useState'
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [contraseña2, setContraseña2] = useState('');
    const [mostrarContraseña, setMostrarContraseña] = useState(false);
    const [errorNombre, setErrorNombre] = useState('');
    const [errorCorreo, setErrorCorreo] = useState('');
    const [errorContraseña, setErrorContraseña] = useState('');
    const [errorContraseña2, setErrorContraseña2] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleNombre = (e) => {
        setNombre(e.target.value);
        setErrorNombre('');
    };

    const handleCorreo = (e) => {
        setCorreo(e.target.value);
        setErrorCorreo('');
        setError('');
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Card sx={{ maxWidth: 400, p: 2 }}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}>
                        Registro de Usuario
                    </Typography>
                    
                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField 
                            label="Nombre Completo" 
                            value={nombre} 
                            onChange={handleNombre} 
                            fullWidth 
                        />
                        <TextField 
                            label="Correo Electrónico" 
                            value={correo} 
                            onChange={handleCorreo} 
                            fullWidth 
                        />
                        <TextField 
                            label="Contraseña" 
                            type={mostrarContraseña ? 'text' : 'password'} 
                            value={contraseña} 
                            onChange={(e) => setContraseña(e.target.value)} 
                            fullWidth 
                        />
                        <TextField 
                            label="Confirmar Contraseña" 
                            type={mostrarContraseña ? 'text' : 'password'} 
                            value={contraseña2} 
                            onChange={(e) => setContraseña2(e.target.value)} 
                            fullWidth 
                        />
                        
                        <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
                            Registrar Cuenta
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default RegistrarUsuario;