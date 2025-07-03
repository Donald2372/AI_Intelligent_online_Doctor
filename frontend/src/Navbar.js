// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Consultation</Link>
      <Link to="/support">Assistance</Link>
      <Link to="/ia">Consultation IA</Link>
      <Link to="/dashboard">Mon espace</Link>
      <Link to="/admin">Admin</Link>
      <Link to ="/Doctor"> Espace Medecin</Link>
      <Link to="/rendezvous">Rendez-vous</Link>
      <li><Link to="/suivi-ia">Suivi IA</Link></li>

      <li><Link to="/admin-overview">Vue Admin</Link></li>
       <li><Link to="/profil-patient">Profil Patient</Link></li>
       <li><Link to="/centre-sante">Centre de santé</Link></li>

    </nav>
  );
};

export default Navbar;
