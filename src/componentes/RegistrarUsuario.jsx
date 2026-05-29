import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardContent, Typography, TextField, Button, Alert, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import usuarios from '../data/usuarios.json';


const RegistrarUsuario = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useStage('');
    const [contraseña, setContraseña] = useState('');
    const [contraseña2, setContraseña2 ] = useState('');
    const [mostrarContraseña, setMostrarContraseña] = useState(false);
    const [errorNombre, setErrorNombre] = useStage('');
    const [errorCorreo, setErrorCorreo] = useStage('');
    const [errorContraseña, setErrorContraseña] = useStage('');
    const [errorContraseña2, setErrorContraseña2] = useStage('');
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

}


