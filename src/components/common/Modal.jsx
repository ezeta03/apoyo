// src/components/common/Modal.jsx
import React from 'react';
import "../../assets/styles/components/_modal.scss" // Crearemos este archivo

function Modal({ isOpen, onClose, children }) {
  // Si el modal no está abierto, no renderizar nada
  if (!isOpen) {
    return null;
  }

  // Función para detener la propagación del evento de clic
  // y evitar que el modal se cierre al hacer clic dentro de él.
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    // El overlay (fondo oscuro) que cierra el modal al hacer clic
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      {/* El contenedor del contenido del modal */}
      <div className="modal-content" onClick={handleContentClick}>
        {/* Botón opcional para cerrar */}
        <button className="modal-close-button" onClick={onClose} aria-label="Cerrar modal">
          &times; {/* Símbolo de 'X' */}
        </button>
        {/* Aquí se renderizará el contenido pasado como 'children' (ej: el formulario) */}
        {children}
      </div>
    </div>
  );
}

export default Modal;