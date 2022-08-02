'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('tipos', [
        {
          id: 1,
          nomeTipo: 'Embarcadeira',

        },
        {
          id: 2,
          nomeTipo: 'Transportadora',
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

     await queryInterface.bulkDelete('tipos', null, {});
  }
};
