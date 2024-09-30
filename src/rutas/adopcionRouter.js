// src/rutas/adopcionRouter.js
const express = require('express');
const router = express.Router();
const { getSolicitudes, createSolicitud } = require('../controladores/solicitudController');

router.get('/', getSolicitudes);
router.post('/', createSolicitud);

module.exports = router;
