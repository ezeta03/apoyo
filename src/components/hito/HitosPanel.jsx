import React, { useState, useEffect } from 'react';
import HitoCard from './HitoCard';
import AddHitoButton from './AddHitoButton'; // Crearemos este componente
import NuevoHitoForm from './NuevoHitoForm'; // Crearemos este componente
import Modal from '../common/Modal'; // Asumiremos que tenemos un Modal genérico
import '../../assets/styles/components/_hitosPanel.scss'; // Crearemos este archivo de estilos

// Datos iniciales de ejemplo (más adelante vendrán de la API/BD)
const hitosIniciales = [
  { id: 1, titulo: 'Finalización de la carrera', fecha: '2023-12-15', categoria: 'academico', icono: '🎓', nota: '¡El día de la graduación! Mucha emoción y alivio.' },
  { id: 2, titulo: 'Inicio de Colegiatura', fecha: '2024-03-01', categoria: 'profesional', icono: '📜', nota: 'Primer paso formal en la profesión.' },
  { id: 3, titulo: 'Compra de mi primer auto', fecha: '2025-05-02', categoria: 'personal', icono: '🚗', nota: '¡Libertad sobre ruedas! Ahorré mucho para esto.' }
];

function HitosPanel() {
  const [hitos, setHitos] = useState(hitosIniciales);
  const [showAddModal, setShowAddModal] = useState(false);

  // En un futuro, aquí iría un useEffect para cargar los hitos desde la API
  // useEffect(() => {
  //   // Lógica para llamar a api/hitos.js y usar setHitos con la respuesta
  // }, []);

  const handleOpenAddModal = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
  };

  // Función para añadir un nuevo hito (simulación local)
  const handleAddHito = (nuevoHitoData) => {
    const nuevoHito = {
      ...nuevoHitoData,
      id: Date.now(), // ID temporal simple (debería venir del backend)
      // El icono podría seleccionarse en el form o asignarse por categoría
      icono: nuevoHitoData.icono || obtenerIconoPorCategoria(nuevoHitoData.categoria)
    };
    setHitos(prevHitos => [nuevoHito, ...prevHitos]); // Añade al inicio de la lista
    handleCloseAddModal(); // Cierra el modal después de añadir
    // Aquí podríamos reproducir un sonido de guardado
  };

  // Helper simple para asignar icono por defecto basado en categoría
  const obtenerIconoPorCategoria = (categoria) => {
    switch (categoria) {
      case 'academico': return '🎓';
      case 'profesional': return '💼'; // Cambiado de 📜 a 💼
      case 'personal': return '🏠'; // Cambiado de 🚗 a 🏠 (más general)
      default: return '🌟';
    }
  };

  return (
    <div className="hitos-panel">
      <div className="hitos-panel__header">
        <h2>Hitos Significativos</h2>
        <AddHitoButton onClick={handleOpenAddModal} />
      </div>

      <div className="hitos-panel__lista">
        {hitos.length > 0 ? (
          hitos.map(hito => (
            <HitoCard key={hito.id} hito={hito} />
          ))
        ) : (
          <p className="hitos-panel__vacio">Aún no has añadido ningún hito. ¡Anímate a registrar tus logros!</p>
        )}
      </div>

      {/* Modal para añadir nuevo Hito */}
      <Modal isOpen={showAddModal} onClose={handleCloseAddModal}>
        <NuevoHitoForm onSubmit={handleAddHito} onCancel={handleCloseAddModal} />
      </Modal>
    </div>
  );
}

export default HitosPanel;