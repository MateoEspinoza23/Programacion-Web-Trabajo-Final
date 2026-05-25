import React from 'react';
import MainLayout from './componentes/MainLayout';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Login from './componentes/LoginUsuario';
import Perfil from './componentes/Angela/Perfil';
import Historial from './componentes/Angela/Historial';
import DetalleReserva from './componentes/Angela/DetalleReserva';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>

          <Route path="/" element={<Home />} />
        
          <Route path="/LoginUsuario" element={<Login />}/>
          <Route path="/perfil" element={<Perfil />} /> 
          <Route path="/historial" element={<Historial />} /> 
          <Route path="/detalle-reserva" element={<DetalleReserva />} />
          
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;