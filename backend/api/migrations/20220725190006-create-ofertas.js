'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ofertas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_empresas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Empresas', key: 'id' }
      },
      oferta: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.TEXT
      },
      valor: {
        type: Sequelize.DOUBLE(10,2),
      },
      quantidade: {
        type: Sequelize.INTEGER
      },
      saida: {
        type: Sequelize.STRING
      },
      entrega: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ofertas');
  }
};