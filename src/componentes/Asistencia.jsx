import React from 'react';
import './EstilosAsistencia.css';
import { TextField, MenuItem, Button, Box } from '@mui/material';

const Asistencia = () => {
    return (
           <>
                <section className="Banner_Asistencia" style={{ width: '100%' }}>
                    <div className='Icono_Asistencia'>
                        <img src="/pregunta.png" alt="Pregunta" />
                    </div>

                    <h1>SOPORTE TECNICO</h1>

                    <p>ESTAMOS AQUI PARA AYUDARTE</p>
                    <p>ENVIA TU CASO Y TE AYUDAREMOS LO ANTES POSIBLE</p>
                </section>

                <section className="Formulario_Asistencia" style={{ padding: '20px' }}>
                    <div className='Contenedor_Formulario'>
                        <h2>REPORTAR UN PROBLEMA</h2>

                        <p>COMPLETAR Y ENVIAR EL SIGUIENTE FORMULARIO</p>

                        {}
                        <TextField label='TITULO DEL PROBLEMA' fullWidth />

                        {/* EL USUARIO SELECCIONA EL TIPO DE PROBLEMA */}
                        <TextField select label='SELECCIONA CATEGORIA' fullWidth>
                            <MenuItem value="op1">OPCION 1</MenuItem>
                            <MenuItem value="op2">OPCION 2</MenuItem>
                            <MenuItem value="op3">OPCION 3</MenuItem>
                        </TextField>

                        {}
                        <TextField label='DESCRIPCION DETALLADA' multiline fullWidth rows={6} />

                        {}
                        <Button variant="contained" className='Boton_Formulario'>
                            ENVIAR FORMULARIO
                        </Button>
                    </div>
                </section>
            </>
    );
}

export default Asistencia;