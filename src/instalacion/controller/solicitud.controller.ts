import { Controller, Get, Param } from '@nestjs/common';
import { solicitudes, SolicitudInstalacion } from '../interfaces/solicitud';

@Controller('solicitudes')
export class SolicitudController {
  constructor() {}

  @Get('/:id')
  getSolicitudById(@Param('id') id: number): SolicitudInstalacion | undefined {
    // Aquí implementarías la lógica para buscar la solicitud en la base de datos
    // Por ejemplo, usando un servicio o repositorio
    // const solicitud = await this.solicitudService.findOne(id);

    // Simulación de búsqueda en un arreglo (reemplazar esto con la lógica real de la base de datos)
    console.log(solicitudes);

    const solicitud = solicitudes.find(
      (solicitud) => solicitud?.idSolicitudInstalacion == id,
    );
    console.log(solicitud);

    return solicitud;
  }
}
