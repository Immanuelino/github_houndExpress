import React from 'react';
import './GuideList.css';  // Import the CSS file for styling


interface Guide {
  id: string;
  description: string;
  status: string;
}

interface GuideListProps {
  guides: Guide[];
  updateGuideStatus: (id: string) => void;
}

const GuideList: React.FC<GuideListProps> = ({ guides, updateGuideStatus }) => {
  return (
    <section id="lista" aria-labelledby="lista-title" className='guide-list-container'>
      <h2 id="lista-title">Lista de Guías</h2>
      <ul>
        {guides.map((guide) => (
          <li key={guide.id}>
            <p>
              <strong>ID:</strong> {guide.id}
            </p>
            <p>
              <strong>Descripción:</strong> {guide.description}
            </p>
            <p>
              <strong>Estado:</strong> {guide.status}
            </p>
            <button onClick={() => updateGuideStatus(guide.id)}>
              Actualizar Estado
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default GuideList;
