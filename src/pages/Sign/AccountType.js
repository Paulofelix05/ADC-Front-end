import React, { useState } from 'react';
import './AcountType.css';
import { FaUserAlt, FaUserTie } from "react-icons/fa";
import { RiMentalHealthFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const AccountType = () => {
   const [step, setStep] = useState(1);
   const [accountType, setAccountType] = useState('');
   const [professionalType, setProfessionalType] = useState('');

   const navigate = useNavigate();

   const handleNormalAccount = () => {
      setAccountType('normal');
      setStep(2); // Avança para o formulário de conta pessoal
   };

   const handleProfessionalAccount = () => {
      setAccountType('professional');
      setStep(2); // Avança para a seleção de tipo profissional
   };

   const handleProfessionalSelection = (type) => {
      setProfessionalType(type);
      setStep(3); // Avança para o formulário de conta profissional
   };

   const handleGoBack = () => {
      navigate('/'); // Redireciona para a página inicial
   };

   const handleFinish = () => {
      setStep(4); // Finaliza o processo
   };

   const handleContinueAfterFinish = () => {
      setStep(5); // Nova tela após o cadastro concluído
   };

   const renderStepContent = () => {
      if (step === 1) {
         return (
            <div className="account-type-container">
               <h1>Qual tipo de conta você deseja?</h1>
               <div className="account-options">
                  <div
                     className="account-option"
                     onClick={handleNormalAccount}
                     role="button"
                     aria-label="Conta Pessoal"
                  >
                     <FaUserAlt size={100} />
                     <p>Conta Pessoal</p>
                  </div>
                  <div
                     className="account-option"
                     onClick={handleProfessionalAccount}
                     role="button"
                     aria-label="Conta Profissional"
                  >
                     <FaUserTie size={100} />
                     <p>Conta Profissional</p>
                  </div>
               </div>
               <button className="tela-inicial" onClick={handleGoBack}>
                  Voltar para a Tela Inicial
               </button>
            </div>
         );
      }

      if (step === 2 && accountType === 'normal') {
         return (
            <div className="container-escolha">
               <h1>Formulário de Conta Pessoal</h1>
               <form>
                  <div className="form-group">
                     <label>Localização</label>
                     <input type="text" placeholder="Sua localização" />
                  </div>
                  <div className="form-group">
                     <label>Descrição</label>
                     <textarea placeholder="Por que você está na nossa plataforma?"></textarea>
                  </div>
                  <button type="button" onClick={handleFinish} className="btn btn-primary">
                     Continuar
                  </button>
                  <button type="button" onClick={handleGoBack} className="btn btn-secondary">
                     Voltar
                  </button>
               </form>
            </div>
         );
      }

      if (step === 2 && accountType === 'professional') {
         return (
            <div className="account-type-container">
               <h1>Escolha o seu tipo profissional</h1>
               <div className="professional-options">
                  <div
                     className="professional-option"
                     onClick={() => handleProfessionalSelection('advogado')}
                     role="button"
                     aria-label="Advogado"
                  >
                     <FaUserTie size={100} />
                     <p>Advogado</p>
                  </div>
                  <div
                     className="professional-option"
                     onClick={() => handleProfessionalSelection('psicologo')}
                     role="button"
                     aria-label="Psicólogo"
                  >
                     <RiMentalHealthFill size={100} />
                     <p>Psicólogo</p>
                  </div>
               </div>
               <button type="button" onClick={handleGoBack} className="btn btn-secondary">
                  Voltar
               </button>
            </div>
         );
      }

      if (step === 3 && professionalType === 'advogado') {
         return (
            <div className="container-escolha">
               <h1>Formulário Advogado</h1>
               <form>
                  <div className="form-group">
                     <label>Endereço</label>
                     <input type="text" placeholder="Seu endereço" />
                  </div>
                  <div className="form-group">
                     <label>Especialização</label>
                     <input type="text" placeholder="Sua especialização" />
                  </div>
                  <div className="form-group">
                     <label>CIP</label>
                     <input type="text" placeholder="CIP do Advogado" />
                  </div>
                  <div className="form-group">
                     <label>Tarifa</label>
                     <input type="text" placeholder="Sua tarifa" />
                  </div>
                  <button type="button" onClick={handleFinish} className="btn btn-primary">
                     Continuar
                  </button>
                  <button type="button" onClick={handleGoBack} className="btn btn-secondary">
                     Voltar
                  </button>
               </form>
            </div>
         );
      }

      if (step === 3 && professionalType === 'psicologo') {
         return (
            <div className="container-escolha">
               <h1>Formulário Psicólogo</h1>
               <form>
                  <div className="form-group">
                     <label>Endereço</label>
                     <input type="text" placeholder="Seu endereço" />
                  </div>
                  <div className="form-group">
                     <label>Especialização</label>
                     <input type="text" placeholder="Sua especialização" />
                  </div>
                  <div className="form-group">
                     <label>Tarifa</label>
                     <input type="text" placeholder="Sua tarifa" />
                  </div>
                  <div className="form-group">
                     <label>CRP</label>
                     <input type="text" placeholder="CRP do Psicólogo" />
                  </div>
                  <button type="button" onClick={handleFinish} className="btn btn-primary">
                     Continuar
                  </button>
                  <button type="button" onClick={handleGoBack} className="btn btn-secondary">
                     Voltar
                  </button>
               </form>
            </div>
         );
      }

      if (step === 4) {
         return (
            <div className="final-layout">
               <h1>Cadastro Concluído!</h1>
               <p>Obrigado por se registrar na nossa plataforma.</p>
               <button onClick={handleContinueAfterFinish} className="btn btn-primary">
                  Continuar
               </button>
            </div>
         );
      }

      if (step === 5) {
         return (
            <div className="adc-extra-container">
               <header className="adc-header">
                  <h1 className="adc-logo">ADC</h1>
                  <nav className="adc-navigation">
                     <a href="#recuperacao">Recuperação Técnica</a>
                     <a href="#encaminhamento">Encaminhamento</a>
                     <a href="#recursos">Recursos</a>
                     <a href="#blog">Blog</a>
                     <a href="#planos">Planos</a>
                     <a href="#sobre-nos">Sobre Nós</a>
                  </nav>
               </header>

               <div className="adc-hero">
                  <h1>Proteja-se no Mundo Digital</h1>
                  <p>
                     Oferecemos suporte completo para vítimas de ciberataques e recursos
                     para prevenir futuros incidentes.
                  </p>
                  <div className="adc-hero-actions">
                     <button>Cadastre-se Agora</button>
                     <button>Explore Nossos Recursos</button>
                  </div>
                  <div className="adc-hero-icons">
                     <div>
                        <span role="img" aria-label="Proteção Avançada">🛡️</span>
                        <p>Proteção Avançada</p>
                     </div>
                     <div>
                        <span role="img" aria-label="Segurança Garantida">🔒</span>
                        <p>Segurança Garantida</p>
                     </div>
                     <div>
                        <span role="img" aria-label="Prevenção de Ameaças">⚠️</span>
                        <p>Prevenção de Ameaças</p>
                     </div>
                  </div>
               </div>

               <section className="adc-services">
                  <h2>Nossos Serviços</h2>
                  <div className="adc-service-cards">
                     <div className="adc-service-card">
                        <span role="img" aria-label="Recuperação Técnica">🛡️</span>
                        <h3>Recuperação Técnica</h3>
                        <p>Identificação e mitigação de danos causados por ataques digitais.</p>
                        <button>Saiba mais</button>
                     </div>
                     <div className="adc-service-card">
                        <span role="img" aria-label="Encaminhamento Especializado">👨‍⚖️</span>
                        <h3>Encaminhamento Especializado</h3>
                        <p>Conexão com advogados e psicólogos especializados em ciberataques.</p>
                        <button>Saiba mais</button>
                     </div>
                     <div className="adc-service-card">
                        <span role="img" aria-label="Recursos Educativos">📖</span>
                        <h3>Recursos Educativos</h3>
                        <p>Acesso a conteúdo educacional e ferramentas de prevenção.</p>
                        <button>Saiba mais</button>
                     </div>
                  </div>
               </section>

               <section className="adc-impact-stats">
                  <h2>Estatísticas de Impacto</h2>
                  <div className="adc-stats-cards">
                     <div className="adc-stat-card">
                        <span role="img" aria-label="Casos Resolvidos">📊</span>
                        <h3>1000+</h3>
                        <p>Casos Resolvidos</p>
                     </div>
                     <div className="adc-stat-card">
                        <span role="img" aria-label="Especialistas">👨‍💼</span>
                        <h3>50+</h3>
                        <p>Especialistas</p>
                     </div>
                     <div className="adc-stat-card">
                        <span role="img" aria-label="Taxa de Sucesso">🛡️</span>
                        <h3>99%</h3>
                        <p>Taxa de Sucesso</p>
                     </div>
                     <div className="adc-stat-card">
                        <span role="img" aria-label="Recursos Educativos">📘</span>
                        <h3>200+</h3>
                        <p>Recursos Educativos</p>
                     </div>
                  </div>
               </section>

               <section className="adc-featured-blog">
                  <h2>Blog em Destaque</h2>
                  <div className="adc-blog-cards">
                     {/* Card 1 */}
                     <div className="adc-blog-card">
                        <img
                           src=""
                           alt="Imagem placeholder do blog"
                        />
                        <div className="adc-blog-card-content">
                           <h3>Como se proteger contra phishing</h3>
                           <p className="adc-blog-date">2023-05-15</p>
                           <p>Aprenda a identificar e evitar ataques de phishing com estas dicas essenciais.</p>
                           <button>Leia mais</button>
                        </div>
                     </div>

                     {/* Card 2 */}
                     <div className="adc-blog-card">
                        <img
                           src=""
                           alt="Imagem placeholder do blog"
                        />
                        <div className="adc-blog-card-content">
                           <h3>A importância da autenticação de dois fatores</h3>
                           <p className="adc-blog-date">2023-05-10</p>
                           <p>Descubra por que a autenticação de dois fatores é crucial para sua segurança online.</p>
                           <button>Leia mais</button>
                        </div>
                     </div>

                     {/* Card 3 */}
                     <div className="adc-blog-card">
                        <img
                           src=""
                           alt="Imagem placeholder do blog"
                        />
                        <div className="adc-blog-card-content">
                           <h3>Melhores práticas de segurança para trabalho remoto</h3>
                           <p className="adc-blog-date">2023-05-05</p>
                           <p>Mantenha-se seguro enquanto trabalha de casa com estas dicas de cibersegurança.</p>
                           <button>Leia mais</button>
                        </div>
                     </div>
                  </div>
                  <button className="adc-view-all-posts">Ver Todos os Posts</button>
               </section>
            </div>
            
            
         );
      }




   };

   return <div>{renderStepContent()}</div>;
};

export default AccountType;
