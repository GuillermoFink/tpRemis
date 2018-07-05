import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoViaje'
})
export class EstadoViajePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == 1){
      return "En curso";
    }else if (value == 0){
      return "Finalizado";
    }else if (value ==2){
      return "Cancelado";
    }else{
      return value;
    }
  }

}
