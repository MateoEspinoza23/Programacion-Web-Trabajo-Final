import React from 'react';
import MainLayout from './componentes/MainLayout';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Componentes globales del equipo
import Home from './componentes/Home';
import Asistencia from './componentes/Asistencia';
import Login from './componentes/LoginUsuario';

// Componentes desarrollados por Daniel Sandoval
import ReservaCheckout from './pages/Reservas/ReservaCheckout';
import CrudHoteles from './pages/Admin/CrudHoteles';

function App() {
  return (
    <BrowserRouter>
      {/* Enlaces provisionales de navegación - Daniel Sandoval */}
      <div style={{ padding: '5px', textAlign: 'center', background: '#fafafa' }}>
        <Link to="/" style={{ marginRight: '15px', color: '#555' }}>Inicio</Link>
        <Link to="/reservas" style={{ marginRight: '15px', color: '#555' }}>Checkout</Link>
        <Link to="/admin/hoteles" style={{ color: '#555' }}>Hoteles</Link>
      </div>

      <MainLayout>
        <Routes>
          {/* Rutas principales del sistema */}
          <Route path="/" element={<Home />} />
          <Route path="/Asistencia" element={<Asistencia />} />        
          {/* 2. Conectamos tus rutas (Puntos de acceso para el usuario) */}
          <Route path="/reservas" element={<ReservaCheckout />} />
          <Route path="/admin/hoteles" element={<CrudHoteles />} />
          <Route path="/LoginUsuario" element={<Login />}/>

        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;