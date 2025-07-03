const mongoose = require('mongoose');

const rendezVousSchema = new mongoose.Schema({
  medecinNom: {
    type: String,
    required: true
  },
  specialite: {
    type: String,
    required: true
  },
  localisation: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  heure: {
    type: String,
    required: true
  },
  mode: {
    type: String,
    default: 'en ligne'
  }
}, { timestamps: true });

module.exports = mongoose.model('RendezVous', rendezVousSchema);
