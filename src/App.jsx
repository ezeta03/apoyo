// src/App.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// ... (otras importaciones de Swiper si las usas)

// Importa el nuevo componente de cabecera
import ProfileHeader from '../src/components/common/ProfilerHeader';

// Importa los componentes de tus secciones (Paneles)
import HitosPanel from './components/hito/HitosPanel';
// ... (otros paneles)

import './assets/styles/components/app.scss';

function App() {
  return (
    // Cambiamos app-container para usar flexbox y ordenar header y swiper
    <div className="app-container">
      {/* 1. Renderiza la cabecera aquí, fuera del Swiper */}
      <ProfileHeader />

      {/* 2. El Swiper ahora ocupa el espacio restante */}
      <div className="swiper-area"> {/* Contenedor extra para el Swiper */}
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          className="main-swiper"
          // ... (otras configuraciones de Swiper)
        >
          {/* Tus SwiperSlides van aquí como antes */}
          <SwiperSlide>
            <div className="section-slide">
              <HitosPanel />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="section-slide placeholder-slide" style={{ backgroundColor: '#e8eaf6' }}>
              <h2>Objetivos a Corto/Mediano Plazo</h2>
              <p>(Próximamente)</p>
            </div>
          </SwiperSlide>
          {/* ... más slides ... */}
        </Swiper>
      </div>

      {/* Opcional: Barra de navegación inferior */}
      {/* <nav className="bottom-nav">...</nav> */}
    </div>
  );
}

export default App;