// src/CentreSantePage.js
import React from 'react';
import './App.css';

const CentreSantePage = () => {
  const articles = [
    {
      icon: '🩸',
      title: "Diabète : symptômes et prévention",
      desc: "Comprendre les signes du diabète et comment l’éviter."
    },
    {
      icon: '🦟',
      title: "Lutter contre le paludisme",
      desc: "Méthodes de prévention et traitement efficaces."
    },
    {
      icon: '🕒',
      title: "Comprendre l’hypertension",
      desc: "Identifier les causes et les bons réflexes."
    },
    {
      icon: '🧠',
      title: "Santé mentale",
      desc: "Prendre soin de son bien-être psychologique."
    }
  ];

  const forum = [
    { question: "Quels sont les signes d’un AVC ?", user: "Patient", responses: 3 },
    { question: "Quand consulter pour de la fatigue persistante ?", user: "Patient", responses: 2 },
    { question: "Quelles sont les causes courantes de maux de ventre ?", user: "Patient", responses: 6 },
    { question: "Comment réduire la douleur articulaire ?", user: "Patient", responses: 2 },
    { question: "Quand consulter pour une sinusite ?", user: "Patient", responses: 2 },
  ];

  return (
    <div className="centre-sante-container">
      <div className="centre-sante-header">
        <h2>Centre de santé communautaire</h2>
        <input type="text" className="centre-sante-search" placeholder="Rechercher... 🔍" />
      </div>

      <div className="centre-sante-tabs">
        <span className="active">Articles médicaux</span>
        <span>Forum santé</span>
        <span>Vidéos de prévention</span>
        <span>Conseils nutritionnels</span>
      </div>

      <div className="centre-sante-articles">
        {articles.map((art, index) => (
          <div className="sante-article-card" key={index}>
            <div className="article-icon">{art.icon}</div>
            <h4>{art.title}</h4>
            <p>{art.desc}</p>
          </div>
        ))}
      </div>

      <div className="centre-sante-bottom">
        <div className="sante-forum">
          <h3>Forum santé</h3>
          {forum.map((f, i) => (
            <div key={i} className="forum-question">
              <p>{f.question}</p>
              <small>{f.user} • {f.responses} réponses</small>
            </div>
          ))}
        </div>

        <div className="sante-categories">
          <div className="sante-block">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ginger_root.jpg/800px-Ginger_root.jpg"
              alt="gingembre"
              className="sante-img"
            />
            <h4>Les bienfaits du gingembre</h4>
            <p>Le gingembre est connu pour ses vertus anti-inflammatoires.</p>
          </div>

          <div className="sante-block">
            <h4>Santé mentale</h4>
            <ul>
              <li>Gérer le stress quotidien</li>
              <li>Reconnaître les signes de dépression</li>
              <li>Améliorer le sommeil naturellement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentreSantePage;
