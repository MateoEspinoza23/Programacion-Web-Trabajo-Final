import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Alert,
    Checkbox,
    FormControlLabel,
    IconButton,
    InputAdornment
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './LoginUsuario.css';

import { AuthContext } from '../context/Auth';
import { loginUsuario } from '../services/usuarioService';

const LoginUsuario = () => {

    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [errorCorreo, setErrorCorreo] = useState('');
    const [errorContraseña, setErrorContraseña] = useState('');
    const [error, setError] = useState('');
    const [recordar, setRecordar] = useState(false);
    const [mostrarContraseña, setMostrarContraseña] = useState(false);
    const [cargando, setCargando] = useState(false);

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

        setError('');
        setErrorCorreo('');
        setErrorContraseña('');

        if (!correo.trim()) {
            setErrorCorreo('El correo es obligatorio');
            valido = false;
        } else if (!correo.includes('@') || !correo.includes('.')) {
            setErrorCorreo('Correo no válido');
            valido = false;
        }

        if (!contraseña.trim()) {
            setErrorContraseña('La contraseña es obligatoria');
            valido = false;
        }

        if (!valido) return;

        if (recordar) {
            localStorage.setItem('correo-recordado', correo);
        } else {
            localStorage.removeItem('correo-recordado');
        }

        try {

            setCargando(true);

            const usuario = await loginUsuario(
                correo.trim(),
                contraseña.trim()
            );

            const datosUsuario = {
                ...usuario,
                rol:
                    usuario.correo === 'admin@turismo.com'
                        ? 'admin'
                        : 'cliente'
            };

            login(datosUsuario);

            if (datosUsuario.rol === 'admin') {
                navigate('/admin/hoteles');
            } else {
                navigate('/');
            }

        } catch (err) {

            console.error(err);

            setError(
                err?.response?.data?.message ||
                'Usuario o contraseña incorrectos.'
            );

        } finally {

            setCargando(false);

        }

    };

    return (
        <Box className="login-page">
            <Card className="login-card">
                <CardContent>

                    <Typography
                        variant="h5"
                        className="login-titulo"
                    >
                        Iniciar sesión
                    </Typography>

                    {error && (
                        <Alert
                            severity="error"
                            className="login-alerta"
                        >
                            {error}
                        </Alert>
                    )}

                    <TextField
                        fullWidth
                        label="Correo"
                        type="email"
                        variant="outlined"
                        size="small"
                        className="login-input"
                        value={correo}
                        onChange={handleCorreo}
                        error={!!errorCorreo}
                        helperText={errorCorreo}
                    />

                    <TextField
                        fullWidth
                        label="Contraseña"
                        variant="outlined"
                        size="small"
                        className="login-input"
                        type={
                            mostrarContraseña
                                ? 'text'
                                : 'password'
                        }
                        value={contraseña}
                        onChange={handleContraseña}
                        error={!!errorContraseña}
                        helperText={errorContraseña}
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() =>
                                                setMostrarContraseña(
                                                    !mostrarContraseña
                                                )
                                            }
                                            edge="end"
                                        >
                                            {mostrarContraseña ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }
                        }}
                    />

                    <FormControlLabel
                        className="login-recordar"
                        control={
                            <Checkbox
                                checked={recordar}
                                onChange={(e) =>
                                    setRecordar(
                                        e.target.checked
                                    )
                                }
                                size="small"
                            />
                        }
                        label={
                            <Typography variant="body2">
                                Recordar usuario
                            </Typography>
                        }
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        className="login-boton"
                        onClick={handleSubmit}
                        disabled={cargando}
                    >
                        {cargando
                            ? 'Iniciando sesión...'
                            : 'Entrar'}
                    </Button>

                    <Typography
                        variant="body2"
                        className="login-switch"
                    >
                        ¿No tienes cuenta?{' '}
                        <span
                            onClick={() =>
                                navigate('/RegistrarUsuario')
                            }
                            style={{
                                cursor: 'pointer'
                            }}
                        >
                            Regístrate
                        </span>
                    </Typography>

                </CardContent>
            </Card>
        </Box>
    );

};

export default LoginUsuario;