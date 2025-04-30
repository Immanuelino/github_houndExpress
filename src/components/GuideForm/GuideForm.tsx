// src/components/GuideForm.tsx
import React, { useState } from 'react';
import './GuideForm.css';  // Import the CSS file for styling

interface GuideFormProps {
  addGuide: (guide: { id: string; description: string }) => void;
}

const GuideForm: React.FC<GuideFormProps> = ({ addGuide }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newGuide = {
      id: Date.now().toString(),
      description,
    };
    addGuide(newGuide);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción de la guía"
      />
      <button type="submit">Agregar Guía</button>
    </form>
  );
};

export default GuideForm;
