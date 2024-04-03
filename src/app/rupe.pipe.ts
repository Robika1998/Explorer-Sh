import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupe',
  standalone: true
})
export class RupePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "Rb. " + value ;
  }

}
