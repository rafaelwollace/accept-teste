'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('ofertas', [
        {
          fk_empresas: 1,
          oferta: 'Produtos de Informática',
          descricao: 'Enviar Produtos Para o Porto de Belém',
          valor: 200.50,
          quantidade: 300,
          saida: 'Porto Manas - AM',
          entrega: 'Porto Belém - PA',
        },

        {
          fk_empresas: 2,
          oferta: 'Produtos de Digitação',
          descricao: 'Enviar Produtos Para o Porto de Belém',
          valor: 200.50,
          quantidade: 300,
          saida: 'Porto Manas - AM',
          entrega: 'Porto Belém - PA',
        },


        {
          fk_empresas: 3,
          oferta: 'Produtos de Cozinha',
          descricao: 'Enviar Produtos Para o Porto de Belém',
          valor: 100.50,
          quantidade: 500,
          saida: 'Porto Manas - AM',
          entrega: 'Porto Belém - PA',
        },

        
        {
          fk_empresas: 1,
          oferta: 'Produtos de Cozinha',
          descricao: 'Enviar Produtos Para o Porto de Belém',
          valor: 500.50,
          quantidade: 1000,
          saida: 'Porto Manas - AM',
          entrega: 'Porto Belém - PA',
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

     await queryInterface.bulkDelete('ofertas', null, {});
  }
};
