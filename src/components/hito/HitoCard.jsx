import React, { useState } from 'react';
import TarjetaBase from '../common/TarjetaBase'; // Ajusta la ruta si es necesario
import '../../assets/styles/components/_hitoCard.scss'; // Crearemos este archivo de estilos a continuación

// Define colores base para las categorías (puedes ajustarlos)
const coloresCategoria = {
  academico: '#fdecdf', // Rosa Palo Suave
  profesional: '#e6e0f8', // Lila Suave
  personal: '#dcf0e8', // Verde Menta Suave
  default: '#fffde7' // Amarillo Suave (por defecto o para otros)
};

function HitoCard({ hito }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Obtiene el color basado en la categoría o usa el color por defecto
  const backgroundColor = coloresCategoria[hito.categoria] || coloresCategoria.default;

  // Función para manejar el clic y expandir/colapsar
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    // Aquí podríamos añadir un sonido sutil si integramos audio
  };

  // Formateo simple de fecha (puedes usar una librería como date-fns si necesitas más)
  const formatearFecha = (fechaString) => {
    if (!fechaString) return '';
    try {
      const fecha = new Date(fechaString + 'T00:00:00'); // Asegura que se interprete como fecha local
      return fecha.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch (error) {
      console.error("Error formateando fecha:", error);
      return fechaString; // Devuelve el string original si hay error
    }
  };


  return (
    <TarjetaBase className="hito-card" backgroundColor={backgroundColor}>
      <div className="hito-card__contenido" onClick={toggleExpand} role="button" tabIndex="0" aria-expanded={isExpanded}>
        <div className="hito-card__icono">{hito.icono || '🌟'}</div> {/* Icono simple o placeholder */}
        <div className="hito-card__info">
          <h3 className="hito-card__titulo">{hito.titulo}</h3>
          <p className="hito-card__fecha">{formatearFecha(hito.fecha)}</p>
        </div>
        <span className={`hito-card__expand-icon ${isExpanded ? 'expanded' : ''}`}>
          {isExpanded ? '▲' : '▼'} {/* Icono simple para expandir/colapsar */}
        </span>
      </div>

      {/* Sección expandible para la nota */}
      {isExpanded && (
        <div className="hito-card__nota-expandida">
          <h4>Nota Personal:</h4>
          <p>{hito.nota || 'No hay nota añadida.'}</p>
          {/* Aquí podríamos añadir un botón para editar la nota en el futuro */}
        </div>
      )}
    </TarjetaBase>
  );
}

export default HitoCard;