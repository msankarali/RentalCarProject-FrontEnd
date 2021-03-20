import { Pipe, PipeTransform } from '@angular/core';
import { CarDto } from '../models/dtos/carDto';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: CarDto[], filterCarText: string): CarDto[] {
    filterCarText = filterCarText ? filterCarText.toLowerCase() : "";
    return filterCarText
      ? value.filter((p: CarDto) => p.carName.toLowerCase().indexOf(filterCarText) !== -1)
      : value;
  }

}
