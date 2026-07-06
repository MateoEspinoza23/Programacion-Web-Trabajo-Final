'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      correo: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      contraseña: {
        allowNull: false,
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      pais: {
        type: Sequelize.STRING
      },
      ciudad: {
        type: Sequelize.STRING
      },
      fechaNacimiento: {
        type: Sequelize.DATEONLY
      },
      dni: {
        type: Sequelize.STRING
      },
      pasaporte: {
        type: Sequelize.STRING
      },
      foto: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Usuarios');
  }
};