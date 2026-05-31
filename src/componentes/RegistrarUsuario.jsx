import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, TextField, Button, Alert, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import usuarios from '../data/usuarios.json';
import './RegistrarUsuario.css';

const RegistrarUsuario = () => {
    const [nombre, setNombre]                       = useState('');
    const [correo, setCorreo]                       = useState('');
    const [contraseña, setContraseña]               = useState('');
    const [contraseña2, setContraseña2]             = useState('');
    const [mostrarContraseña, setMostrarContraseña] = useState(false);
    const [errorNombre, setErrorNombre]             = useState('');
    const [errorCorreo, setErrorCorreo]             = useState('');
    const [errorContraseña, setErrorContraseña]     = useState('');
    const [errorContraseña2, setErrorContraseña2]   = useState('');
    const [error, setError]                         = useState('');
    const [success, setSuccess]                     = useState(false);
    const navigate = useNavigate();

    const handleNombre = (e) => { setNombre(e.target.value); setErrorNombre(''); };
    const handleCorreo = (e) => { setCorreo(e.target.value); setErrorCorreo(''); setError(''); };
    const handleContraseña = (e) => { setContraseña(e.target.value); setErrorContraseña(''); };
    const handleContraseña2 = (e) => { setContraseña2(e.target.value); setErrorContraseña2(''); };

    const handleSubmit = () => {
        let valido = true;
        if (!nombre.trim()) {
            setErrorNombre('El nombre es obligatorio'); valido = false; 
        }
        if (!correo.trim()) { 
            setErrorCorreo('El correo es obligatorio'); valido = false; 
        }else if (!correo.includes('@') || !correo.includes('.')) {
            setErrorCorreo('Correo no válido'); valido = false; 
        }
        if (!contraseña) {
            setErrorContraseña('La contraseña es obligatoria'); valido = false;
        }else if (contraseña.length < 6) {
            setErrorContraseña('Mínimo 6 caracteres'); valido = false; }
        if (!contraseña2) {
            setErrorContraseña2('Confirma tu contraseña'); valido = false; 
        }else if (contraseña !== contraseña2) { setErrorContraseña2('Las contraseñas no coinciden'); valido = false; }
        
        if (!valido) return;

        const existeEnJSON = usuarios.find(u => u.correo === correo);
        const existeEnLocal = localStorage.getItem('user_email') === correo;
        if (existeEnJSON || existeEnLocal) {
            setError('Ese correo ya está registrado.'); 
            return; 
        }

        localStorage.setItem('user_name', nombre.trim());
        localStorage.setItem('user_email', correo.trim());
        localStorage.setItem('user_password', contraseña);
        setSuccess(true);
        setTimeout(() => navigate('/LoginUsuario'), 1500);
    };

    return (
        <div className="registro-page">
            <Card className="registro-card">
                <CardContent>
                <Typography variant="h5" className="registro-titulo">
                    Crear cuenta
                </Typography>

                {error   && <Alert severity="error"   className="registro-alerta">{error}</Alert>}
                {success && <Alert severity="success" className="registro-alerta">¡Cuenta creada! Redirigiendo...</Alert>}

                <TextField fullWidth label="Nombre" type="text" variant="outlined" size="small"
                    className="registro-input" value={nombre} onChange={handleNombre}
                    error={!!errorNombre} helperText={errorNombre} />

                <TextField fullWidth label="Correo" type="email" variant="outlined" size="small"
                    className="registro-input" value={correo} onChange={handleCorreo}
                    error={!!errorCorreo} helperText={errorCorreo} />

                <TextField fullWidth label="Contraseña" variant="outlined" size="small"
                    className="registro-input"
                    type={mostrarContraseña ? 'text' : 'password'}
                    value={contraseña} onChange={handleContraseña}
                    error={!!errorContraseña} helperText={errorContraseña}
                    slotProps={{ input: { endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={() => setMostrarContraseña(!mostrarContraseña)} edge="end">
                        {mostrarContraseña ? <Visibility /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    )}}} />

                <TextField fullWidth label="Confirmar contraseña" variant="outlined" size="small"
                    className="registro-input" type="password"
                    value={contraseña2} onChange={handleContraseña2}
                    error={!!errorContraseña2} helperText={errorContraseña2} />

                <Button fullWidth variant="contained" className="registro-boton" onClick={handleSubmit}>
                    Registrarse
                </Button>

                <Typography variant="body2" className="registro-switch">
                    ¿Ya tienes cuenta?{' '}
                    <span onClick={() => navigate('/LoginUsuario')}>Inicia sesión</span>
                </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default RegistrarUsuario;