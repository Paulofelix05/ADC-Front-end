import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <section className="hero-section">
      <h1>Proteja seu mundo digital</h1>
      <div className="hero-buttons">
        <Link to="/criar-conta" className='sing-link'>
          <button className="hero-btn primary-btn">Ver mais</button>
        </Link>

        <button className="hero-btn secondary-btn">Obter ajuda</button>
      </div>
    </section>
  );
}

export default HeroSection;