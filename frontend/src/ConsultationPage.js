import React from 'react';
import './App.css';
import doctor from './assets/doctor.jpg';
import awa from './assets/awa.jpg';
import jean from './assets/jean.jpg';
import martine from './assets/martine.jpg';

const ConsultationPage = () => {
  return (
    <div className="container">
      <img src={doctor} alt="Doctor" className="doctor-img"/>

      <header className="header">
        <h1>Consultation Médicale en Ligne</h1>
        <p>Consultez un médecin en ligne depuis chez vous.</p>
        <button className="btn-primary">Demarrer une consultation</button>
      </header>

      <nav className="auth-nav">
        <button className="btn-auth">Se connecter</button>
        <button className="btn-auth">S'inscrire</button>
      </nav>

      <div className="info-card">
        <input type="search" placeholder="Rechercher des symptômes" className="search-input"/>

        <section className="ia-info">
          <h2>IA Médicale</h2>
          <p>Notre IA avancée aide à évaluer vos symptômes</p>
          <div className="stats">
            <div>
              <strong>1230+</strong>
              <span>Consultations</span>
            </div>
            <div>
              <strong>50+</strong>
              <span>Décisions fiables</span>
            </div>
            <div>
              <strong>4,8/5</strong>
              <span>Rating</span>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="testimonial">
            <img src={awa} alt="Awa"/>
            <div>
              <q>Un service très pratique et rapide.</q>
              <span>Awa</span>
            </div>
          </div>
          <div className="testimonial">
            <img src={jean} alt="Jean"/>
            <div>
              <q>Le médecin était compétent et à l’écoute.</q>
              <span>Jean</span>
            </div>
          </div>
          <div className="testimonial">
            <img src={martine} alt="Martine"/>
            <div>
              <q>Le médecin était compétent et à l’écoute.</q>
              <span>Martine</span>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <a href="#">Contact</a>
        <a href="#">Mentions légales</a>
        <a href="#">CGU</a>
      </footer>
    </div>
  );
};

export default ConsultationPage;
