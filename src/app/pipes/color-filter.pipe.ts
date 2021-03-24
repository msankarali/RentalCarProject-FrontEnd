import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/entities/color';

@Pipe({
  name: 'colorFilter'
})
export class ColorFilterPipe implements PipeTransform {

  transform(value: Color[], filterColorText: string): Color[] {
    filterColorText = filterColorText ? filterColorText.toLocaleLowerCase() : '';
    return filterColorText
      ? value.filter((color: Color) => color.colorName.toLocaleLowerCase().indexOf(filterColorText) !== -1)
      : value;
  }

}
