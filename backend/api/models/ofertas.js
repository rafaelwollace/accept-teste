'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ofertas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ofertas.belongsTo(models.Empresas, {
        foreignKey: 'fk_empresas'
      }),
      Ofertas.hasMany(models.Lances, {
        foreignKey: 'fk_ofertas',
      })
    }
  }
  Ofertas.init({
    fk_empresas:{
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
    oferta:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Campo Oferta não pode ser nullo.'
        },
        notEmpty: {
          msg:'Campo Oferta não pode ser vazio.'
        }
      },
    },
    descricao:{
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Campo Descrição não pode ser nullo.'
        },
        notEmpty: {
          msg:'Campo Descrição não pode ser vazio.'
        }
      },
    },
    valor:{
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Campo Valor não pode ser nullo.'
        },
        notEmpty: {
          msg:'Campo Valor não pode ser vazio.'
        }
      },
    },
    quantidade:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          args: true,
          msg: 'Campo Quantidade somente números inteiro.'
        },
        notNull: {
          msg: 'Campo Quantidade não pode ser vazio.'
        }
       },
    },
    saida:{
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Campo Endereço de Saída não pode ser nullo.'
        },
        notEmpty: {
          msg:'Campo Endereço de Saída não pode ser vazio.'
        }
      },
    },
    entrega:{
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Campo Endereço de Entrega não pode ser nullo.'
        },
        notEmpty: {
          msg:'Campo Endereço de Entrega não pode ser vazio.'
        }
      },
    },

  }, {
    sequelize,
    modelName: 'Ofertas',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return Ofertas;
};