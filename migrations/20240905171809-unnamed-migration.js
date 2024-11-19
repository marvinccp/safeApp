module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('RiskProfiles', 'cardiovascularDisease', {
      type: Sequelize.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('RiskProfiles', 'cardiovascularDisease');
  },
};
