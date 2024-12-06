import React from 'react';
import './SupportSection.css';
import { Link } from 'react-router-dom';

function SupportSection() {
  return (
    <section className="support-section">
      <h2>Apoie nosso serviço gratuito</h2>
      <div className="support-content">
        <div className="image-and-buttons">
          <a
            href="https://img.freepik.com/fotos-gratis/malware-invadindo-o-banco-de-dados-na-tela_482257-77676.jpg?t=st=1731551270~exp=1731554870~hmac=130aa4987a533f35bf9ec55afd01558e5233c3a1f4f20579af08ba134348e8e7&w=1060"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.freepik.com/fotos-gratis/malware-invadindo-o-banco-de-dados-na-tela_482257-77676.jpg?t=st=1731551270~exp=1731554870~hmac=130aa4987a533f35bf9ec55afd01558e5233c3a1f4f20579af08ba134348e8e7&w=1060"
              alt="Imagem de suporte"
              className="support-image"
            />
          </a>
          <div className="support-buttons">
            <button className="btn donate-btn">Doe Agora</button>
            
            <Link to="/criar-conta" className='sing-link'>
              <button className="btn learn-btn">Saiba mais</button>
            </Link>
          </div>
        </div>
        <div className="support-text">
          <p>
            Suas contribuições nos ajudam a fornecer suporte e recursos
            essenciais de segurança cibernética às vítimas de ataques
            cibernéticos. Cada doação faz a diferença em nossa missão.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SupportSection;


