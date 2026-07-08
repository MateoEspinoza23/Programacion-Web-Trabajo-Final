'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reservas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idReserva: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      usuarioEmail: {
        allowNull: false,
        type: Sequelize.STRING
      },
      destino: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fechaViaje: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      cantidadPasajeros: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      tipoBoleto: {
        allowNull: false,
        type: Sequelize.STRING
      },
      asientos: {
        allowNull: false,
        type: Sequelize.JSON
      },
      totalPagar: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      fechaRegistro: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reservas');
  }
};