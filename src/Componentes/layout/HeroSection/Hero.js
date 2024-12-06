import React from 'react';

const Hero = () => (
  <section style={{
    background: 'linear-gradient(90deg, #4b6cb7, #182848)',
    color: 'white',
    textAlign: 'center',
    padding: '2rem 1rem',
  }}>
    <h2>Proteja-se no Mundo Digital</h2>
    <p>Oferecemos suporte completo para vítimas de ciberataques e recursos para prevenir futuros incidentes.</p>
    <button style={{
      padding: '0.5rem 1rem',
      marginTop: '1rem',
      backgroundColor: '#ffcc00',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    }}>Cadastre-se Agora</button>
  </section>
);

export default Hero;
