import React from 'react';
import { Book } from 'lucide-react';

const RecitationRules = () => {
  return (
    <div className="container animate-fade-up">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'inline-block', background: 'rgba(100, 255, 218, 0.1)', padding: '16px', borderRadius: '50%', color: 'var(--accent-cyan)', marginBottom: '16px' }}>
          <Book size={48} />
        </div>
        <h1 className="text-gradient">أحكام التلاوة والتجويد</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto' }}>
          قسم مخصص لتعلم أحكام التلاوة والتجويد خطوة بخطوة مع الأمثلة التطبيقية.
        </p>
      </div>

      <div className="grid-cards">
        <div className="glass-card delay-100">
          <h3>أحكام النون الساكنة والتنوين</h3>
          <p>شرح مبسط لأحكام الإظهار، الإدغام، الإقلاب، والإخفاء مع الأمثلة.</p>
        </div>
        <div className="glass-card delay-200">
          <h3>أحكام الميم الساكنة</h3>
          <p>تفصيل لأحكام الإخفاء الشفوي، الإدغام المتماثلين، والإظهار الشفوي.</p>
        </div>
        <div className="glass-card delay-300">
          <h3>أحكام المدود</h3>
          <p>تعرف على المد الطبيعي، المد المتصل والمنفصل، والمد العارض للسكون.</p>
        </div>
        <div className="glass-card delay-100">
          <h3>مخارج الحروف</h3>
          <p>شرح بالصور للمخارج الرئيسية والفرعية للحروف العربية.</p>
        </div>
      </div>
    </div>
  );
};

export default RecitationRules;
