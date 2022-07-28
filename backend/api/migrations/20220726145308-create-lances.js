'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Lances', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_ofertas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Ofertas', key: 'id' }
      },
      volume: {
        type: Sequelize.BIGINT
      },
      valor: {
        type: Sequelize.DOUBLE(10,2),
      },
      status: {
        type: Sequelize.CHAR(1)
      },
      data: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Lances');
  }
};