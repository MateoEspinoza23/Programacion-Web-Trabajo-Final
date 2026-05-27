import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';

//ARCHIVO JSON CON LOS LUGARES TURISTICOS
import lugares from '../data/home.json'

import './EstilosHome.css'

const Home = () => {

  // BUSCADOR, SE INICIALIZA EN BLANCO.
  const[busqueda, setBusqueda] = useState("");

  //DESTINOS PARA AUTOCOMPLETE.
  const destinos = lugares.map( (lugar) => lugar.nombre);

  //MODELO DE FILTRACION DEL BUSCADOR.
  const lugaresFiltrados = lugares.filter((lugar) =>
    lugar.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>

    {/* BARRA NAVEGACION DE LA PAGINA */}
    <header className="Barra_Turibus">

      <div className="Logo_Turibus">
        <img src="/logobus.jpg" alt="Logo"/>
      </div>

      <nav className="Navegar_Turibus">
        {/* "OPCION 1" Y "OPCION 2" SON PLACEHOLDERS. CAMBIAR NOMBRES Y AGREGAR OPCIONES */}
        <a href="/">MI CUENTA</a> 
        <a href="/">ASISTENCIA</a>
      </nav>

    </header>
    {/* BARRA NAVEGACION DE LA PAGINA */}



    {/* PARTE DE BUSCADOR DE LA PAGINA */}
    <section className="Banner_Turibus">
      <h1 className="TituloWeb">
        DESCUBRE LUGARES INCREIBLES
      </h1>

      <p>
        EL PERU TE ESTA ESPERANDO
      </p>

      <div className="Buscador_Turibus">
        <Autocomplete

          options = {destinos} 
          fullWidth //ESTETICO, PARA QUE EL BUSCADOR OCUPE TODO EL ANCHO POSIBLE.

          onInputChange = {(___, nuevoValor) => {
            setBusqueda(nuevoValor);
          }}

          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="INGRESA TU PROXIMO DESTINO"
              variant="standard"
            />
          )}
        />
      </div>
    </section>
    {/* PARTE BUSCADOR DE LA PAGINA */}



    {/* PARTE DE LAS OPCIONES */}
    
    <section className="Opciones_Turibus">

      {lugaresFiltrados.map( (lugar, index) => (

        // AQUI SE CREAN LAS CARDS (CONTENEDOR) CON EL "index" PARA IDENTIFICAR CADA UNA
        <div className="Lugar_Turibus" key={index}>

          <img src={lugar.img} alt={lugar.nombre} />

        <div className="Descripcion_Turibus">

          <h2>{lugar.nombre}</h2> 

          <p>{lugar.descripcion}</p>

          <p>
            <strong>Rutas Populares: </strong>{lugar.rutas}
          </p>

          <button>VER PASAJES</button> 

        </div>

        </div>
      ))
      }

    </section>
    {/* PARTE DE LAS OPCIONES */}

    </>
  );
};

export default Home;