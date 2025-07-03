// src/AdminDashboard.js
import React from 'react';
import './App.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2 className="sidebar-title">Espace Administrateur</h2>
        <ul className="sidebar-menu">
          <li>Tableau de bord</li>
          <li>Utilisateurs</li>
          <li>Consultations</li>
          <li>Statistiques</li>
          <li>Partenaires</li>
          <li>Contenu</li>
          <li>Modération</li>
        </ul>
      </aside>

      <main className="admin-content">
        <div className="admin-header">
          <input type="text" placeholder="Search" className="search-input" />
          <div className="admin-icons">
            <span>❓</span>
            <span>🔔</span>
            <span>➕</span>
            <img className="admin-avatar" src="https://randomuser.me/api/portraits/women/12.jpg" alt="Admin" />
          </div>
        </div>

        <div className="admin-grid">
          <section className="box">
            <h3>Gestion des utilisateurs</h3>
            <div className="user-stats">
              <div className="user-card">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Patient" />
                <p>Patients</p>
                <strong>1205</strong>
              </div>
              <div className="user-card">
                <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Médecin" />
                <p>Médecins</p>
                <strong>56</strong>
              </div>
            </div>
          </section>

          <section className="box">
            <h3>Statistiques</h3>
            <div className="stats-overview">
              <div>
                <p>Consultations</p>
                <strong>3568</strong> <span className="green">+57</span>
              </div>
              <div>
                <p>Paiements</p>
                <strong>251300</strong> <span className="green">FCFA</span>
              </div>
            </div>
            <div className="chart">
              <p>Consultations</p>
              <div className="chart-line">
                {/* Placeholder for chart line */}
                <div className="line"></div>
              </div>
              <div className="months">
                Jan Fév Mar Avr Mai Juin Juil Aou Sep Oct
              </div>
            </div>
          </section>

          <section className="box">
            <h3>Statistiques</h3>
            <div className="content-stat">
              <div>
                <p>Articles santé</p>
                <span>Publiés: 12</span> • <span>Brouillon: 2</span>
              </div>
              <div>
                <p>Vidéos santé</p>
                <span>Publiés: 8</span> • <span>Brouillon: 1</span>
              </div>
            </div>
          </section>

          <section className="box">
            <h3>Gestion des contenus</h3>
            <div className="content-img">
              <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Doctors" />
              <p>Articles publiés • 12 d</p>
            </div>
          </section>

          <section className="box">
            <h3>Gestion des partenariats</h3>
            <ul className="links">
              <li>Pharmacies</li>
              <li>Laboratoires</li>
            </ul>
          </section>

          <section className="box">
            <h3>Modération</h3>
            <p>🔒 Signalements à modération</p>
          </section>

          <section className="box">
            <h3>Gontorte</h3>
            <p>🖊️ Signalements au moderation</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
