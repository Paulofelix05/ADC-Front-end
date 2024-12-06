import React from 'react';

const services = [
  { title: 'Recuperação Técnica', description: 'Identificação e mitigação de danos causados por ataques digitais.' },
  { title: 'Encaminhamento Especializado', description: 'Conexão com advogados e psicólogos especializados.' },
  { title: 'Recursos Educativos', description: 'Acesso a conteúdo educacional e ferramentas de prevenção.' },
];

const Services = () => (
  <section id="services" style={{ padding: '2rem 1rem', background: '#f4f4f4' }}>
    <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Nossos Serviços</h3>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      flexWrap: 'wrap',
    }}>
      {services.map((service, index) => (
        <div key={index} style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '1rem',
          background: 'white',
          maxWidth: '300px',
          textAlign: 'center',
        }}>
          <h4>{service.title}</h4>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
