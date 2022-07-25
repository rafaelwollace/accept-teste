'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Empresas.belongsTo(models.Tipos, {
        foreignKey: 'fk_tipos'
      }),
      Empresas.hasMany(models.Ofertas, {
        foreignKey: 'fk_empresas',
      })
    }
  }
  Empresas.init({
    fk_tipos:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Campo Empresa não pode ser nullo.'
        },
        notEmpty: {
          msg:'Campo Empresa não pode ser vazio.'
        }
      },
    },

    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "Já existe cadastro com este Nome."
      },
      validate: {
        len: {
          args: [10, 255],
          msg: "Nome com mínimo 10 caracteres"
        }
      }
    },
    cnpj:{
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: {
        msg: "Já existe cadastro com este CNPJ."
      },
      validate: {
        isInt: {
          args: true,
          msg: 'Campo CNPJ somente números inteiro.'
        },
        notNull: {
          msg: 'Campo CNPJ não pode ser vazio.'
        },
      },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Já existe cadastro com este E-mail."
        },
        validate: {
          isEmail: {
            msg: "Digite um E-mail valido"
          },
          notNull: {
            msg: 'Campo E-mail não pode ser vazio.'
          },
        }
      },
  }, {
    sequelize,
    modelName: 'Empresas',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return Empresas;
};