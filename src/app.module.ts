import { Module } from '@nestjs/common';
import { TecnicoGateway } from './instalacion/controller/TecnicoGateway';
import { SolicitudController } from './instalacion/controller/solicitud.controller';

@Module({
  imports: [],
  controllers: [SolicitudController],
  providers: [TecnicoGateway],
})
export class AppModule {}
