// src/modelos/mascotaModelo.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexion');

const Mascota = sequelize.define('mascota', {
  id_mascota: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: DataTypes.STRING,
  especie: DataTypes.STRING,
  raza: DataTypes.STRING,
  edad: DataTypes.INTEGER,
  estado_adopcion: {
    type: DataTypes.BOOLEAN,
    defaultValue: 0,
  },
}, {
  timestamps: false,
});

module.exports = Mascota;
