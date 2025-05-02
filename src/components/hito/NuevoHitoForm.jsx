// src/components/hito/NuevoHitoForm.jsx
import React, { useState } from 'react';
import '../../assets/styles/components/NuevoHitoForm.scss'; // Crearemos este archivo

// Opciones para la categoría
const categoriasDisponibles = [
  { value: 'academico', label: 'Académico' },
  { value: 'profesional', label: 'Profesional' },
  { value: 'personal', label: 'Personal' },
];

function NuevoHitoForm({ onSubmit, onCancel }) {
  // Estado para cada campo del formulario
  const [titulo, setTitulo] = useState('');
  const [fecha, setFecha] = useState('');
  const [categoria, setCategoria] = useState(categoriasDisponibles[0].value); // Valor inicial
  const [nota, setNota] = useState('');
  const [error, setError] = useState(''); // Estado para mensajes de error

  // Manejador genérico para cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setError(''); // Limpia errores al empezar a escribir

    switch (name) {
      case 'titulo':
        setTitulo(value);
        break;
      case 'fecha':
        setFecha(value);
        break;
      case 'categoria':
        setCategoria(value);
        break;
      case 'nota':
        setNota(value);
        break;
      default:
        break;
    }
  };

  // Manejador para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el envío por defecto del navegador

    // Validación básica
    if (!titulo.trim() || !fecha || !categoria) {
      setError('Por favor, completa los campos obligatorios (Título, Fecha, Categoría).');
      return; // Detiene el envío si hay errores
    }

    // Prepara los datos del nuevo hito
    const nuevoHitoData = {
      titulo: titulo.trim(),
      fecha, // El formato YYYY-MM-DD es estándar para input type="date"
      categoria,
      nota: nota.trim(),
      // El icono se asignará en HitosPanel por ahora
    };

    // Llama a la función onSubmit pasada por HitosPanel
    onSubmit(nuevoHitoData);

    // Opcional: Limpiar el formulario después de enviar (aunque el modal se cierra)
    // setTitulo('');
    // setFecha('');
    // setCategoria(categoriasDisponibles[0].value);
    // setNota('');
    // setError('');
  };

  return (
    <form className="nuevo-hito-form" onSubmit={handleSubmit} noValidate>
      <h3>Añadir Nuevo Hito</h3>
      {error && <p className="form-error">{error}</p>} {/* Muestra errores */}

      <div className="form-group">
        <label htmlFor="titulo">Título *</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          value={titulo}
          onChange={handleChange}
          required
          aria-required="true"
        />
      </div>

      <div className="form-group">
        <label htmlFor="fecha">Fecha *</label>
        <input
          type="date"
          id="fecha"
          name="fecha"
          value={fecha}
          onChange={handleChange}
          required
          aria-required="true"
          // Puedes establecer max={hoy} si no quieres fechas futuras
        />
      </div>

      <div className="form-group">
        <label htmlFor="categoria">Categoría *</label>
        <select
          id="categoria"
          name="categoria"
          value={categoria}
          onChange={handleChange}
          required
          aria-required="true"
        >
          {categoriasDisponibles.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="nota">Nota Personal (Opcional)</label>
        <textarea
          id="nota"
          name="nota"
          value={nota}
          onChange={handleChange}
          rows="4" // Altura inicial del área de texto
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="button-primary">
          Guardar Hito
        </button>
        <button type="button" className="button-secondary" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default NuevoHitoForm;