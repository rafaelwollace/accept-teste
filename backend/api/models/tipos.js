'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tipos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tipos.hasMany(models.Empresas, {
        foreignKey: 'fk_tipos',
      })
    }
  }
  Tipos.init({
    nomeTipo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Já existe cadastro com este Nome."
      }
    },

  }, {
    sequelize,
    modelName: 'Tipos',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  
  return Tipos;
};