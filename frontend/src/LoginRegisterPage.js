// src/LoginRegisterPage.js
import React, { useState } from 'react';
import './App.css';

const LoginRegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('patient');
  const [isHuman, setIsHuman] = useState(true);

  return (
    <div className="login-container">
      <h2>S'inscrire ou se connecter</h2>

      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="password-field">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span onClick={() => setShowPassword(!showPassword)}>SHOW</span>
      </div>

      <button className="main-btn">CONTINUER</button>

      <div className="or-separator">Ou connectez-vous avec</div>

      <button className="whatsapp-btn">🟢 Continuer avec WhatsApp</button>
      <button className="phone-btn">📞 Continuer avec téléphone</button>

      <p>Choisir votre rôle</p>
      <div className="role-select">
        <label><input type="radio" name="role" value="patient" checked={role === 'patient'} onChange={() => setRole('patient')} /> Patient</label>
        <label><input type="radio" name="role" value="medecin" checked={role === 'medecin'} onChange={() => setRole('medecin')} /> Médecin</label>
        <label><input type="radio" name="role" value="admin" checked={role === 'admin'} onChange={() => setRole('admin')} /> Admin</label>
      </div>

      <div className="captcha-box">
        <label><input type="checkbox" checked={isHuman} onChange={() => setIsHuman(!isHuman)} /> Je ne suis pas un robot</label>
        <span role="img" aria-label="fingerprint">🔵</span>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
