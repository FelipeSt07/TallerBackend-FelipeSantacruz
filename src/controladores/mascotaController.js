// src/controladores/mascotaController.js
const Mascota = require('../modelos/mascotaModelo');

// Obtener todas las mascotas
const getMascotas = async (req, res) => {
  try {
    const mascotas = await Mascota.findAll();
    res.json(mascotas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva mascota
const createMascota = async (req, res) => {
  try {
    const { nombre, especie, raza, edad } = req.body;
    const nuevaMascota = await Mascota.create({ nombre, especie, raza, edad });
    res.json({ mensaje: 'Mascota creada', mascota: nuevaMascota });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getMascotas, createMascota };
