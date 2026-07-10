import React, { useState } from 'react';
import './EstilosAsistencia.css';

import {
  TextField,
  MenuItem,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';

const Asistencia = () => {

    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [abrirResumen, setAbrirResumen] = useState(false);

    return (
           <>
                <section className="Banner_Asistencia" style={{ width: '100%' }}>
                    <div className='Icono_Asistencia'>
                        <img src="/pregunta.png" alt="Pregunta" />
                    </div>

                    <h1>SOPORTE TECNICO</h1>

                    <p>Estamos aqui para ayudarte</p>
                    <p>Envia tu caso para ayudarte lo antes posible</p>
                </section>

                <section className="Formulario_Asistencia" style={{ padding: '20px' }}>
                    <div className='Contenedor_Formulario'>
                        <h2>REPORTAR UN PROBLEMA</h2>

                        <p>Completa y envia el siguiente formulario</p>

                        {}
                        <TextField 
                        label='Titulo' 
                        fullWidth 
                        value = {titulo}
                        onChange={(e) => setTitulo(e.target.value)}/>

                        <TextField
                        select
                        label="Categoria"
                        fullWidth
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        >
                        <MenuItem value="Problema con pasaje">PROBLEMA CON PASAJE</MenuItem>
                        <MenuItem value="Problema con cuenta">PROBLEMA CON CUENTA</MenuItem>
                        <MenuItem value="Otro problema">OTRO PROBLEMA</MenuItem>
                        </TextField>

                        {}
                        <TextField 
                        label='Descripcion' 
                        multiline 
                        fullWidth 
                        rows={6}
                        value = {descripcion}
                        onChange={(e) => setDescripcion(e.target.value)} />

                        {}
                        <Button 
                        variant="contained" 
                        className='Boton_Formulario'
                        onClick={() => setAbrirResumen(true)}>
                            ENVIAR FORMULARIO
                        </Button>
                    </div>
                </section>

            <Dialog
                    open={abrirResumen}
                    onClose={() => setAbrirResumen(false)}
                    fullWidth
                    maxWidth="sm"
                >

                <DialogTitle>Formulario enviado</DialogTitle>

                <DialogContent>
                    <p><strong>Título:</strong> {titulo}</p>
                    <p><strong>Categoría:</strong> {categoria}</p>
                    <p><strong>Descripción:</strong> {descripcion}</p>
                </DialogContent>

                <DialogActions>
                    <Button onClick={() => setAbrirResumen(false)}>
                        CERRAR
                    </Button>
                </DialogActions>

            </Dialog>
            </>
    );
}

export default Asistencia;