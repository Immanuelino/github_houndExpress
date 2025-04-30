// src/types/guide.ts
export interface Guide {
  id: string;
  destinatario: string;
  direccion: string;
  estado: 'pendiente' | 'en_transito' | 'entregado';
}
