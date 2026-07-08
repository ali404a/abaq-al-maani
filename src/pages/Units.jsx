import React from 'react';
import { Link } from 'react-router-dom';
import { Layers } from 'lucide-react';

const Units = () => {
  const units = [
    { id: 1, title: 'الوحدة الأولى', desc: 'مقدمة في العقيدة والأخلاق' },
    { id: 2, title: 'الوحدة الثانية', desc: 'السيرة النبوية والتاريخ' },
    { id: 3, title: 'الوحدة الثالثة', desc: 'العبادات والأحكام' },
    { id: 4, title: 'الوحدة الرابعة', desc: 'القرآن وعلومه' },
    { id: 5, title: 'الوحدة الخامسة', desc: 'قضايا معاصرة في التربية الإسلامية' },
  ];

  return (
    <div className="container animate-fade-up">
      <h1 className="text-gradient" style={{ textAlign: 'center', marginBottom: '40px' }}>
        وحدات المنهج
      </h1>
      <div className="grid-cards">
        {units.map((unit, index) => (
          <Link 
            to={`/units/${unit.id}`} 
            key={unit.id} 
            className={`glass-card delay-${(index % 3 + 1) * 100}`}
            style={{ textDecoration: 'none' }}
          >
            <div style={{ color: 'var(--accent-cyan)' }}>
              <Layers size={32} />
            </div>
            <h3>{unit.title}</h3>
            <p>{unit.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Units;
