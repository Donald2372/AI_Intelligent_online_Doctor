// src/PatientProfilPage.js
import React from 'react';
import './App.css';

const PatientProfilPage = () => {
  const patient = {
    nom: "Jean Koffi",
    adresse: "56 Rue des Accaccias, 21000 Douala",
    langue: "Français",
    mutuelle: "Compcare",
    dateNaissance: "25/09/1982",
    sexe: "Homme",
    telephone: "+237 61234567",
    poids: "81 kg",
    taille: "178 cm",
    groupeSanguin: "A+",
    antecedents: "Asthme",
    documents: ["Radiographie du thorax.pdf"]
  };

  return (
    <div className="profil-patient-container">
      <h2>Profil patient</h2>
      <p className="profil-path">Accueil / Profil patient</p>

      <div className="profil-card profil-identite">
        <div className="profil-row">
          <img
            src="https://randomuser.me/api/portraits/men/40.jpg"
            alt="Portrait patient"
            className="profil-avatar"
          />
          <div className="profil-info">
            <h3>{patient.nom}</h3>
            <p>{patient.adresse}</p>
            <p>Langue : {patient.langue}</p>
            <p>Mutuelle : <strong>{patient.mutuelle}</strong></p>
          </div>
          <button className="profil-btn">Mettre à jour</button>
        </div>
      </div>

      <div className="profil-card">
        <div className="profil-header">Informations personnelles <span className="edit-link">Editer</span></div>
        <div className="profil-info-grid">
          <p><strong>Date de naissance :</strong> {patient.dateNaissance}</p>
          <p><strong>Sexe :</strong> {patient.sexe}</p>
          <p><strong>Téléphone :</strong> {patient.telephone}</p>
          <p><strong>Langue :</strong> {patient.langue}</p>
        </div>
      </div>

      <div className="profil-card">
        <div className="profil-header">Données médicales <span className="edit-link">Editer</span></div>
        <div className="profil-info-grid">
          <p><strong>Poids :</strong> {patient.poids}</p>
          <p><strong>Groupe sanguin :</strong> {patient.groupeSanguin}</p>
          <p><strong>Taille :</strong> {patient.taille}</p>
          <p><strong>Antécédents médicaux :</strong> {patient.antecedents}</p>
        </div>
      </div>

      <div className="profil-card">
        <div className="profil-header">Documents</div>
        <button className="profil-upload">⬆️ Ajouter un document</button>
        <ul className="profil-docs">
          {patient.documents.map((doc, idx) => (
            <li key={idx}>📄 {doc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientProfilPage;
