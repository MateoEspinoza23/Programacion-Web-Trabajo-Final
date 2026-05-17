// import React from 'react';
import './MainLayout.css'; // <--- Importante: vinculamos el CSS aquí
import { Link } from 'react-router-dom'; // <--- Importante

const MainLayout = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="layout-header">
        <img src="logo.png" alt="Logo" className="layout-logo" />
        <h1>Curso Programacion Web - Seccion 652</h1>
      </header>

      <div className="layout-body">
        <aside className="layout-sidebar">
          <nav className="layout-nav">
            <ul>

              {/* PAGINA PRINCIPAL */}
              <li>
                <Link to="/" title="PAGINA INICIAL">INICIO</Link>
              </li>
      
              {/* PAGINA LOGIN */}
              <li>
                <Link to="/LoginUsuario" title="INGRESAR A CUENTA">LOGIN</Link>
              </li>
              
            </ul>
          </nav>
        </aside>

        <main className="layout-main">
          {children}
        </main>
      </div>

      <footer className="layout-footer">
        <p>© 2026 - Programacion Web</p>
        <p>PROYECTO FINAL - GRUPO 6</p>
      </footer>
    </div>
  );
};

export default MainLayout;