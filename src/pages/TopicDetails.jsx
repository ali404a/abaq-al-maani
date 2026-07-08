import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, PlayCircle, FileText, ClipboardList, PenTool } from 'lucide-react';

const TopicDetails = () => {
  const { unitId, topicId } = useParams();

  return (
    <div className="container animate-fade-up">
      <div style={{ marginBottom: '32px' }}>
        <Link to={`/units/${unitId}`} style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ChevronLeft size={20} />
          العودة للمواضيع
        </Link>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <div style={{ background: 'var(--accent-cyan)', padding: '8px', borderRadius: '8px', color: 'var(--primary-blue)' }}>
          <PlayCircle size={24} />
        </div>
        <h1 className="text-gradient" style={{ margin: 0 }}>
          الموضوع {topicId} - الوحدة {unitId}
        </h1>
      </div>
      
      <p style={{ marginBottom: '32px' }}>مرحباً بك في هذا الموضوع، شاهد المحاضرة المرئية أدناه ثم قم بالاطلاع على المرفقات.</p>

      {/* Video Section */}
      <div className="video-container animate-scale-in delay-100">
        {/* Placeholder for YouTube Embed */}
        <iframe 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" 
          title="محاضرة الموضوع" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      {/* Resources Section */}
      <h2 style={{ marginTop: '48px', marginBottom: '24px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '16px' }}>
        ملحقات الموضوع
      </h2>
      
      <div className="resource-list animate-fade-up delay-200">
        <a href="#" className="resource-item">
          <ClipboardList className="resource-icon" size={28} />
          <div>
            <h3 style={{ margin: 0, fontSize: '1.2rem' }}>امتحان الموضوع</h3>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>اختبر معلوماتك بعد مشاهدة المحاضرة</p>
          </div>
        </a>
        
        <a href="#" className="resource-item">
          <FileText className="resource-icon" size={28} />
          <div>
            <h3 style={{ margin: 0, fontSize: '1.2rem' }}>ملزمة الموضوع</h3>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>ملف PDF يحتوي على شرح مفصل للمادة</p>
          </div>
        </a>
        
        <a href="#" className="resource-item">
          <PenTool className="resource-icon" size={28} />
          <div>
            <h3 style={{ margin: 0, fontSize: '1.2rem' }}>المخطط الذهني</h3>
            <p style={{ margin: 0, fontSize: '0.9rem' }}>خلاصة الموضوع في مخطط مبسط لتسهيل المراجعة</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default TopicDetails;
