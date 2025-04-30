import React from 'react';

interface Guide {
  id: string;
  description: string;
  status: string;
}

interface StatusPanelProps {
  guides: Guide[];
}

const StatusPanel: React.FC<StatusPanelProps> = ({ guides }) => {
  const total = guides.length;
  const entregadas = guides.filter((g) => g.status === 'Entregada').length;
  const enTransito = guides.filter((g) => g.status === 'En tránsito').length;
  const pendientes = guides.filter((g) => g.status === 'Pendiente').length;

  return (
    <section id="estado" aria-labelledby="estado-title">
      <h2 id="estado-title">Estado General</h2>
      <ul>
        <li>Total de Guías: {total}</li>
        <li>Entregadas: {entregadas}</li>
        <li>En tránsito: {enTransito}</li>
        <li>Pendientes: {pendientes}</li>
      </ul>
    </section>
  );
};

export default StatusPanel;
