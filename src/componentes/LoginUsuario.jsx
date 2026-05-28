import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Card, CardContent, Typography, TextField, Button, Alert, Checkbox, FormControlLabel, IconButton, InputAdornment} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import usuarios from '../data/usuarios.json';
import './LoginUsuario.css';

const LoginUsuario = () => {
    const [correo, setCorreo]                       = useState('');
    const [contraseña, setContraseña]               = useState('');
    const [errorCorreo, setErrorCorreo]             = useState('');
    const [errorContraseña, setErrorContraseña]     = useState('');
    const [error, setError]                         = useState('');
    const [recordar, setRecordar]                   = useState(false);
    const [mostrarContraseña, setMostrarContraseña] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const correoRecordado = localStorage.getItem('correo-recordado');
        if (correoRecordado) {
            setCorreo(correoRecordado);
            setRecordar(true);
        }
    }, []);

    const handleCorreo = (e) => {
    setCorreo(e.target.value);
    setErrorCorreo('');
    setError('');
    };

    const handleContraseña = (e) => {
        setContraseña(e.target.value);
        setErrorContraseña('');
        setError('');
    };

    const handleSubmit = () => {
        let valido = true;

        if (!correo.trim()) {
            setErrorCorreo('El correo es obligatorio');
            valido = false;
        } else if (!correo.includes('@') || !correo.includes('.')) {
            setErrorCorreo('Correo no válido');
            valido = false;
        }

        if (!contraseña) {
            setErrorContraseña('La contraseña es obligatoria');
            valido = false;
        }

        if (!valido) return;

        if (recordar) localStorage.setItem('correo-recordado', correo);
        else          localStorage.removeItem('correo-recordado');

        // Buscar en el JSON y también en localStorage (usuarios registrados)
        const usuarioJSON = usuarios.find(
        (u) => u.correo === correo && u.contraseña === contraseña
        );

        const correoLocal    = localStorage.getItem('user_email');
        const contraseñaLocal = localStorage.getItem('user_password');
        const usuarioLocal   = correo === correoLocal && contraseña === contraseñaLocal;

        if (usuarioJSON || usuarioLocal) {
            navigate('/');
        } else {
            setError('Usuario o contraseña incorrectos.');
        }
    };

    return (
        <Box className="login-page">
        <Card className="login-card">
            <CardContent>
            <Typography variant="h5" className="login-titulo">
                Iniciar sesión
            </Typography>

            {error && <Alert severity="error" className="login-alerta">{error}</Alert>}

            <TextField
                fullWidth label="Correo" type="email" variant="outlined" size="small"
                className="login-input"
                value={correo}
                onChange={handleCorreo}
                error={!!errorCorreo}
                helperText={errorCorreo}
            />

            <TextField
                fullWidth label="Contraseña" variant="outlined" size="small"
                className="login-input"
                type={mostrarContraseña ? 'text' : 'password'}
                value={contraseña}
                onChange={handleContraseña}
                error={!!errorContraseña}
                helperText={errorContraseña}
                slotProps={{
                input: {
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={() => setMostrarContraseña(!mostrarContraseña)} edge="end">
                        {mostrarContraseña ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    )
                }
                }}
            />

            <FormControlLabel
                className="login-recordar"
                control={<Checkbox checked={recordar} onChange={e => setRecordar(e.target.checked)} size="small" />}
                label={<Typography variant="body2">Recordar usuario</Typography>}
            />

            <Button fullWidth variant="contained" className="login-boton" onClick={handleSubmit}>
                Entrar
            </Button>

            <Typography variant="body2" className="login-switch">
                ¿No tienes cuenta?{' '}
                <span onClick={() => navigate('/RegistrarUsuario')}>Regístrate</span>
            </Typography>
            </CardContent>
        </Card>
        </Box>
    );
};

export default LoginUsuario;