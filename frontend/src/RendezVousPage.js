import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const RendezVousPage = () => {
  const [specialite, setSpecialite] = useState('');
  const [localisation, setLocalisation] = useState('');
  const [date, setDate] = useState('2024-04-24');
  const [selectedHour, setSelectedHour] = useState('11:00');
  const [message, setMessage] = useState('');

  const handleCreateRendezVous = async () => {
    try {
      await axios.post('https://fictional-sniffle-pjgv559w5p9377vj-5000.app.github.dev/', {
        medecinNom: 'Dr. Alexandre Kamga',
        specialite,
        localisation,
        date,
        heure: selectedHour,
        mode: 'en ligne',
      });
      setMessage('✅ Rendez-vous enregistré avec succès !');
    } catch (error) {
    
  console.error("Erreur POST rendez-vous :", error.response?.data || error.message);
  setMessage('❌ Une erreur est survenue.');

    }
  };

  return (
    <div className="rdv-container">
      <h2>Prise de rendez-vous</h2>

      <form className="rdv-form">
        <label>Spécialité</label>
        <select value={specialite} onChange={(e) => setSpecialite(e.target.value)}>
          <option value="">Sélectionner la spécialité</option>
          <option value="Cardiologue">Cardiologue</option>
          <option value="Pédiatre">Pédiatre</option>
          <option value="Dentiste">Dentiste</option>
        </select>

        <label>Localisation</label>
        <select value={localisation} onChange={(e) => setLocalisation(e.target.value)}>
          <option value="">Sélectionner la localisation</option>
          <option value="Douala">Douala</option>
          <option value="Yaoundé">Yaoundé</option>
          <option value="Bafoussam">Bafoussam</option>
        </select>

        <label>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

        <button type="submit" className="rdv-search-button" onClick={(e) => e.preventDefault()}>
          🔍 Rechercher
        </button>
      </form>

      <div className="rdv-doctor-card">
        <img
          src="https://randomuser.me/api/portraits/men/46.jpg"
          alt="Dr Alexandre Kamga"
          className="rdv-doctor-img"
        />
        <div className="rdv-doctor-info">
          <h3>Alexandre Kamga</h3>
          <p className="sub">Cardiologue</p>
          <p className="sub">📍 Douala</p>
          <div className="rdv-hour-select">
            {['09:00', '10:00', '11:00'].map((hour) => (
              <button
                key={hour}
                className={hour === selectedHour ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedHour(hour);
                }}
              >
                {hour}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rdv-summary-box">
        <h4>📝 Résumé du rendez-vous</h4>
        <p>
          <strong>👨‍⚕️ Docteur :</strong> Dr. Alexandre Kamga
        </p>
        <p>
          <strong>📅 Date/Heure :</strong>{' '}
          {new Date(date).toLocaleDateString('fr-FR')}, {selectedHour}
        </p>
        <p>
          <strong>💻 Mode :</strong> En ligne
        </p>
      </div>

      <button className="rdv-pay-button" onClick={handleCreateRendezVous}>
        💳 Payer 8 000 FCFA
      </button>

      {message && <p style={{ marginTop: '20px', fontWeight: 'bold' }}>{message}</p>}
    </div>
  );
};

export default RendezVousPage;
