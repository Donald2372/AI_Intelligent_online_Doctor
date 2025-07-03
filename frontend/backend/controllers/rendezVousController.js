const RendezVous = require('../models/RendezVous');

// ➕ Créer un nouveau rendez-vous
const createRendezVous = async (req, res) => {
  try {
    console.log("📥 Données reçues :", req.body); // 👈 Ajoute ceci

    const { medecinNom, specialite, localisation, date, heure, mode } = req.body;

    const nouveauRDV = await RendezVous.create({
      medecinNom,
      specialite,
      localisation,
      date,
      heure,
      mode
    });

    res.status(201).json(nouveauRDV);
  } catch (error) {
    console.error('❌ Erreur lors de la création du rendez-vous :', error.message);
    res.status(500).json({ message: "Erreur : " + error.message });
  }
};


// 📄 Récupérer les rendez-vous d’un utilisateur (optionnel si lié à un user)
const getRendezVousByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const rdvs = await RendezVous.find({ userId });
    res.json(rdvs);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur lors de la récupération" });
  }
};

// ❌ Supprimer un rendez-vous
const deleteRendezVous = async (req, res) => {
  try {
    await RendezVous.findByIdAndDelete(req.params.id);
    res.json({ message: "Rendez-vous supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la suppression" });
  }
};

module.exports = {
  createRendezVous,
  getRendezVousByUser,
  deleteRendezVous
};
