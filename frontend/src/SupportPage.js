// src/SupportPage.js
import React from 'react';
import './App.css';

const SupportPage = () => {
  return (
    <div className="support-container">
      {/* LIVE CHAT SECTION */}
      <div className="live-chat">
        <div className="live-chat-text">
          <h2>Assistance</h2>
          <div className="chat-icon-title">
            <span className="chat-icon">💬</span>
            <strong>Live Chat</strong>
          </div>
          <p>Chat with one of our technical or medical advisors.</p>
          <button className="btn-green">Start Chat</button>
        </div>
        <div className="chat-agent-img">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Support Agent"
          />
        </div>
      </div>

      {/* SUPPORT OPTIONS GRID */}
      <div className="grid">
        <div className="card">
          <span className="icon">❓</span>
          <strong>FAQ</strong>
          <p>Find answers to common questions.</p>
          <button className="btn-white">Search in FAQ</button>
        </div>

        <div className="card">
          <span className="icon">📄</span>
          <strong>Submit a Ticket</strong>
          <p>Describe your problem and we will get back to you.</p>
          <button className="btn-white">Open Form</button>
        </div>

        <div className="card">
          <span className="icon">📞</span>
          <strong>Emergency Call</strong>
          <p>Contact emergency service directly if needed.</p>
          <button className="btn-white">Call Now</button>
        </div>

        <div className="card">
          <span className="icon">➕</span>
          <strong>Emergency Call</strong>
          <p>Reach out for urgent medical assistance anytime.</p>
          <button className="btn-white">Call Now</button>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
