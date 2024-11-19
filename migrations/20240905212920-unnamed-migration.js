'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addConstraint('RiskProfiles', {
        fields: ['userId'],
        type: 'foreign key',
        name: 'RiskProfiles_userId_fkey',
        references: {
          table: 'users',
          field: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    } catch (error) {
      console.error('Error al agregar la restricción:', error.message);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.removeConstraint(
        'RiskProfiles',
        'RiskProfiles_userId_fkey',
      );
    } catch (error) {
      console.error('Error al eliminar la restricción:', error.message);
    }
  },
};
