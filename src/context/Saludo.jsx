import { useContext } from 'react';
import { IdiomaContext } from './IdiomaContext';

function Saludo() {
  const { lang, cambiarIdioma } = useContext(IdiomaContext);

  return (
    <div>
      <p>Idioma seleccionado: <b>{lang}</b></p>
      <button onClick={cambiarIdioma}>
        {lang === "Español" ? "Switch to English" : "Cambiar a Español"}
      </button>
      
      <hr />
      <h2>{lang === "Español" ? "¡Hola Mundo!" : "Hello World!"}</h2>
    </div>
  );
}

export default Saludo;