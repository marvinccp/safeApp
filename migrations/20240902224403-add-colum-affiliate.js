/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'affiliate', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false, // Define el valor predeterminado como 'false'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'affiliate');
  },
};
