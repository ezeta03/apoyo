// src/main.jsx (Ejemplo típico de Vite con React)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './assets/styles/main.scss'; // Importa tus estilos globales aquí si lo prefieres

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);