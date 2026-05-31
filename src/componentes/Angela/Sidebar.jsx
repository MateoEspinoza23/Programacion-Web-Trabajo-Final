import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.css"; // Importamos los estilos separados

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Configuración de rutas (Mantenida intacta)
  const menuItems = [
    { name: "Inicio", path: "/", icon: "🏠" },
    { name: "Crear Cuenta", path: "/RegistrarUsuario", icon: "🔑" },
    { name: "Inicio de Sesión", path: "/LoginUsuario", icon: "🔒" },
    { name: "Mi Perfil", path: "/perfil", icon: "👤" },
    { name: "Eventos y Promos", path: "/Eventos", icon: "🎉" },
    { name: "Reservas", path: "/reservas", icon: "🎟️" },
    { name: "Soporte Técnico", path: "/Asistencia", icon: "⚙️" },
    { name: "Historial Reservas", path: "/historial", icon: "📅" },
    { name: "Administración.", path: "/admin", icon: "📇" },
  ];

  return (
    <div className="sidebar-container">
      <div className="logo-section" onClick={() => navigate("/")} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px 0', cursor: 'pointer' }}>
        <img
          src="/Rumbo_Infinito.png"
          alt="TuriBus Logo"
          style={{ height: '95px', width: 'auto', objectFit: 'contain' }}
        />
      </div>

      <nav className="nav-container">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`menu-button ${isActive ? "active" : ""}`}
            >
              <span className="menu-button-icon">{item.icon}</span>
              {item.name}
            </button>
          );
        })}
      </nav>

      <div className="footer-section">
        <button onClick={() => navigate("/login-usuario")} className="logout-button">
          <span className="red-square"></span>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

export default Sidebar;