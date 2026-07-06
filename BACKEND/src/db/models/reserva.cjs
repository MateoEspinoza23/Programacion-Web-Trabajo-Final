'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Reserva.init({
    idReserva: DataTypes.STRING,
    usuarioEmail: DataTypes.STRING,
    destino: DataTypes.STRING,
    fechaViaje: DataTypes.DATEONLY,
    cantidadPasajeros: DataTypes.INTEGER,
    tipoBoleto: DataTypes.STRING,
    asientos: DataTypes.JSON,
    totalPagar: DataTypes.DECIMAL,
    fechaRegistro: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Reserva',
  });

  return Reserva;
};