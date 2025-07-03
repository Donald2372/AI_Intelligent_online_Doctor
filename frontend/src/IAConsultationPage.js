// src/IAConsultationPage.js
import React from 'react';
import './App.css';

const IAConsultationPage = () => {
  return (
    <div className="ia-consultation-container">
      <div className="ia-left">
        <h2>Consultation IA</h2>
        <p>Notre assistant IA vous pose des questions et analyse vos symptômes.</p>

        <div className="ia-options">
          <div className="option">
            <span role="img" aria-label="camera">📷</span>
            <p>Upload photo</p>
          </div>
          <div className="option">
            <span role="img" aria-label="microphone">🎤</span>
            <p>Decrire audio</p>
          </div>
          <div className="option">
            <span role="img" aria-label="chart">📊</span>
            <p>3 pathologies possibles</p>
          </div>
        </div>

        <button className="btn-green">Prendre RDV avec un médecin</button>
      </div>

      <div className="ia-right">
        <div className="chat-header">
          <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="IA Chat" className="avatar" />
          <strong>IA Chat</strong>
          <span className="close">&times;</span>
        </div>

        <div className="chat-box">
          <div className="bot-msg">Bonjour Patrice, je suis là pour vous aider avec vos questions medicales.</div>
          <div className="bot-msg highlight">Pour commencer, pouvez-vous me decrire vos symptômes?</div>
          <div className="user-img-msg">
            <img src="https://images.unsplash.com/photo-1606220838316-0d7f3c7f98af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Symptôme" />
            <div className="user-msg">J'ai mal à la tête et j'ai de la fièvre</div>
          </div>
          <div className="bot-msg">Analyse de vos symptômes...</div>
          <div className="results">
            <p><strong>3 pathologies possibles</strong></p>
            <p>✓ Grippe <strong>85%</strong><br/>
            ✓ Migraine <strong>60%</strong><br/>
            ✓ COVID-19 <strong>48%</strong></p>
          </div>
          <div className="bot-msg advise">Je vous conseille de rester hydraté, de prendre un antipyrétique et de vous soler.</div>
        </div>

        <div className="chat-footer">
          <a href="#">Conseils immédiats</a>
          <a href="#">FAQ</a>
          <a href="#">Conditions générales</a>
        </div>
      </div>
    </div>
  );
};

export default IAConsultationPage;
