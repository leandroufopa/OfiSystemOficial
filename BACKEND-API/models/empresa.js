'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     Empresa.hasMany(models.Usuario);
    }
  }
  Empresa.init({
    nomeEmpresa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Empresa',
  });
  return Empresa;
};