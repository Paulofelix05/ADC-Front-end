import React from 'react';
import ServiceItem from './ServiceItem';
import './ServiceSection.css';

const services = [
  {
    title: "Assessoria Técnica",
    imageUrl: "https://img.freepik.com/fotos-gratis/homem-tiro-medio-usando-oculos-vr_23-2149126949.jpg"
  },
  {
    title: "Assessoria Psicológica",
    imageUrl: "https://img.freepik.com/fotos-gratis/conceito-de-colagem-de-avatar-metaverso_52683-96427.jpg"
  },
  {
    title: "Conteúdo Educativo",
    imageUrl: "https://img.freepik.com/fotos-gratis/conceito-de-colagem-de-numerologia_23-2150061749.jpg"
  }
];

function ServiceSection() {
  return (
    <section className="service-section">
      <h2>Nossos serviços</h2>
      <div className="service-content">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <ServiceItem 
              imageUrl={service.imageUrl} 
              title={service.title} 
            />
            <div className="service-texts">
              <h3>{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;