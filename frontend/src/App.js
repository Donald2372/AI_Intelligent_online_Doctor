import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConsultationPage from './ConsultationPage';
import SupportPage from './SupportPage';
import IAConsultationPage from './IAConsultationPage';
import Navbar from './Navbar';
import PatientDashboard from './PatientDashboard';
import AdminDashboard from './AdminDashboard';
import DoctorDashboard from './DoctorDashboard';
import RendezVousPage from './RendezVousPage';
import AdminOverviewPage from './AdminOverviewPage';
import SuiviIAPage from './SuiviIAPage';
import PatientProfilPage from './PatientProfilPage';
import CentreSantePage from './CentreSantePage';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ConsultationPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/dashboard" element={<PatientDashboard />} />
        <Route path="/ia" element={<IAConsultationPage />} />
         <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/Doctor" element={<DoctorDashboard />} />
          <Route path="/rendezvous" element={<RendezVousPage />} />
          <Route path="/admin-overview" element={<AdminOverviewPage />} />
          <Route path="/suivi-ia" element={<SuiviIAPage />} />
          <Route path="/profil-patient" element={<PatientProfilPage />} />
          <Route path="/centre-sante" element={<CentreSantePage />} />
      </Routes>

    </Router>
  );
}

export default App;
