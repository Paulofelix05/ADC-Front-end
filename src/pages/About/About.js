import React from "react";
import Header from '../../Componentes/layout/Header/Header';
import Footer from '../../Componentes/layout/Footer/Footer';
import "./About.css";
import iasmym from '../../assets/Imagens/iasmym.png';
import nicole from '../../assets/Imagens/nicole.png';
import maria from '../../assets/Imagens/maria.png';
import gabriel from '../../assets/Imagens/gabriel.png';
import cesar from '../../assets/Imagens/cesar.png';
import paulo from '../../assets/Imagens/paulo.png';
import fernanda from '../../assets/Imagens/fernanda.png';


function About() {
  const team = [
    { name: "Nicole Santos", description: "Product Owner e Back-end", image: nicole, linkedin: "https://www.linkedin.com/in/nicolesantosdejesus-/", github: "https://github.com/NICOLESANTXS?tab=repositories" },
    { name: "Davi Muniz", description: "Scrum Master e Back-end", image: "https://avatars.githubusercontent.com/u/178431513?v=4", linkedin: "https://www.linkedin.com/in/davi-muniz-d45/", github: "https://github.com/davimunizDEV" },
    { name: "Maria Cipriano", description: "Designer e Financial Analyst", image: maria, linkedin: "https://www.linkedin.com/in/maria-ciprianno/", github: "https://github.com/LysCiprianno" },
    { name: "Gabriel Pereira", description: "Back-end.", image: gabriel, linkedin: "https://www.linkedin.com/in/gabrielpdanjos/", github: "https://github.com/GabrielPanjos" },
    { name: "Paulo Vinicius", description: "Front-end", image: paulo, linkedin: "https://www.linkedin.com/in/paulo-vinicius-felix-abb77b332/", github: "#" },
    { name: "César Oliveira", description: "Front-end", image: cesar, linkedin: "https://www.linkedin.com/in/cesaroliveirasoz/", github: "https://github.com/cesarssouz" },
    { name: "Fernanda Condo", description: "Data Base", image: fernanda, linkedin: "https://www.linkedin.com/in/fernandacondo/", github: "https://github.com/nanda662" },
    { name: "Iasmym Melo", description: "Full-stack e Social Media", image: iasmym, linkedin: "https://www.linkedin.com/in/iasmymmelo/", github: "https://github.com/Iasmelo" },
  ];

  return (
    <div className="about-container">
      <h1 className="about-title">Conheça Nossa Equipe</h1>
      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-image">
              <img
                src={member.image || "https://static.vecteezy.com/system/resources/previews/000/701/690/original/abstract-polygonal-banner-background-vector.jpg"}
                alt={member.name}
              />
            </div>
            <h2 className="team-name">{member.name}</h2>
            <p className="team-description">{member.description}</p>
            <div className="team-links">
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={member.github} target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;

