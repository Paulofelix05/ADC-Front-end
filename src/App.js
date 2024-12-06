import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Componentes
import Header from './Componentes/layout/Header/Header.js';
import Footer from './Componentes/layout/Footer/Footer';
import HeroSection from './Componentes/layout/HeroSection/HeroSection';
import ServiceSection from './Componentes/layout/services/ServiceSection';
import SupportSection from './Componentes/layout/support/SupportSection';
import WhyADCSection from './Componentes/layout/WhyADC/WhyADCSection';

// Páginas
import About from './pages/About/About.js';
import Solution from './pages/Solution/Solution.js';
import Support from './pages/Support/Support.js';
import Sign from './pages/Sign/Sign.js';
import AccountType from './pages/Sign/AccountType.js'; // Corrigido o nome aqui

import './App.css';
import Login from './pages/Sign/Login.js';

// Pagina pos cadastro


function App() {
  // Obtém a localização atual da URL
  const location = useLocation();
  const currentPath = location.pathname;

  // Verifica se está nas páginas de "criar conta" ou "tipo de conta"
  const isSignUpPage = currentPath === '/criar-conta';
  const isAccountTypePage = currentPath === '/account-type';
  const isLoginPage = currentPath === '/login';

  const shouldRenderHeaderFooter = !(isSignUpPage || isAccountTypePage || isLoginPage);

  return (
    <div className="App">
      {/* Renderiza Header e Footer apenas se não estiver nas páginas específicas */}
      {shouldRenderHeaderFooter && <Header />}

      {/* Definição das rotas */}
      <Routes>
        {/* Página Inicial */}
        <Route
          path="/"
          element={
            <div>
              <HeroSection />
              <ServiceSection />
              <SupportSection />
              <WhyADCSection />
            </div>
          }
        />

        {/* Páginas */}
        <Route path="/sobre-nos" element={<About />} />
        <Route path="/servicos" element={<Solution />} />
        <Route path="/apoio-vitima" element={<Support />} />
        <Route path="/criar-conta" element={<Sign />} />
        <Route path="/account-type" element={<AccountType />} /> 
        <Route path="/login" element={<Login/>} /> 
      </Routes>

      {/* Renderiza o Footer apenas se não estiver nas páginas específicas */}
      {shouldRenderHeaderFooter && <Footer />}
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}






export default AppWrapper;
