'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Usuario.belongsTo(models.Empresa);
      
    }
  }
  Usuario.init({
    nomeUsuario: DataTypes.STRING,
    emailUsuario: DataTypes.STRING,
    senhaUsuario: DataTypes.STRING,
    tipoUsuario: DataTypes.INTEGER,
    empresaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};