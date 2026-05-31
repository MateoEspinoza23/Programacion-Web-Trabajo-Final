import React from 'react';
import './MainLayout.css';
import BarraDesarrollo from './BarraDesarollo';
import Sidebar from './Angela/Sidebar';
import { Box } from '@mui/material';

const MainLayout = ({ children }) => {
  return (
    <main className="layout-main">

      
      {/* BARRA SECUNDARIA GRIS */}
      <BarraDesarrollo />

      {/* BOX */}      
      <Box sx={{ display: 'flex', width: '100vw', minHeight: '100vh' }}>

      {/* BARRA PRINCIPAL NEGRO */}
      <Sidebar />

      <Box 
          component="div" 
          sx={{ 
            flexGrow: 1, 
            paddingLeft: '260px', 
            width: '100%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          
          {children}
        </Box>
        </Box>
    </main>
  );
};

export default MainLayout;