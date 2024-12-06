import React from 'react';

function ServiceItem({ imageUrl }) {
  return (
    <div className="service-item">
      <img src={imageUrl} alt="Serviço" className="service-image" />
    </div>
  );
}

export default ServiceItem;