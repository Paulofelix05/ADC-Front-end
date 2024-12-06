import React from 'react';
import './BoxSign.css'

const BoxSign = ({ title, children, onSubmit, buttonText }) => {
  return (
    <div className="box-sign-wrapper">
      <h2 className="box-sign-title">Criando<br></br> Conta</h2>
      <div className="box-container box-sign">
        <h1 className='titulo-box'>{title}</h1>
        {children}
        <button onClick={onSubmit}>{buttonText}</button>
      </div>
    </div>
  );
};

export default BoxSign;
