import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const InstagramIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

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
          <InstagramIcon size={48} color="var(--accent-main)" />
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
          <InstagramIcon size={20} />
          متابعة على إنستغرام
        </a>
      </div>
    </div>
  );
};

export default WelcomePopup;
