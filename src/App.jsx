// src/App.jsx
import React from 'react';

// 1. Importa los componentes de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// 2. Importa los estilos base de Swiper (¡importante!)
import 'swiper/css';

// 3. (Opcional) Importa módulos adicionales si los usas (ej: Pagination, Navigation)
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper/modules'; // Importa los módulos

// 4. Importa los componentes de tus secciones (Paneles)
import HitosPanel from './components/hito/HitosPanel';
// Importa los otros paneles cuando los tengas
// import ObjetivosCortoMedianoPanel from './components/objetivoCortoMediano/ObjetivosCortoMedianoPanel';
// import HabilidadesPanel from './components/habilidad/HabilidadesPanel';
// import ObjetivosLargoPlazoPanel from './components/objetivoLargoPlazo/ObjetivosLargoPlazoPanel';
// import TestimoniosPanel from './components/testimonio/TestimoniosPanel';

// 5. Importa los estilos globales o específicos de App
import './assets/styles/components/app.scss'; // Crearemos este archivo para estilos del contenedor principal

function App() {
  return (
    <div className="app-container">
      {/* Por ahora, solo mostramos la sección de Hitos */}
      <main className="main-content">
        <HitosPanel />
        {/* Aquí añadirías los otros paneles o la lógica de navegación más adelante */}
      </main>
    </div>
  );
}

export default App;