const express = require('express');
const router = express.Router();
const plantillaController = require('../controllers/plantillaController');

// Rutas CRUD
router.get('/api/templates', plantillaController.getTemplates);
router.post('/api/templates', plantillaController.createTemplate);
router.put('/api/templates/:id', plantillaController.updateTemplate);
router.delete('/api/templates/:id', plantillaController.deleteTemplate);

module.exports = router;