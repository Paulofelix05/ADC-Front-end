import Header from '../../Componentes/layout/Header/Header';
import Footer from '../../Componentes/layout/Footer/Footer';
import React, { useState } from 'react';
import servicos from '../../assets/Imagens/imgServiços.png';
import solucoes from '../../assets/Imagens/imgSoluções.png';
import suporte from '../../assets/Imagens/imgSuporte.png';
import './Solution.css';

function Solution() {
  const servicesData = [
    {
      id: 1,
      title: 'Soluções de Recuperação Técnica',
      image: solucoes,
    },
    {
      id: 2,
      title: 'Suporte de Segurança de Dispositivos',
      image: suporte,
    },
    {
      id: 3,
      title: 'Serviços de Referência Técnica',
      image: servicos,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Maria Lurdes',
      image: 'https://media.istockphoto.com/id/1316714144/pt/foto/portrait-of-a-happy-senior-woman-applying-skin-cream-to-her-face-at-home.jpg?s=170667a&w=0&k=20&c=ABNEj06nvG4a9y1xvjzippUNDgSdcyZCTngb5cOoNeE=',
      feedback:
        'O suporte deste site é incrível! Estava enfrentando problemas graves com a segurança dos meus dados, e a equipe respondeu rapidamente, solucionando tudo de forma eficiente. Recomendo para qualquer pessoa que precise de assistência em segurança digital.',
      rating: 5,
    },
    {
      id: 2,
      name: 'João Silva',
      image: 'https://img.freepik.com/fotos-premium/um-feliz-homem-negro-africano-sorrindo-rosto-de-retrato-olhando-para-a-camera_804687-833.jpg',
      feedback:
        'Achei o suporte técnico extremamente eficaz. Resolveram meu problema em questão de minutos! Agradeço muito pela atenção e agilidade.',
      rating: 4,
    },
    {
      id: 3,
      name: 'Ana Clara',
      image: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?cs=srgb&dl=pexels-daniel-xavier-1102341.jpg&fm=jpg',
      feedback:
        'Excelente serviço! A equipe foi muito atenciosa e me ajudou a proteger meus dispositivos contra ataques. Muito satisfeito com o atendimento.',
      rating: 5,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    } else {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="services-container">
      {/* Seção de serviços */}
      <div className="services-header">
        <h1 className="services-main-title">Capacitando a sua Segurança Cibernética</h1>
        <div className="services-buttons">
          <button className="primary-button">Obter ajuda</button>
          <button className="secondary-button">Saiba mais</button>
        </div>
        <p className="services-subtitle">
          Explore nossos serviços abrangentes de segurança cibernética.
        </p>
      </div>

      {/* Cartões de serviços */}
      <div className="services-cards">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-content imagens-card">
              <h2 className="service-title">{service.title}</h2>
              <button
                className="service-button"
                onClick={() => alert(`Mais informações sobre ${service.title}`)}
              >
                Descubra como
              </button>
            </div>
          </div>
        ))}
      </div>

{/* Seção de depoimentos */}
<div className="testimonials-container">
  {/* Linha decorativa */}
  <div className="testimonials-line"></div>

  {/* Título de depoimentos */}
  <h2 className="testimonials-title">Quem conhece, confia</h2>

  {/* Container para setas e card */}
  <div className="testimonials-content">
    {/* Seta de navegação esquerda */}
    <div
      className="testimonials-arrow testimonials-arrow-left"
      onClick={() => handleArrowClick('left')}
    >
      <span className="arrow-symbol">{'<'}</span>
    </div>

    {/* Depoimento principal */}
    <div className="testimonial-card">
      <p className="testimonial-feedback">
        {testimonials[currentTestimonial].feedback}
      </p>
      <div className="testimonial-author">
        <img
          src={testimonials[currentTestimonial].image}
          alt={testimonials[currentTestimonial].name}
          className="testimonial-image"
        />
        <p className="testimonial-name">
          {testimonials[currentTestimonial].name}
        </p>
      </div>
      <div className="testimonial-rating">
        {'⭐'.repeat(testimonials[currentTestimonial].rating)}
      </div>
    </div>

    {/* Seta de navegação direita */}
    <div
      className="testimonials-arrow testimonials-arrow-right"
      onClick={() => handleArrowClick('right')}
    >
      <span className="arrow-symbol">{'>'}</span>
    </div>
  </div>
  </div>
  </div>

  );
}

export default Solution;

