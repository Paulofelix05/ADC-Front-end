import React from "react";
import { Link } from "react-router-dom";
import "./Header1.css";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
      </div>
      <div className="nav-wrapper">
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Início</Link>
          <Link to="/sobre-nos" className="nav-link">Sobre nós</Link>
          <Link to="/servicos" className="nav-link">Serviços</Link>
          <Link to="/apoio-vitima" className="nav-link">Apoio à Vítima</Link>
        </nav>
      </div>
      <div className="button-group">

        <Link to="/criar-conta" className="sign-link">
          <button className="btn create-acount-btn" aria-label='Criar conta'>Criar Conta</button>
        </Link>

        <Link to="/login" className="login-link">
        <button className="btn enter-btn" aria-label='Entrar na conta'>Entrar</button>
        </Link>
      </div>

    </header>
  );
}

export default Header;

