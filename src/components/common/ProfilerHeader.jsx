// src/components/common/ProfileHeader.jsx
import React, { useState, useEffect } from 'react';
import '../../assets/styles/components/_ProfilerHeader.module.scss'; // Crearemos este archivo de estilos

// --- Datos de Ejemplo (Más adelante vendrán del estado de autenticación) ---
const userData = {
  nombre: 'Ana García', // Puedes cambiarlo por el nombre real
  // Usa una imagen local o una URL. Placeholder si no tienes una.
  fotoUrl: 'https://via.placeholder.com/80/dcf0e8/8886f3?text=AG', // Placeholder simple
  edad: 26, // Edad de ejemplo
  profesion: 'Psicóloga Clínica',
};

// --- Lista de Frases Motivadoras ---
const frasesMotivadoras = [
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "Cree en ti misma y todo será posible.",
  "La única forma de hacer un gran trabajo es amar lo que haces.",
  "Cada día es una nueva oportunidad para cambiar tu vida.",
  "La paciencia y la perseverancia tienen un efecto mágico ante el que las dificultades desaparecen.",
  "El futuro pertenece a quienes creen en la belleza de sus sueños.",
  "No te compares con los demás, compárate con la persona que eras ayer.",
  "El aprendizaje es un tesoro que seguirá a su dueño a todas partes.",
  "La mejor forma de predecir el futuro es crearlo.",
  "Eres más valiente de lo que crees, más fuerte de lo que pareces y más inteligente de lo que piensas."
];
// --- Fin de Datos de Ejemplo ---

function ProfileHeader() {
  const [fraseDelDia, setFraseDelDia] = useState('');

  // Selecciona una frase aleatoria al cargar el componente
  useEffect(() => {
    const indiceAleatorio = Math.floor(Math.random() * frasesMotivadoras.length);
    setFraseDelDia(frasesMotivadoras[indiceAleatorio]);
  }, []); // El array vacío asegura que se ejecute solo una vez al montar

  // Función para calcular la edad (si tuvieras la fecha de nacimiento)
  // const calcularEdad = (fechaNacimiento) => { ... }
  // Por ahora usamos la edad directamente de userData

  return (
    <header className="profile-header">
      <div className="profile-header__info">
        <img
          src={userData.fotoUrl}
          alt={`Foto de perfil de ${userData.nombre}`}
          className="profile-header__foto"
        />
        <div className="profile-header__details">
          <h2 className="profile-header__nombre">{userData.nombre}</h2>
          <p className="profile-header__meta">{`${userData.profesion} • ${userData.edad} años`}</p>
        </div>
      </div>
      {fraseDelDia && ( // Muestra la frase solo cuando se haya cargado
        <blockquote className="profile-header__frase">
          "{fraseDelDia}"
        </blockquote>
      )}
    </header>
  );
}

export default ProfileHeader;