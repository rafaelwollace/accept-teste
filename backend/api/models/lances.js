'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lances extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Lances.belongsTo(models.Ofertas, {
        foreignKey: 'fk_ofertas'
      })
    }
  }
  Lances.init({
    fk_ofertas:{
      type: DataTypes.INTEGER,
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

    volume:{
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        isInt: {
          args: true,
          msg: 'Campo Volume somente números inteiro.'
        },
        notNull: {
          msg: 'Campo Volume não pode ser vazio.'
        },
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
    status: DataTypes.CHAR(1),
    data: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Lances',
    freezeTableName: true,
    createdAt: false,
    updatedAt: false
  });
  return Lances;
};