import React from 'react';
import WhyCard from './WhyCard';
import './WhyADCSection.css';

function WhyADCSection() {
  return (
    <section className="why-adc-section">
      <div className="title-container">
        <h2>POR QUE A ADC?</h2>
      </div>
      <div className="cards-container">
        <WhyCard
          className="why-card blue"
          title="Abordagem integrada"
          description="Suas contribuições nos ajudam a fornecer suporte e recursos essenciais de segurança cibernética às vítimas de ataques cibernéticos. Cada doação faz a diferença em nossa missão."
        />
        <div className="why-card-container">
          <WhyCard
            className="why-card white"
            title="Prevenção e suporte em momentos críticos"
            description="Em um mundo onde ataques cibernéticos podem afetar a vida pessoal e profissional, a presença de advogados e psicólogos ajuda a mitigar danos legais e psicológicos causados por crimes digitais, como fraudes, assédio virtual, ou vazamento de dados."
          />
        </div>
        <WhyCard
          className="why-card blue-alt"
          title="Confiança e segurança"
          description="Com uma equipe multidisciplinar, o ADC garante que os usuários se sintam protegidos e acolhidos, oferecendo soluções personalizadas para diferentes situações, seja para empresas ou indivíduos."
        />
      </div>
    </section>
  );
}

export default WhyADCSection;
