import {  DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface) => {

    await queryInterface.addColumn('protocol_exercises', 'exerciseIds', {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: true,  // Permitir valores nulos temporalmente
    });

    await queryInterface.sequelize.query(`
      UPDATE protocol_exercises
      SET "exerciseIds" = ARRAY[]::UUID[]
      WHERE "exerciseIds" IS NULL;
    `);

    await queryInterface.changeColumn('protocol_exercises', 'exerciseIds', {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: false,  // Revertir el cambio y exigir que no haya valores nulos
    });
  },

  down: async (queryInterface) => {
    await queryInterface.addColumn('protocol_exercises', 'exerciseId', {
      type: DataTypes.UUID,
      allowNull: false,
    });
    await queryInterface.removeColumn('protocol_exercises', 'exerciseIds');
  },
};
