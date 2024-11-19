import {  DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface) => {
    // Paso 1: Eliminar la columna 'exerciseIds' (la que se agregó en la migración anterior)
    await queryInterface.removeColumn('protocol_exercises', 'exerciseIds');

    // Paso 2: Restaurar la columna 'exerciseId' que existía antes de la primera migración
    await queryInterface.addColumn('protocol_exercises', 'exerciseId', {
      type: DataTypes.UUID,
      allowNull: false,
    });
  },

  down: async (queryInterface) => {
    // Paso 1: Eliminar la columna 'exerciseId' restaurada
    await queryInterface.removeColumn('protocol_exercises', 'exerciseId');

    // Paso 2: Restaurar la columna 'exerciseIds' (la columna que se eliminó)
    await queryInterface.addColumn('protocol_exercises', 'exerciseIds', {
      type: DataTypes.ARRAY(DataTypes.UUID),
      allowNull: true, // Si quieres permitir valores nulos, déjalo en true
    });
  },
};
