import React from 'react';
import MainLayout from './componentes/MainLayout';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Reserva from "./componentes/Reserva";

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

      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/LoginUsuario" element={<Login />} />
          <Route path="/RegistrarUsuario" element={<RegistrarUsuario />} />
          <Route path="/Asistencia" element={<Asistencia />} />

          <Route path="/reservas" element={<ReservaCheckout />} />
          <Route path="/admin/hoteles" element={<CrudHoteles />} />

          <Route path="/Reserva/:destino" element={<Reserva />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;