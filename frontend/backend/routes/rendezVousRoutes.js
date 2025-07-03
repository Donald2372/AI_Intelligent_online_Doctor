const express = require('express');
const router = express.Router();
const {
  createRendezVous,
  getRendezVousByUser,
  deleteRendezVous
} = require('../controllers/rendezVousController');

// 🔓 Pour l'instant, sans authentification
router.post('/', createRendezVous);
router.get('/:userId', getRendezVousByUser);
router.delete('/:id', deleteRendezVous);

module.exports = router;
