import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="header animate-fade-down">
      <div className="container header-content">
        <Link to="/" className="logo-container">
          <div style={{
            background: 'var(--accent-main)',
            padding: '8px',
            borderRadius: '12px',
            color: 'var(--white)'
          }}>
            <BookOpen size={24} />
          </div>
          <span className="logo-text text-gradient">عبق المعاني</span>
        </Link>
        <nav className="nav-links">
          <Link to="/" className={`nav-link ${isActive('/')}`}>الرئيسية</Link>
          <Link to="/units" className={`nav-link ${isActive('/units')}`}>الوحدات</Link>
          <Link to="/recitation-rules" className={`nav-link ${isActive('/recitation-rules')}`}>أحكام التلاوة</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
