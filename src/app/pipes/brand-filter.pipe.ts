import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/entities/brand';

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

  transform(value: Brand[], filterBrandText: string): Brand[] {
    filterBrandText = filterBrandText ? filterBrandText.toLocaleLowerCase() : '';
    return filterBrandText
      ? value.filter((brand: Brand) => brand.brandName.toLocaleLowerCase().indexOf(filterBrandText) !== -1)
      : value;
  }

}
