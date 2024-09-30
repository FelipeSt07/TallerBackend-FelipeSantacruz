// src/rutas/mascotaRouter.js
const express = require('express');
const router = express.Router();
const { getMascotas, createMascota } = require('../controladores/mascotaController');

router.get('/', getMascotas);
router.post('/', createMascota);

module.exports = router;
