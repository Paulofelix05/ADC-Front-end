import React, { useState } from 'react';
import Header from '../../Componentes/layout/Header/Header';
import Footer from '../../Componentes/layout/Footer/Footer';
import './Support.css';
import imagem1 from '../../assets/Imagens/imagem1.jpg';
import imagem2 from '../../assets/Imagens/imagem2.jpg';
import imagem3 from '../../assets/Imagens/imagem3.jpg';
import imagem4 from '../../assets/Imagens/imagem4.jpg';
import imagem5 from '../../assets/Imagens/imagem5.jpg';

function Support() {
  // Dados dos cards
  const cardsData = [
    { id: 1, image: imagem1, description: 'Compreendendo a segurança cibernética: um guia para iniciantes' },
    { id: 2, image: imagem2, description: 'Como se proteger de ataques cibernéticos' },
    { id: 3, image: imagem3, description: 'A importância da educação em segurança cibernética' },
    { id: 4, image: imagem4, description: 'Estratégias para proteger informações confidenciais' },
    { id: 5, image: imagem5, description: 'Ferramentas essenciais para segurança cibernética' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Lógica para mover à esquerda
  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardsData.length - 3 : prevIndex - 1));
  };

  // Lógica para mover à direita
  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cardsData.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      {/* Seção Explore nossos recursos */}
      <section className="explore-resources-section">
        <h2 className="explore-resources-title">Explore nossos recursos</h2>
      </section>

      {/* Seção de Recursos */}
      <section className="resources-section">
        <h2 className="resources-subtitle">Insights sobre a segurança cibernética</h2>
        <div className="resources-container">
          {/* Seta esquerda */}
          <div className="resources-arrow resources-arrow-left" onClick={handleLeftClick}>
            {'<'}
          </div>

          {/* Exibição dos cards */}
          <div className="resources-cards">
            {cardsData.slice(currentIndex, currentIndex + 3).map((card) => (
              <div key={card.id} className="card">
                <img src={card.image} alt={`Recurso ${card.id}`} className="card-image" />
                <p className="card-description">{card.description}</p>
              </div>
            ))}
          </div>

          {/* Seta direita */}
          <div className="resources-arrow resources-arrow-right" onClick={handleRightClick}>
            {'>'}
          </div>
        </div>
      </section>

      {/* Seção de Interação */}
      <section className="interaction-section">
        <h1 className="interaction-title">Interaja!</h1>
        <form className="interaction-form">
          <input type="text" placeholder="Digite seu nome" className="form-input" />
          <input type="email" placeholder="Digite seu email" className="form-input" />
          <textarea placeholder="Envie sua mensagem" className="form-textarea"></textarea>
          <button type="submit" className="form-button">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default Support;
