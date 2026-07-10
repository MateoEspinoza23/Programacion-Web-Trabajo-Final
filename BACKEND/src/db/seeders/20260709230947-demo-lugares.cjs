'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Lugars', [
      {
        nombre: 'Machu Picchu',
        descripcion: 'Maravilla del Mundo',
        rutas: 'Lima, Arequipa',
        img: '/picchu.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Lineas de Nazca',
        descripcion: 'Civilizaciones Antiguas',
        rutas: 'Lima, Ica, Paracas',
        img: '/nazca.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Montaña de 7 Colores',
        descripcion: 'Atractivo Natural',
        rutas: 'Cusco, Checacupe',
        img: '/mont.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Lago Titicaca',
        descripcion: 'Reserva Natural',
        rutas: 'Puno, Cusco',
        img: '/titi.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Chan Chan',
        descripcion: 'Ciudadela de Barro',
        rutas: 'Lima, Trujillo',
        img: '/chan.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Centro de Lima',
        descripcion: 'Turismo local',
        rutas: 'Lima',
        img: '/lima.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Lugars', null, {});
  }
};