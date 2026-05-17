import { createContext, useState } from 'react';

// Lo exportamos porque otros componentes (los que "escuchan") necesitarán 
// importar este objeto específico para usarlo con useContext.
export const IdiomaContext = createContext();

/*
Esta es una función componente. Recibe una prop especial llamada children
children representa a todos los componentes que pongas dentro de <IdiomaProvider> 
en tu archivo App.jsx. Es lo que permite que el contexto "envuelva" a la aplicación.
*/
export const IdiomaProvider = ( { children } ) => {
    const [lang, setLang] = useState("Español");

    /*
    Esta función es un "interruptor". 
    La vamos a compartir para que cualquier botón en la app pueda cambiar el idioma global.
    */
    const cambiarIdioma = () => {
        setLang(lang === "Español" ? "English" : "Español");
    };

    /*
    Aquí usamos el componente especial .Provider.
    value: Esta es la parte más importante. 
    Todo lo que pongas dentro del objeto value ( idioma y la función de cambio) será lo que los componentes hijos podrán "leer".
    */
    return (
        <IdiomaContext.Provider value={ { lang, cambiarIdioma } }>
            {children}
        </IdiomaContext.Provider>
        /*
        {children} le dice a React: "Oye, renderiza aquí adentro cualquier cosa que te hayan pasado como hijo". 
        Sin esta línea, tu aplicación se vería en blanco porque el Provider "se comería" a los componentes internos.
        */
    );
};

export default IdiomaProvider;