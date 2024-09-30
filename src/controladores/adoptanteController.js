// src/controladores/adoptanteController.js
const Adoptante = require('../modelos/adoptanteModelo');

// Obtener todos los adoptantes
const getAdoptantes = async (req, res) => {
  try {
    const adoptantes = await Adoptante.findAll();
    res.json(adoptantes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo adoptante
const createAdoptante = async (req, res) => {
  try {
    const { nombre, telefono, direccion, correo } = req.body;
    const nuevoAdoptante = await Adoptante.create({ nombre, telefono, direccion, correo });
    res.json({ mensaje: 'Adoptante creado', adoptante: nuevoAdoptante });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAdoptantes, createAdoptante };
