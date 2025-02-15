import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Tecnico } from '../interfaces/tecnico';

@WebSocketGateway({
  cors: {
    origin: '*', // Permite todas las conexiones
    methods: ['GET', 'POST'], // Métodos permitidos
    allowedHeaders: ['Content-Type'], // Headers permitidos
  },
})
export class TecnicoGateway {
  @WebSocketServer()
  server: Server;

  // Recibe la data del técnico y la emite a la solicitud correspondiente
  @SubscribeMessage('ubicacion_tecnico')
  handleUbicacionTecnico(
    @MessageBody() data: { idSolicitud: number; tecnico: Tecnico },
  ) {
    const { idSolicitud, tecnico } = data;
    console.log(`📍 Técnico recibido para solicitud ${idSolicitud}:`, tecnico);

    // Emitir la ubicación del técnico a la solicitud correspondiente
    this.server.emit(`solicitud_${idSolicitud}`, tecnico);
  }
}
