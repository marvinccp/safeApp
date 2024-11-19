'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Agregar la columna `exerciseId` a la tabla `protocol_exercises`
    return queryInterface.addColumn('protocol_exercises', 'exerciseId', {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: 'exercises', // Asegúrate de que la tabla `exercises` existe y tiene la columna `id`
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    // Eliminar la columna `exerciseId` de la tabla `protocol_exercises`
    return queryInterface.removeColumn('protocol_exercises', 'exerciseId');
  },
};
