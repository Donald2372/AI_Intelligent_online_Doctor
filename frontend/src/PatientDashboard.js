// src/PatientDashboard.js
import React from 'react';
import './App.css';

const PatientDashboard = () => {
  return (
    <div className="patient-dashboard">
      <div className="patient-header">
        <img src="https://randomuser.me/api/portraits/women/8.jpg" alt="Patient" className="patient-avatar" />
        <div>
          <h2>Bakari Marie</h2>
          <p>32 ans, Femme</p>
        </div>
      </div>

      <h3>Derniers diagnostics / rendez-vous</h3>
      <div className="patient-diagnostics">
        <div className="card">
          <h4>Diabète de type 2</h4>
          <p>Diagnostic confirmé le 12 mars 2024</p>
          <span className="arrow">&gt;</span>
        </div>

        <div className="card">
          <h4>🔔 Notifications</h4>
          <p>Prendre votre médicament pour l’hypertension</p>
          <small>Rappel • Aujourd’hui</small>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <span role="img" aria-label="file">👤</span>
          <p>Mon dossier médical</p>
        </div>
        <div className="card">
          <span role="img" aria-label="chat">💬</span>
          <p>Mes consultations</p>
        </div>
        <div className="card">
          <span role="img" aria-label="calendar">📅</span>
          <p>Prendre RDV</p>
        </div>
        <div className="card">
          <span role="img" aria-label="AI">🧠</span>
          <p>IA Diagnostic</p>
        </div>
        <div className="card">
          <span role="img" aria-label="payment">💳</span>
          <p>Historique des paiements</p>
        </div>
      </div>

      <button className="btn-emergency">📞 SOS URGENCE</button>
    </div>
  );
};

export default PatientDashboard;
