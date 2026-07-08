import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WelcomePopup from './components/WelcomePopup';
import Home from './pages/Home';
import Units from './pages/Units';
import UnitDetails from './pages/UnitDetails';
import TopicDetails from './pages/TopicDetails';
import RecitationRules from './pages/RecitationRules';

function App() {
  return (
    <>
      <Header />
      <WelcomePopup />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/units" element={<Units />} />
          <Route path="/units/:unitId" element={<UnitDetails />} />
          <Route path="/units/:unitId/topics/:topicId" element={<TopicDetails />} />
          <Route path="/recitation-rules" element={<RecitationRules />} />
        </Routes>
      </main>
      
      {/* Footer */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '24px', 
        borderTop: '1px solid var(--glass-border)',
        marginTop: 'auto',
        color: 'var(--text-muted)'
      }}>
        <p>جميع الحقوق محفوظة &copy; {new Date().getFullYear()} - دورة عبق المعاني المتكاملة</p>
      </footer>
    </>
  );
}

export default App;
