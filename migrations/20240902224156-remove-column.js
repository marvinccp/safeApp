/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'affiliate');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'affiliate', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
};