import React from 'react';
import MainLayout from './componentes/MainLayout';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Asistencia from './componentes/Asistencia';
import Login from './componentes/LoginUsuario';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Asistencia" element={<Asistencia />} />
        
          <Route path="/LoginUsuario" element={<Login />}/>

        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;