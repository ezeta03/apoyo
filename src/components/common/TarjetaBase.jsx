// src/components/common/TarjetaBase.jsx
import React from 'react';
import '../../assets/styles/components/_tarjeta.scss'; // Importa los estilos específicos para la tarjeta

function TarjetaBase({ children, className = '', backgroundColor }) {
  const tarjetaStyle = {
    backgroundColor: backgroundColor || '#f0f0f0', // Color de fondo por defecto
  };

  return (
    <div className={`tarjeta-base ${className}`} style={tarjetaStyle}>
      {children}
    </div>
  );
}

export default TarjetaBase;