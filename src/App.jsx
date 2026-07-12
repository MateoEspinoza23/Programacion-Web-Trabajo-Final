import React from 'react';
import MainLayout from './componentes/MainLayout';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Reserva from "./componentes/Reserva";
import AdminLugares from './componentes/COMPO_PESTAÑAS/AdminLugares';



// Componentes globales del equipo
import Home from './componentes/Home';
import Asistencia from './componentes/Asistencia';
import RegistrarUsuario from './componentes/RegistrarUsuario';

// Componentes desarrollados por Daniel Sandoval
import ReservaCheckout from './pages/Reservas/ReservaCheckout';
import CrudHoteles from './pages/Admin/CrudHoteles';
import LoginUsuario from './componentes/LoginUsuario';
import Eventos from './componentes/Eventos';
import Soporte from './componentes/Soporte';

//Componentes Angela
import Perfil from './componentes/Angela/Perfil';
import Historial from './componentes/Angela/Historial';

function App() {
  return (
    <BrowserRouter>

      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinos" element={<Home />} />
          <Route path="/LoginUsuario" element={<LoginUsuario />} />
          <Route path="/RegistrarUsuario" element={<RegistrarUsuario />} />
          <Route path="/Asistencia" element={<Asistencia />} />
          <Route path="/soporte" element={<Soporte />} />

          <Route path="/reservas" element={<ReservaCheckout />} />
          <Route path="/admin/hoteles" element={<CrudHoteles />} />
          <Route path="/Reserva/:destino" element={<Reserva />} />
          <Route path="/Eventos" element={<Eventos />} />
          <Route path="/admin/lugares" element={<AdminLugares />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/historial" element={<Historial />} />


        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;