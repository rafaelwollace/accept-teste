'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('lances', [
        {
          fk_ofertas: 1,
          volume: 200.50,
          valor: 300,
          status: 1,
          data: '2022-07-30 19:26:25',
        },
        {
          fk_ofertas: 1,
          volume: 600,
          valor: 400,
          status: 0,
          data: '2022-07-29 19:26:25',
        },
        {
          fk_ofertas: 1,
          volume: 500,
          valor: 500,
          status: 0,
          data: '2022-07-28 19:26:25',
        },
        {
          fk_ofertas: 2,
          volume: 500,
          valor: 500,
          status: 0,
          data: '2022-07-27 19:26:25',
        },
        {
          fk_ofertas: 3,
          volume: 500,
          valor: 500,
          status: 0,
          data: '2022-07-27 19:26:25',
        },
        {
          fk_ofertas: 3,
          volume: 500,
          valor: 500,
          status: 1,
          data: '2022-07-27 19:26:25',
        },

       
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

     await queryInterface.bulkDelete('lances', null, {});
  }
};
