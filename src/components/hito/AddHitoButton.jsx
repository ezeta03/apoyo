// src/components/hito/AddHitoButton.jsx
import React from 'react';
import '../../assets/styles/components/_Add_Hito_Button.scss'; // Crearemos este archivo

function AddHitoButton({ onClick }) {
  return (
    <button className="add-hito-button" onClick={onClick}>
      {/* Podríamos usar un icono SVG + texto en el futuro */}
      &#43; Añadir Hito {/* Usando el signo + por ahora */}
    </button>
  );
}

export default AddHitoButton;