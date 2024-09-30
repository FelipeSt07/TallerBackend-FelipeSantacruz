// src/rutas/adoptanteRouter.js
const express = require('express');
const router = express.Router();
const { getAdoptantes, createAdoptante } = require('../controladores/adoptanteController');

router.get('/', getAdoptantes);
router.post('/', createAdoptante);

module.exports = router;
