// src/controladores/solicitudController.js
const Solicitud = require('../modelos/solicitudModelo');

// Obtener todas las solicitudes
const getSolicitudes = async (req, res) => {
  try {
    const solicitudes = await Solicitud.findAll({
      include: ['adoptante', 'mascota'],
    });
    res.json(solicitudes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva solicitud
const createSolicitud = async (req, res) => {
  try {
    const { id_adoptante, id_mascota } = req.body;
    const nuevaSolicitud = await Solicitud.create({ id_adoptante, id_mascota });
    res.json({ mensaje: 'Solicitud creada', solicitud: nuevaSolicitud });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getSolicitudes, createSolicitud };
