import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sino'
})
export class SinoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == 0) {
      return 'No';
    }else if (value == 1) {
      return 'Si'
    }else{
      return value;
    }
  }

}
