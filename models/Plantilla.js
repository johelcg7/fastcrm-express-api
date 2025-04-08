const mongoose = require('mongoose');

const plantillaSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  labels: {
    type: [String],
    default: [],
  },
  author: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Plantilla', plantillaSchema);