// src/AdminOverviewPage.js
import React from 'react';
import './App.css';

const AdminOverviewPage = () => {
  return (
    <div className="admin-overview">
      <aside className="admin-overview-sidebar">
        <h2>➕ Espace Administrateur</h2>
        <ul>
          <li className="active">📋 Utilisateurs</li>
          <li>✅ Profils à vérifier</li>
          <li>📊 Statistiques</li>
          <li>🤝 Partenariats</li>
          <li>🚩 Modération</li>
        </ul>
      </aside>

      <main className="admin-overview-main">
        <div className="admin-overview-grid">

          <div className="admin-overview-card">
            <h3>Gestion des utilisateurs</h3>
            <p>🧑‍🤝‍🧑 Patients : <strong>1 523</strong></p>
            <p>👨‍⚕️ Médecins : <strong>276</strong></p>
            <p>🧍‍♂️ Nouveaux inscrits : <strong>58</strong></p>
            <button>Gérer les utilisateurs</button>
          </div>

          <div className="admin-overview-card">
            <h3>Statistiques générales</h3>
            <p>📅 Consultations réalisées : <strong>3 821</strong></p>
            <p>💶 Total paiements : <strong>12 470 000 FCFA</strong></p>
            <p>📈 Taux d'adhésion mensuel : <strong>+12%</strong></p>
            <a href="#">Voir le tableau complet</a>
          </div>

          <div className="admin-overview-card">
            <h3>Profils à vérifier</h3>
            <div className="admin-overview-profile">
              <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="Roger" />
              <span>Roger Fomene<br /><small>Médecin - Douala</small></span>
              <button>Vérifier</button>
            </div>
            <div className="admin-overview-profile">
              <img src="https://randomuser.me/api/portraits/women/30.jpg" alt="Solange" />
              <span>Solange Ebode<br /><small>Patient - Yaoundé</small></span>
              <button>Vérifier</button>
            </div>
          </div>

          <div className="admin-overview-card">
            <h3>Partenaires</h3>
            <ul>
              <li>🧪 Laboratoire Santé Plus <a href="#">Gérer</a></li>
              <li>🏥 Clinique Bien-Être <a href="#">Modifier</a></li>
              <li>💊 Pharmacie Centrale <a href="#">Gérer</a></li>
            </ul>
          </div>

          <div className="admin-overview-card">
            <h3>Contenus santé</h3>
            <ul>
              <li>📄 Article : Prévenir l’hypertension <a href="#">Voir</a></li>
              <li>🎥 Vidéo : Asthme et premiers soins <a href="#">Voir</a></li>
              <li>📃 Fiche pratique : Diabète de type 2 <a href="#">Voir</a></li>
            </ul>
          </div>

          <div className="admin-overview-card">
            <h3>Modération</h3>
            <p>💬 Signalements : <strong>7 en attente</strong></p>
            <p>🗨️ Messages modérés ce mois : <strong>23</strong></p>
            <a href="#">Consulter les signalements</a>
          </div>

        </div>
      </main>
    </div>
  );
};

export default AdminOverviewPage;
