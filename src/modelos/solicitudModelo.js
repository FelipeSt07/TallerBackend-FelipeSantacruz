// src/modelos/solicitudModelo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexion');
const Adoptante = require('./adoptanteModelo');
const Mascota = require('./mascotaModelo');

const Solicitud = sequelize.define('solicitud', {
  id_solicitud: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  id_adoptante: {
    type: DataTypes.INTEGER,
    references: {
      model: Adoptante,
      key: 'id_adoptante',
    },
  },
  id_mascota: {
    type: DataTypes.INTEGER,
    references: {
      model: Mascota,
      key: 'id_mascota',
    },
  },
  fecha_solicitud: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  estado_solicitud: {
    type: DataTypes.STRING,
    defaultValue: 'pendiente',
  },
}, {
  timestamps: false,
});

// Definición de relaciones
Adoptante.hasMany(Solicitud, { foreignKey: 'id_adoptante' });
Mascota.hasMany(Solicitud, { foreignKey: 'id_mascota' });
Solicitud.belongsTo(Adoptante, { foreignKey: 'id_adoptante' });
Solicitud.belongsTo(Mascota, { foreignKey: 'id_mascota' });

module.exports = Solicitud;
