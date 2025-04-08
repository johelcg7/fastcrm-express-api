const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' })); // Cambia el puerto si es necesario

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Importar rutas
const plantillaRoutes = require('./routes/plantillaRoutes');
app.use(plantillaRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});