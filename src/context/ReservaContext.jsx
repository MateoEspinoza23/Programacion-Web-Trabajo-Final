import React, { createContext, useState, useEffect } from 'react';
import reservasIniciales from '../data/reservas.json';

export const ReservaContext = createContext();

export const ReservaProvider = ({ children }) => {
  const [reservas, setReservas] = useState([]);

  // 1. Cargar datos al iniciar
  useEffect(() => {
    const guardadas = localStorage.getItem('mis_reservas_turibus');
    if (guardadas) {
      setReservas(JSON.parse(guardadas));
    } else {
      // Si no hay nada en LocalStorage, usamos el JSON
      setReservas(reservasIniciales);
    }
  }, []);

  // 2. Función para añadir una nueva reserva
  const añadirReserva = (nuevaReserva) => {
    // Creamos la nueva lista
    const listaActualizada = [...reservas, nuevaReserva];
    
    // Actualizamos el estado global (esto hace que el historial se entere)
    setReservas(listaActualizada);
    
    // Guardamos en LocalStorage para que no se borre al F5
    localStorage.setItem('mis_reservas_turibus', JSON.stringify(listaActualizada));
  };

  return (
    // IMPORTANTE: Aquí pasamos 'reservas' y 'añadirReserva'
    <ReservaContext.Provider value={{ reservas, añadirReserva }}>
      {children}
    </ReservaContext.Provider>
  );
};