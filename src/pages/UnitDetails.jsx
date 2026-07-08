import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, ChevronLeft } from 'lucide-react';

const UnitDetails = () => {
  const { unitId } = useParams();

  const topics = [
    { id: 1, title: 'الموضوع الأول' },
    { id: 2, title: 'الموضوع الثاني' },
    { id: 3, title: 'الموضوع الثالث' },
    { id: 4, title: 'الموضوع الرابع' },
    { id: 5, title: 'الموضوع الخامس' },
  ];

  return (
    <div className="container animate-fade-up">
      <div style={{ marginBottom: '32px' }}>
        <Link to="/units" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ChevronLeft size={20} />
          العودة للوحدات
        </Link>
      </div>
      
      <h1 className="text-gradient" style={{ marginBottom: '16px' }}>
        مواضيع الوحدة {unitId}
      </h1>
      <p style={{ marginBottom: '32px' }}>اختر الموضوع لعرض المحاضرات، الامتحانات، والملازم الخاصة به.</p>

      <div className="topic-list">
        {topics.map((topic, index) => (
          <Link 
            to={`/units/${unitId}/topics/${topic.id}`} 
            key={topic.id} 
            className={`topic-item delay-${(index % 3 + 1) * 100}`}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ 
                background: 'rgba(38, 71, 234, 0.15)', 
                padding: '12px', 
                borderRadius: '8px',
                color: 'var(--accent-main)'
              }}>
                <BookOpen size={24} />
              </div>
              <h3>{topic.title}</h3>
            </div>
            <ChevronLeft size={24} style={{ color: 'var(--text-muted)' }} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UnitDetails;
