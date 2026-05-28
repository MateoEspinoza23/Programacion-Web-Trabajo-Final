import React from 'react';
import MainLayout from './componentes/MainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importaciones de tus compañeros
import Home from './componentes/Home';
import Login from './componentes/LoginUsuario';

// 1. Importamos tus nuevos componentes (Tus módulos)
import ReservaCheckout from './pages/Reservas/ReservaCheckout';
import CrudHoteles from './pages/Admin/CrudHoteles';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          {/* Rutas base del proyecto */}
          <Route path="/" element={<Home />} />
          <Route path="/LoginUsuario" element={<Login />} />

          {/* 2. Conectamos tus rutas (Puntos de acceso para el usuario) */}
          <Route path="/reservas" element={<ReservaCheckout />} />
          <Route path="/admin/hoteles" element={<CrudHoteles />} />

        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;