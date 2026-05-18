import React from 'react';
import { TextField, Autocomplete } from '@mui/material';
import './EstilosHome.css'

const Home = () => {

  //ESTOS ARREGLOS DE JS SOLO SON LLAMADOS EN FUNCION HOME. CUIDADO AL TOCAR "destinos".

  //PLACEHOLDER DE DESTINOS, LUEGO CAMBIAR A NOMBRES REALES
  const destinos = [
    "CIUDAD1",
    "CIUDAD2",
    "CIUDAD3"
  ]

  //PLACEHOLDER DE LUGARES
  const lugares =[
    {
      nombre: "Machu Picchu",
      descripcion: "Maravilla del Mundo",
      rutas: "Lima, Cusco, Arequipa",
      img: "/picchu.jpg"
    },
    {
      nombre: "Lineas de Nazca",
      descripcion: "Civilizaciones Antiguas",
      rutas: "Lima, Ica",
      img: "/nazca.jpg"
    }
  ]

  return (
    <>

    {/* BARRA NAVEGACION DE LA PAGINA */}
    <header className="Barra_Turibus">

      <div className="Logo_Turibus">
        <img src="/logobus.jpg" alt="Logo"/>
      </div>

      <nav className="Navegar_Turibus">
        {/* "OPCION 1" Y "OPCION 2" SON PLACEHOLDERS. CAMBIAR NOMBRES Y AGREGAR OPCIONES */}
        <a href="/">OPCION 1</a> 
        <a href="/">OPCION 2</a>
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

          //AQUI SE INVOCA EL PLACEHOLDER DE LOS DESTINOS.
          options = {destinos} 
          fullWidth

          renderInput={(params) => (
            //AQUI VOLVEMOS A USAR TEXTFIELD, PERO COMBINADO CON EL "Autocomplete".
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

      {lugares.map( (lugar, index) => (

        <div className="Lugar_Turibus" key={index}>

          <img src={lugar.img} alt={lugar.nombre} />

        <div className="Descripcion_Turibus">

          <h2>{lugar.nombre}</h2> 

          <p>{lugar.descripcion}</p>

          <p>
            <strong>Rutas Populares: </strong>{lugar.rutas}
          </p>

          <button>VER PASAJES</button> 
          {/* ESTE BOTON DEBE DE SER UN COMPONENTE, EVALUAR ESO EN COMMIT 3. */}

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