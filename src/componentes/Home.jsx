import React, { useState } from 'react';
import { TextField, Autocomplete, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import lugares from '../data/home.json';
import './EstilosHome.css';

const Home = () => {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();
  
  const destinos = lugares.map((lugar) => lugar.nombre);

  
  
  const lugaresFiltrados = lugares.filter((lugar) =>
    lugar.nombre.toLowerCase().includes(busqueda.toLowerCase())
  
  


);

  return (
    <>
        {}
        <section className="Banner_Turibus" style={{ width: '100%' }}>
          <h1 className="TituloWeb">
            Descubre Lugares Increíbles
          </h1>

          <p>
            ¡El Perú te está esperando!
          </p>

          <div className="Buscador_Turibus">
            <Autocomplete
              options={destinos} 
              fullWidth

              onInputChange={(___, nuevoValor) => {
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

        {/* PARTE DE LAS OPCIONES */}
        <section className="Opciones_Turibus" style={{ padding: '20px' }}>
          {lugaresFiltrados.map((lugar, index) => (
            <div className="Lugar_Turibus" key={index}>
              <img src={lugar.img} alt={lugar.nombre} />

              <div className="Descripcion_Turibus">
                <h2>{lugar.nombre}</h2> 
                <p>{lugar.descripcion}</p>
                <p>
                  <strong>Rutas Populares: </strong>{lugar.rutas}
                </p>
                <button onClick={() => navigate(`/Reserva/${lugar.nombre}`, { state: { destinoCompleto: lugar } })}>
                          VER PASAJES
                </button>
              </div>
            </div>

            

          ))}
        </section>
          

            


      </>

      
  );
};

export default Home;