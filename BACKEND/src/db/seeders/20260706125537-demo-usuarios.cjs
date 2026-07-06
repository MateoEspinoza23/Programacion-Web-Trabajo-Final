'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
        nombre: 'Juan Pérez',
        correo: 'juan@gmail.com',
        contraseña: 'juan123',
        telefono: '',
        pais: 'Perú',
        ciudad: '',
        fechaNacimiento: '2000-05-14',
        dni: '',
        pasaporte: '',
        foto: '/juan.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'María López',
        correo: 'maria@gmail.com',
        contraseña: 'maria123',
        telefono: '',
        pais: 'Perú',
        ciudad: '',
        fechaNacimiento: '2001-08-22',
        dni: '',
        pasaporte: '',
        foto: '/maria.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Carlos García',
        correo: 'carlos@gmail.com',
        contraseña: 'carlos123',
        telefono: '',
        pais: 'Perú',
        ciudad: '',
        fechaNacimiento: '1999-12-03',
        dni: '',
        pasaporte: '',
        foto: '/carlos.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Ana Torres',
        correo: 'ana@gmail.com',
        contraseña: 'ana123456',
        telefono: '',
        pais: 'Perú',
        ciudad: '',
        fechaNacimiento: '2002-03-18',
        dni: '',
        pasaporte: '',
        foto: '/ana.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Admin',
        correo: 'admin@turismo.com',
        contraseña: 'admin123',
        telefono: '',
        pais: 'Perú',
        ciudad: '',
        fechaNacimiento: '1995-01-01',
        dni: '',
        pasaporte: '',
        foto: '/default.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};