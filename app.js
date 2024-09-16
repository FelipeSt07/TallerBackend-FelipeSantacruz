const express = require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json());

// Conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'AdopcionMascotas'
  });
  
  db.connect(err => {
    if (err) {
      console.error('Error conectando a la base de datos:', err);
      return;
    }
    console.log('Conectado a la base de datos');
  });
  
// Obtener todas las mascotas
app.get('/mascotas', (req, res) => {
  db.query('SELECT * FROM Mascotas', (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Agregar una nueva mascota
app.post('/mascotas', (req, res) => {
  const { nombre, especie, raza, edad } = req.body;
  const sql = 'INSERT INTO Mascotas (nombre, especie, raza, edad) VALUES (?, ?, ?, ?)';
  db.query(sql, [nombre, especie, raza, edad], (err, result) => {
    if (err) throw err;
    res.json({ mensaje: 'Mascota agregada', id_mascota: result.insertId });
  });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
