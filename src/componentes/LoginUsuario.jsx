import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Card, CardContent, Typography, TextField, Button, Alert, Checkbox, FormControlLabel, IconButton, InputAdornment} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './LoginUsuario.css';
import { useContext } from 'react';
import { AuthContext } from '../context/Auth';

const LoginUsuario = () => {
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [errorCorreo, setErrorCorreo] = useState('');
    const [errorContraseña, setErrorContraseña] = useState('');
    const [error, setError] = useState('');
    const [recordar, setRecordar] = useState(false);
    const [mostrarContraseña, setMostrarContraseña] = useState(false);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

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

    const handleSubmit = async () => {
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

        try {

            const response = await fetch("http://localhost:3000/api/v1/usuarios");
            const resultado = await response.json();

            const usuario = resultado.data.find(
                (u) => u.correo === correo && u.contraseña === contraseña
            );

            if (!usuario) {
                setError("Usuario o contraseña incorrectos.");
                return;
            }

            const datosUsuario = {
                id: usuario.id,
                nombre: usuario.nombre,
                correo: usuario.correo,
                rol: usuario.correo === "admin@turibus.com" ? "admin" : "cliente"
            };

            login(datosUsuario);

            if (datosUsuario.rol === "admin") {
                navigate("/admin/dashboard");
            } else {
                navigate("/");
            }

        } catch (error) {
            console.error(error);
            setError("Error al conectar con el servidor.");
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