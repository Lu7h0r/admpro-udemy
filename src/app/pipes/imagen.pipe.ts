import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICES } from '../config/config';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(img: string, tipo: string = 'usuario'): any {
    let url = URL_SERVICES + '/img';

    if (!img) {
      return url + '/usuarios/xxx';
    }

    if (img.indexOf('https') >= 0) {
      return img;
    }

    switch (tipo) {
      case 'stakeholder':
        url += '/stakeholders/' + img;
        break;
      case 'cliente':
        url += '/clientes/' + img;
        break;
      case 'empleado':
        url += '/empleados/' + img;
        break;
      case 'proveedor':
        url += '/proveedores/' + img;
        break;
      case 'usuario':
        url += '/usuarios/' + img;
        break;
      default:
        console.log('Tipo de archivo no existe');
        url += '/usuarios/xxx';
    }

    return;
  }
}
