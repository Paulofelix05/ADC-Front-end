import React from 'react';

function WhyCard({ title, description, className }) {
  return (
    <div className={className}> {/* Usando a className passada */}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default WhyCard;
