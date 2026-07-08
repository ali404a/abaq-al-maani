import React, { useState, useEffect } from 'react';
import { X, Instagram } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only show on home page on load
    if (location.pathname === '/') {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [location.pathname]);

  if (!isOpen) return null;

  return (
    <div className="popup-overlay animate-fade-in">
      <div className="popup-content glass-panel animate-scale-in delay-100">
        <button onClick={() => setIsOpen(false)} className="close-btn">
          <X size={24} />
        </button>
        <div style={{ marginBottom: '24px' }}>
          <Instagram size={48} color="var(--accent-cyan)" />
        </div>
        <h2 style={{ color: 'var(--white)' }}>أهلاً بك في دورتنا!</h2>
        <p style={{ marginBottom: '24px', fontSize: '1.1rem' }}>
          أضفني ليصلك كل ما هو جديد ومفيد حول الدورة والتحديثات القادمة.
        </p>
        <a 
          href="https://instagram.com/your_account" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="glass-button primary"
          style={{ width: '100%' }}
        >
          <Instagram size={20} />
          متابعة على إنستغرام
        </a>
      </div>
    </div>
  );
};

export default WelcomePopup;
