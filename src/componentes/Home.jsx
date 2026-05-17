import React from 'react';

const Home = () => {
  return (

    <section>

      <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc' }}>
        <h3>Avances del Curso</h3>
        <ul>
          <li>Para crear un proyecto :
            <code>npx create vite@latest nombre-proyecto</code>
          </li>
          <li>Para iniciar el servidor:
            <code>cd nombre-proyecto</code>
            <code>npm run dev</code>
          </li>
          <li>Para instalar paquetes:
            <code>npm install react-router-dom</code>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;