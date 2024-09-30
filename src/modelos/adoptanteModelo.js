// src/modelos/adoptanteModelo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexion');

const Adoptante = sequelize.define('adoptante', {
  id_adoptante: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: DataTypes.STRING,
  telefono: DataTypes.STRING,
  direccion: DataTypes.STRING,
  correo: DataTypes.STRING,
}, {
  timestamps: false,
});

module.exports = Adoptante;
