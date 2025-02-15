export interface SolicitudInstalacion {
  idSolicitudInstalacion: number;
  idImplementacion: number;
  nombreCliente: string;
  ubicacion: [number, number];
  encamino: boolean;
  aceptada?: boolean | null;
  fechaEstimada: Date | null;
  usuarioAtendio?: string | null;
  fechaAtencion?: Date | null;
  fechaRegistro: Date;
}

export const solicitudes: SolicitudInstalacion[] = [
  {
    idSolicitudInstalacion: 1,
    idImplementacion: 1001,
    aceptada: true,
    nombreCliente: 'Luis Arturo',
    encamino: false,
    fechaEstimada: null,
    usuarioAtendio: 'admin123',
    fechaAtencion: new Date('2025-02-15T14:30:00'),
    fechaRegistro: new Date(),
    ubicacion: [27.054147, -109.430194],
  },
  {
    idSolicitudInstalacion: 2,
    idImplementacion: 1002,
    nombreCliente: 'Luis Enriquez',
    encamino: false,
    aceptada: null,
    fechaEstimada: new Date('2025-04-10T12:00:00'),
    usuarioAtendio: null,
    fechaAtencion: null,
    fechaRegistro: new Date(),
    ubicacion: [27.054134, -109.430194],
  },
];
