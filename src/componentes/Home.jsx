import React, { useState, useEffect, useContext } from "react";
import { TextField, Autocomplete } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./EstilosHome.css";
import { AuthContext } from "../context/Auth";
import { getLugares } from "../services/lugaresService";

const Home = () => {

  const { usuario } = useContext(AuthContext);

  const navigate = useNavigate();

  const [lugares, setLugares] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  // ==========================
  // CARGAR LUGARES DESDE API
  // ==========================

  useEffect(() => {

    const cargarLugares = async () => {

      try {

        const data = await getLugares();

        setLugares(data);

      } catch (error) {

        console.error("Error obteniendo lugares:", error);

      }

    };

    cargarLugares();

  }, []);

  // ==========================
  // BUSCADOR
  // ==========================

  const destinos = lugares.map((lugar) => lugar.nombre);

  const lugaresFiltrados = lugares.filter((lugar) =>
    lugar.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>

      <section className="Banner_Turibus" style={{ width: "100%" }}>

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

            onInputChange={(_, nuevoValor) => {
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

      <section
        className="Opciones_Turibus"
        style={{ padding: "20px" }}
      >

        {lugaresFiltrados.map((lugar) => (

          <div
            className="Lugar_Turibus"
            key={lugar.id}
          >

            <img
              src={lugar.img}
              alt={lugar.nombre}
            />

            <div className="Descripcion_Turibus">

              <h2>{lugar.nombre}</h2>

              <p>{lugar.descripcion}</p>

              <p>

                <strong>Rutas Populares:</strong> {lugar.rutas}

              </p>

              <button

                onClick={() =>
                  navigate(`/Reserva/${lugar.nombre}`, {
                    state: {
                      destinoCompleto: lugar,
                    },
                  })
                }

              >

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