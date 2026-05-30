import React from 'react';
import { Link } from 'react-router-dom';

const BarraDesarrollo = () => {
  return (
    <div style={{ padding: '6px', textAlign: 'center', background: '#fafafa', borderBottom: '1px solid #eaeaea' }}>
      <Link to="/" style={{ marginRight: '20px', color: '#666', textDecoration: 'none', fontSize: '14px' }}>Inicio</Link>
      <Link to="/Asistencia" style={{ marginRight: '20px', color: '#666', textDecoration: 'none', fontSize: '14px' }}>Asistencia</Link>
      <Link to="/reservas" style={{ marginRight: '20px', color: '#666', textDecoration: 'none', fontSize: '14px' }}>Módulo Reservas</Link>
      <Link to="/admin/hoteles" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Módulo Admin Hoteles</Link>
    </div>
  );
};

export default BarraDesarrollo;