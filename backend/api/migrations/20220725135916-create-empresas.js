'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_tipos: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Tipos', key: 'id' }
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cnpj: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Empresas');
  }
};