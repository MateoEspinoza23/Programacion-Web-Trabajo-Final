import React, { createContext, useState, useEffect } from 'react';

// AuthContext.Provider -> Insertar datos en la variable
// AuthContext.Consumer -> Consulta datos de la variable
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  // Al cargar la app por primera vez, recuperamos la sesión por si recargan la página
  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('usuarioTuriBus');
    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }, []);

  // Función flecha para meter los datos del usuario en la nube y en el localStorage
  const login = (datosUsuario) => {
    setUsuario(datosUsuario);
    localStorage.setItem('usuarioTuriBus', JSON.stringify(datosUsuario));
  };

  // Función flecha para limpiar el contexto al cerrar sesión
  const logout = () => {
    setUsuario(null);
    localStorage.removeItem('usuarioTuriBus');
  };

  const actualizarUsuario = (datosActualizados) => {
    setUsuario(datosActualizados);
    localStorage.setItem('usuarioTuriBus', JSON.stringify(datosActualizados));
    console.log("Contexto actualizado con:", datosActualizados);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout, actualizarUsuario }}>
      {children}
    </AuthContext.Provider>
  );
};