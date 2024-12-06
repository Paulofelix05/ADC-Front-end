import React, { useState } from 'react';
import BoxSign from './BoxSign';
import './Sign.css'
import { useNavigate } from 'react-router-dom';

const Sign = () => {
   const [step, setStep] = useState(1);
   const [cpf, setCpf] = useState('');
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [dob, setDob] = useState('');
   const [password, setPassword] = useState('');
   const [termsAccepted, setTermsAccepted] = useState(false);
   const [error, setError] = useState('');
   const [surname, setSurname] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [isComplete, setIsComplete] = useState(false);

   const navigate = useNavigate();

   const validateCPF = (cpf) => {
      // Validação de CPF
      const cleanCPF = cpf.replace(/\D/g, '')
      if (cleanCPF.length !== 11) return false;
      if (/^(\d)\1{10}$/.test(cleanCPF)) return false;

      let sum = 0;
      let remainder;
      for (let i = 0; i < 9; i++) sum += parseInt(cleanCPF.charAt(i)) * (10 - i);
      remainder = (sum * 10) % 11;
      if (remainder === 10 || remainder === 11) remainder = 0;
      if (remainder !== parseInt(cleanCPF.charAt(9))) return false;

      sum = 0;
      for (let i = 0; i < 10; i++) sum += parseInt(cleanCPF.charAt(i)) * (11 - i);
      remainder = (sum * 10) % 11;
      if (remainder === 10 || remainder === 11) remainder = 0;
      if (remainder !== parseInt(cleanCPF.charAt(10))) return false;

      return true;
   };

   const validateEmail = (email) => {
      // Validação de e-mail
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
   };

   const validatePhone = (phone) => {
      // Aceita números com 10 ou 11 dígitos (com ou sem DDD e número de celular)
      const phoneRegex = /^\d{10,11}$/;
      return phoneRegex.test(phone);
   };

   const validateAge = (dob) => {
      // Valida idade mínima de 18 anos
      const birthDate = new Date(dob);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
         return age - 1;
      }
      return age;
   };

   const validatePassword = (password) => {
      const minLength = 8;
      const upperCase = /[A-Z]/;
      const lowerCase = /[a-z]/;
      const number = /[0-9]/;
      const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

      let errorMessages = [];

      if (password.length < minLength) {
         errorMessages.push('A senha deve ter pelo menos 8 caracteres');
      }
      if (!upperCase.test(password)) {
         errorMessages.push('A senha deve conter pelo menos uma letra maiúscula');
      }
      if (!lowerCase.test(password)) {
         errorMessages.push('A senha deve conter pelo menos uma letra minúscula');
      }
      if (!number.test(password)) {
         errorMessages.push('A senha deve conter pelo menos um número');
      }
      if (!specialChar.test(password)) {
         errorMessages.push('A senha deve conter pelo menos um caractere especial');
      }
      return errorMessages;
   };

   const validateNameAndSurname = (input) => {
      const nameRegex = /^[A-Za-zÀ-ÿ]+(?: [A-Za-zÀ-ÿ]+)*$/;
      return nameRegex.test(input);
   };

   const handleNext = () => {
      if (step === 1 && !termsAccepted) {
         setError('Você deve aceitar os termos!');
         return;
      }

      const validateStep = () => {
         switch (step) {
            case 1:
               if (!termsAccepted) return 'Você deve aceitar os termos!';
               if (!validateCPF(cpf)) return 'CPF inválido!';
               break;
            case 2:
               if (!name || !surname) return 'Nome e sobrenome são obrigatórios!';
               if (!validateNameAndSurname(name)) return 'Nome deve conter apenas letras!';
               if (!validateNameAndSurname(surname)) return 'Sobrenome deve conter apenas letras!';
               break;
            case 3:
               if (!validateEmail(email)) return 'E-mail inválido!';
               break;
            case 4:
               if (!validatePhone(phone)) return 'Telefone inválido!';
               break;
            case 5:
               if (!dob) return 'Data de nascimento é obrigatória!';
               if (validateAge(dob) < 18) return 'Você precisa ter 18 anos ou mais!';
               break;
            case 6:
               const passwordErrors = validatePassword(password);
               if (passwordErrors.length > 0) {
                  setError(passwordErrors.join(' | '));
                  return;
               }
               if (password !== confirmPassword) return 'As senhas não coincidem!';
               break;
            default:
               break;
         }
         return '';
      };

      const validationError = validateStep();
      if (validationError) {
         setError(validationError);
         return;
      }

      setError('');

      if (step === 6) {
         setIsComplete(true);
         navigate('/account-type');
         return;
      }

      setStep(step + 1);
   };

   return (
      <div className="sign-container">
         {step === 1 && (
            <BoxSign
               title="Qual o seu CPF?"
               onSubmit={handleNext}
               buttonText="Continuar"
            >
               <input
                  type="text"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  placeholder="Digite seu CPF"
               />
               {error && error.includes("CPF") && <span className="error-message">{error}</span>}

               <label className="terms-text">
                  <input
                     type="checkbox"
                     checked={termsAccepted}
                     onChange={(e) => setTermsAccepted(e.target.checked)}
                  />
                  Eu li e aceito os termos
               </label>
               {error && error.includes("termos") && <span className="error-message">{error}</span>}
            </BoxSign>
         )}

         {step === 2 && (
            <BoxSign
               title="Qual o seu nome?"
               onSubmit={handleNext}
               buttonText="Continuar"
            >
               <h2 className='text-conhecer'>
                  Queremos conhecer você
               </h2>
               <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Digite seu nome"
               />
               {error && error.includes("Nome") && <span className="error-message">{error}</span>}

               <input
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  placeholder="Digite seu sobrenome"
                  className='text-surname'
               />
               {error && error.includes("sobrenome") && <span className="error-message">{error}</span>}
            </BoxSign>
         )}

         {step === 3 && (
            <BoxSign
               title="Qual o seu e-mail?"
               onSubmit={handleNext}
               buttonText="Continuar"
            >
               <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu e-mail"
               />
               {error && error.includes("E-mail") && <span className="error-message">{error}</span>}
            </BoxSign>
         )}

         {step === 4 && (
            <BoxSign
               title="Qual o seu telefone?"
               onSubmit={handleNext}
               buttonText="Continuar"
            >
               <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))} // Remove caracteres não numéricos
                  placeholder="Digite seu telefone"
               />
               {error && error.includes("Telefone") && (
                  <span className="error-message">{error}</span>
               )}
            </BoxSign>
         )}


         {step === 5 && (
            <BoxSign
               title="Qual a sua data de nascimento?"
               onSubmit={handleNext}
               buttonText="Continuar"
            >
               <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  placeholder="Digite sua data de nascimento"
               />
               {error && error.includes("Data de nascimento") && <span className="error-message">{error}</span>}
            </BoxSign>
         )}

         {step === 6 && (
            <BoxSign
               title="Crie uma senha"
               onSubmit={handleNext}
               buttonText="Finalizar"
            >
               <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
               />
               <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirme sua senha"
               />
               {error && error.includes("senha") && <span className="error-message">{error}</span>}
            </BoxSign>
         )}

         {isComplete && <h2>Cadastro finalizado! Redirecionando...</h2>}
      </div>
   );
};

export default Sign;
