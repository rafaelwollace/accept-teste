'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('empresas', [
      {
        fk_tipos : 2,
        nome: 'Tranportadora ltda.',
        cnpj: 266261251125,
        email: 'rafael@empresa.com.br'
      },
      {
        fk_tipos : 2,
        nome: 'Tranportadora Penalt ltda.',
        cnpj: 384761251125,
        email: 'penatl@penatl.com.br'
      },

      {
        fk_tipos : 2,
        nome: 'Tranportadora Joao ltda.',
        cnpj: 674261251125,
        email: 'joao@transportadorajoao.com.br'
      },
      {
        fk_tipos : 2,
        nome: 'Tranportadora Joaquin ltda.',
        cnpj: 266244451125,
        email: 'joaquin@empresa.com.br'
      },

      {
        fk_tipos : 1,
        nome: 'Embarcadeira Rafaella ltda.',
        cnpj: 444261253335,
        email: 'rafaella@embacadeira.com.br'
      },

      {
        fk_tipos : 1,
        nome: 'Embarcadeira Junior ltda.',
        cnpj: 266261253335,
        email: 'rafael@empresa.com.br'
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
     await queryInterface.bulkDelete('empresas', null, {});
  }
};
