import "./MainLayout.css";
import { Link, useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    { nombre: "Inicio", ruta: "/" },
    {
      nombre: "Login",
      ruta: "/LoginUsuario",
    },
    {
      nombre: "Destinos",
      ruta: "/destinos",
    },
    {
      nombre:
        "Tours y Actividades",
      ruta: "/tours",
    },
    {
      nombre: "Reservas",
      ruta: "/reservas",
    },
    {
      nombre: "Favoritos",
      ruta: "/favoritos",
    },
    {
      nombre: "Mi Perfil",
      ruta: "/perfil",
    },
    {
      nombre: "Historial",
      ruta: "/historial",
    },
    {
      nombre:
        "Soporte Técnico",
      ruta: "/soporte",
    },
    {
      nombre:
        "Cerrar sesión",
      ruta: "/logout",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background:
          "#f5f7fb",
      }}
    >
      {/* SIDEBAR */}
      <aside
        style={{
          width: "250px",
          background:
            "white",
          padding:
            "25px 20px",
          borderRight:
            "1px solid #ddd",
          flexShrink: 0,
        }}
      >
        <nav>
          <ul
            style={{
              listStyle:
                "none",
              padding: 0,
              margin: 0,
              display:
                "flex",
              flexDirection:
                "column",
              gap: "14px",
            }}
          >
            {menuItems.map(
              (item) => (
                <li
                  key={
                    item.ruta
                  }
                >
                  <Link
                    to={
                      item.ruta
                    }
                    style={{
                      display:
                        "block",
                      textDecoration:
                        "none",
                      padding:
                        "12px 18px",
                      borderRadius:
                        "12px",
                      color:
                        location.pathname ===
                        item.ruta
                          ? "white"
                          : "#111827",
                      background:
                        location.pathname ===
                        item.ruta
                          ? "#0ea5a8"
                          : "transparent",
                      fontWeight:
                        "500",
                    }}
                  >
                    {
                      item.nombre
                    }
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </aside>

      {/* CONTENIDO */}
      <main
        style={{
          flex: 1,
          width: "100%",
          padding: "30px",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default MainLayout;