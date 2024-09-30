// src/app.js
const express = require('express');
const sequelize = require('./database/conexion');
const adoptanteRouter = require('./rutas/adoptanteRouter');
const mascotaRouter = require('./rutas/mascotaRouter');
const adopcionRouter = require('./rutas/adopcionRouter');

const app = express();
app.use(express.json());

// Rutas
app.use('/api/adoptantes', adoptanteRouter);
app.use('/api/mascotas', mascotaRouter);
app.use('/api/solicitudes', adopcionRouter);

// Sincronizar modelos y luego iniciar el servidor
sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Servidor corriendo en http://localhost:3000');
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar con la base de datos:', error);
  });
