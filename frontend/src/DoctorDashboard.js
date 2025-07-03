// src/DoctorDashboard.js
import React from 'react';
import './App.css';

const DoctorDashboard = () => {
  return (
    <div className="doctor-dashboard">
      <aside className="sidebar">
        <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Dr. Eric Tiam" className="profile-pic" />
        <h2>Dr. Eric Tiam</h2>
        <ul className="sidebar-menu">
          <li className="active">Agenda</li>
          <li>Mes patients</li>
          <li>Consultations</li>
          <li>Mon profil</li>
        </ul>
        <div className="settings-icon">⚙️</div>
      </aside>

      <main className="doctor-main">
        <div className="top-bar">
          <h2>Agenda</h2>
          <div className="earnings">56 200 FCFA</div>
          <img className="avatar" src="https://randomuser.me/api/portraits/men/45.jpg" alt="Avatar" />
        </div>

        <div className="grid-dashboard">
          <div className="card">
            <h4>Agenda</h4>
            <div className="calendar">M T W T F S</div>
          </div>

          <div className="card">
            <h4>Mes patients</h4>
            <ul>
              <li><img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Auma" /> Auma</li>
              <li><img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Anne" /> Anne</li>
              <li><img src="https://randomuser.me/api/portraits/women/34.jpg" alt="Sophie" /> Sophie</li>
            </ul>
          </div>

          <div className="card">
            <h4>Consultations</h4>
            <p>18 avr. 2024 - Isabelle F.</p>
            <p>15 avr. 2024 - Joseph K.</p>
          </div>

          <div className="card">
            <h4>Éditeur d'ordonnance</h4>
            <img src="https://img.icons8.com/ios-filled/50/rx.png" alt="Prescription" width="40" />
          </div>

          <div className="card">
            <h4>Téléchargement résultats</h4>
            <img src="https://img.icons8.com/ios-filled/50/lab-items.png" alt="Lab" width="40" />
          </div>

          <div className="card">
            <h4>Outils d’aide au diagnostic</h4>
            <img src="https://img.icons8.com/ios-filled/50/heartbeat.png" alt="Diagnostic" width="40" />
          </div>

          <div className="card">
            <h4>Gains</h4>
            <img src="https://img.icons8.com/ios-filled/50/money-bag.png" alt="Earnings" width="40" />
          </div>

          <div className="card">
            <h4>Mon profil</h4>
            <img src="https://img.icons8.com/ios-filled/50/user.png" alt="Profile" width="40" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;
