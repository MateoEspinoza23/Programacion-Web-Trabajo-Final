import React, { useState } from 'react';
// Salimos de COMPO_PESTAÑAS, luego de componentes, y entramos a data
import lugaresIniciales from '../../data/home.json';

const AdminLugares = () => {
  const [lugares, setLugares] = useState(lugaresIniciales);

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', color: '#333' }}>
      
      {/* CABECERA SIMPLE */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ margin: 0, fontSize: '26px' }}>⚙️ Panel Admin: Registrar Lugares</h1>
        <button 
          onClick={() => alert("Maqueta: Aquí se abrirá el formulario para registrar un nuevo destino turístico.")}
          style={{ 
            padding: '10px 15px', 
            backgroundColor: '#38bdf8', 
            border: 'none', 
            borderRadius: '5px', 
            fontWeight: 'bold', 
            cursor: 'pointer' 
          }}
        >
          + Agregar Nuevo Destino
        </button>
      </div>

      <p style={{ color: '#666', marginBottom: '25px' }}>
        Vista previa del sistema de gestión de inventario para TuriBus.
      </p>

      {/* TABLA MAQUETADA CON TU DATA */}
      <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
        <thead>
          <tr style={{ backgroundColor: '#f8fafc', textAlign: 'left', borderBottom: '2px solid #cbd5e1' }}>
            <th style={{ padding: '12px' }}>Imagen</th>
            <th style={{ padding: '12px' }}>Destino</th>
            <th style={{ padding: '12px' }}>Descripción</th>
            <th style={{ padding: '12px' }}>Rutas Incluidas</th>
            <th style={{ padding: '12px', textAlign: 'center' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {lugares.map((lugar, index) => (
            <tr key={index} style={{ borderBottom: '1px solid #e2e8f0' }}>
              {/* IMAGEN */}
              <td style={{ padding: '12px' }}>
                <img 
                  src={lugar.img} 
                  alt={lugar.nombre} 
                  style={{ width: '65px', height: '45px', objectFit: 'cover', borderRadius: '4px', backgroundColor: '#eee' }} 
                />
              </td>
              {/* NOMBRE */}
              <td style={{ padding: '12px', fontWeight: 'bold', color: '#0f172a' }}>
                {lugar.nombre}
              </td>
              {/* DESCRIPCIÓN */}
              <td style={{ padding: '12px', color: '#475569', fontSize: '14px' }}>
                {lugar.descripcion}
              </td>
              {/* RUTAS */}
              <td style={{ padding: '12px', color: '#64748b', fontSize: '14px' }}>
                {lugar.rutas}
              </td>
              {/* ACCIONES */}
              <td style={{ padding: '12px', textAlign: 'center' }}>
                <button 
                  onClick={() => alert(`Simulación: Editando datos de ${lugar.nombre}`)}
                  style={{ marginRight: '8px', padding: '5px 10px', backgroundColor: '#ffc107', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: '500' }}
                >
                  Editar
                </button>
                <button 
                  onClick={() => alert(`Simulación: Eliminando ${lugar.nombre} del sistema`)}
                  style={{ padding: '5px 10px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '3px', cursor: 'pointer', fontWeight: '500' }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default AdminLugares;