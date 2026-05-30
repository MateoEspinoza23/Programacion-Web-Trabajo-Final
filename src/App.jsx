import React from 'react';
import MainLayout from './componentes/MainLayout';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Componentes globales del equipo
import Home from './componentes/Home';
import Login from './componentes/LoginUsuario';
import Asistencia from './componentes/Asistencia';
import RegistrarUsuario from './componentes/RegistrarUsuario';

// Componentes desarrollados por Daniel Sandoval
import ReservaCheckout from './pages/Reservas/ReservaCheckout';
import CrudHoteles from './pages/Admin/CrudHoteles';

function App() {
  return (
    <BrowserRouter>
      {/* Dev Navigation Links - Barra técnica de pruebas */}
      <div style={{ padding: '6px', textAlign: 'center', background: '#fafafa', borderBottom: '1px solid #eaeaea' }}>
        <Link to="/" style={{ marginRight: '20px', color: '#666', textDecoration: 'none', fontSize: '14px' }}>Inicio</Link>
        <Link to="/Asistencia" style={{ marginRight: '20px', color: '#666', textDecoration: 'none', fontSize: '14px' }}>Asistencia</Link>
        <Link to="/reservas" style={{ marginRight: '20px', color: '#666', textDecoration: 'none', fontSize: '14px' }}>Módulo Reservas</Link>
        <Link to="/admin/hoteles" style={{ color: '#666', textDecoration: 'none', fontSize: '14px' }}>Módulo Admin Hoteles</Link>
      </div>

      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginUsuario" element={<Login />} />
          <Route path="/RegistrarUsuario" element={<RegistrarUsuario />} />
          <Route path="/Asistencia" element={<Asistencia />} />

          <Route path="/reservas" element={<ReservaCheckout />} />
          <Route path="/admin/hoteles" element={<CrudHoteles />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;