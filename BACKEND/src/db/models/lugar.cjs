'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lugar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lugar.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    rutas: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lugar',
  });
  return Lugar;
};