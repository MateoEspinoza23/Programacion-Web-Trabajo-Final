import React from 'react';
import './EstilosAsistencia.css';
import { TextField, MenuItem, Button } from '@mui/material';

const Asistencia = () => {

    return(
    <>

    {/* BARRA NAVEGACION DE LA PAGINA */}
    <header className="Barra_Turibus">

      <div className="Logo_Turibus">
        <img src="/logobus.jpg" alt="Logo"/>
      </div>

      <nav className="Navegar_Turibus">
        {/* "OPCION 1" Y "OPCION 2" SON PLACEHOLDERS. CAMBIAR NOMBRES Y AGREGAR OPCIONES */}
        <a href="/">MI CUENTA</a> 
        <a href="/Asistencia">ASISTENCIA</a>
      </nav>

    </header>
    {/* BARRA NAVEGACION DE LA PAGINA */}

    <section className="Banner_Asistencia">

        <div className='Icono_Asistencia'>
            <img src="/pregunta.png" alt="Pregunta" />
        </div>

        <h1>SOPORTE TECNICO</h1>

        <p>ESTAMOS AQUI PARA AYUDARTE</p>
        <p>ENVIA TU CASO Y TE AYUDAREMOS LO ANTES POSIBLE</p>

    </section>

    <section className="Formulario_Asistencia">

        <div className='Contenedor_Formulario'>

            <h2>REPORTAR UN PROBLEMA</h2>

            <p>COMPLETAR Y ENVIAR EL SIGUIENTE FORMULARIO</p>

            {/* EL USUARIO INGRESA EL TITULO */}
            <TextField label='TITULO DEL PROBLEMA' fullWidth/>

            {/* EL USUARIO SELECCIONA EL TIPO DE PROBLEMA */}
            <TextField select label='SELECCIONA CATEGORIA' fullWidth>

                <MenuItem value="op1">OPCION 1</MenuItem>
                <MenuItem value="op2">OPCION 2</MenuItem>
                <MenuItem value="op3">OPCION 3</MenuItem>

            </TextField>

            {/* EL USUARIO INGRESA UNA DESCRIPCION */}
            <TextField label='DESCRIPCION DETALLADA' multiline fullWidth rows={6}/>

            {/* EL BOTON PARA ENVIAR TODO */}
            <Button variant="contained" className='Boton_Formulario'>
                ENVIAR FORMULARIO
            </Button>

        </div>

    </section>

    </>
    );
}

export default Asistencia;