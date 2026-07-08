import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Layers, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <div className="container animate-fade-up">
      <div style={{
        textAlign: 'center',
        padding: '60px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(38, 71, 234, 0.15)',
          color: 'var(--accent-main)',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '0.9rem',
          fontWeight: '500'
        }}>
          <Sparkles size={16} />
          <span>مرحباً بك في رحلة العلم والإيمان</span>
        </div>
        
        <h1 style={{ fontSize: '3.5rem', marginBottom: '16px' }}>
          دورة <span className="text-gradient">عبق المعاني</span> المتكاملة
        </h1>
        
        <p style={{ 
          fontSize: '1.2rem', 
          maxWidth: '600px', 
          margin: '0 auto',
          color: 'var(--text-muted)'
        }}>
          منصة تعليمية متكاملة لتعلم أحكام التلاوة والتربية الإسلامية بأسلوب تفاعلي وحديث. 
          استكشف المحاضرات، الامتحانات، والملازم بطريقة سلسة وممتعة.
        </p>

        <div style={{ display: 'flex', gap: '16px', marginTop: '32px' }}>
          <Link to="/units" className="glass-button primary">
            <Layers size={20} />
            تصفح الوحدات
          </Link>
          <Link to="/recitation-rules" className="glass-button">
            <Book size={20} />
            أحكام التلاوة
          </Link>
        </div>
      </div>

      <div className="grid-cards" style={{ marginTop: '40px' }}>
        <div className="glass-card animate-fade-up delay-100">
          <div style={{ color: 'var(--accent-main)', marginBottom: '16px' }}>
            <Book size={32} />
          </div>
          <h3>محتوى شامل</h3>
          <p>تغطية كاملة للمنهج من خلال 5 وحدات متكاملة مع مواضيعها التفصيلية.</p>
        </div>
        <div className="glass-card animate-fade-up delay-200">
          <div style={{ color: 'var(--accent-main)', marginBottom: '16px' }}>
            <Layers size={32} />
          </div>
          <h3>تنظيم هيكلي</h3>
          <p>كل موضوع يحتوي على محاضرات مرئية، امتحانات، ملازم ومخططات.</p>
        </div>
        <div className="glass-card animate-fade-up delay-300">
          <div style={{ color: 'var(--accent-main)', marginBottom: '16px' }}>
            <Sparkles size={32} />
          </div>
          <h3>تعلم تفاعلي</h3>
          <p>واجهة زجاجية حركية تضمن تجربة مستخدم فريدة وممتعة في التعلم.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
