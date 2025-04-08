const Plantilla = require('../models/Plantilla');

// Obtener todas las plantillas
exports.getTemplates = async (req, res) => {
  try {
    const templates = await Plantilla.find();
    res.status(200).json(templates);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva plantilla
exports.createTemplate = async (req, res) => {
  try {
    const { type, content, labels, author } = req.body;

    // Validaciones básicas
    if (!type || !content || !author) {
      return res.status(400).json({ error: 'Los campos type, content y author son obligatorios.' });
    }

    const newTemplate = new Plantilla({ type, content, labels, author });
    const savedTemplate = await newTemplate.save();
    res.status(201).json(savedTemplate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una plantilla por ID
exports.updateTemplate = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, content, labels, author } = req.body;

    // Validaciones básicas
    if (!type || !content || !author) {
      return res.status(400).json({ error: 'Los campos type, content y author son obligatorios.' });
    }

    const updatedTemplate = await Plantilla.findByIdAndUpdate(
      id,
      { type, content, labels, author },
      { new: true, runValidators: true }
    );

    if (!updatedTemplate) {
      return res.status(404).json({ error: 'Plantilla no encontrada.' });
    }

    res.status(200).json(updatedTemplate);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una plantilla por ID
exports.deleteTemplate = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTemplate = await Plantilla.findByIdAndDelete(id);

    if (!deletedTemplate) {
      return res.status(404).json({ error: 'Plantilla no encontrada.' });
    }

    res.status(200).json({ message: 'Plantilla eliminada correctamente.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};