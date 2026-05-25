import PerfilCard from "./PerfilCard";

function Perfil() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        padding: "2rem",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            marginBottom: "8px",
          }}
        >
          Mi Perfil
        </h1>

        <p
          style={{
            color: "#475569",
            marginBottom: "25px",
          }}
        >
          Administra tu información personal y la configuración de tu cuenta.
        </p>

        <PerfilCard />
      </div>
    </div>
  );
}

export default Perfil;                                  