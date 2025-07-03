// src/SuiviIAPage.js
import React from 'react';
import './App.css';

const alerts = [
  { date: "Aujourd’hui", message: "Prenez votre Metformine" },
  { date: "30 avr.", message: "Effectuez une analyse de la glycémie" },
  { date: "02 mai", message: "Mesurez votre tension artérielle" }
];

const categories = [
  { icon: "🩸", title: "Diabète", description: "Suivi de la glycémie et des traitements associés." },
  { icon: "💚", title: "Hypertension", description: "Contrôle de la pression artérielle." },
  { icon: "👶", title: "Grossesse", description: "Suivi du bien-être et des rendez-vous prénataux." },
  { icon: "💊", title: "Médication", description: "Historique et rappels de prise de médicaments." }
];

const SuiviIAPage = () => {
  return (
    <div className="suivi-ia-container">
      <h2>Suivi IA Personnalisé</h2>
      <p>L’intelligence artificielle vous aide à suivre vos pathologies et à rester en bonne santé chaque jour.</p>

      <div className="suivi-ia-grid">
        {categories.map((cat, index) => (
          <div className="suivi-ia-box" key={index}>
            <div className="suivi-ia-icon">{cat.icon}</div>
            <h3>{cat.title}</h3>
            <p className="suivi-ia-desc">{cat.description}</p>
          </div>
        ))}

        <div className="suivi-ia-box suivi-ia-alertes">
          <div className="suivi-ia-alert-title">
            <strong>Alertes intelligentes</strong>
            <span>➡️</span>
          </div>
          {alerts.map((a, i) => (
            <div className="suivi-ia-alerte" key={i}>
              <small>{a.date}</small>
              <p>{a.message}</p>
            </div>
          ))}
        </div>

        <div className="suivi-ia-box suivi-ia-conseil">
          <h4>💡 Conseil de santé du jour</h4>
          <p>Buvez au moins 1,5L d’eau et faites 30 minutes de marche.</p>
        </div>
      </div>

      <div className="suivi-ia-more">➕ Voir tous les conseils</div>
    </div>
  );
};

export default SuiviIAPage;
