import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/entities/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: Brand[] = [];
  dataLoaded = false;
  currentBrand: Brand;
  filterBrandText = '';

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getAllBrands();
  }

  getAllBrands() {
    this.brandService.getAll().subscribe(response => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  getCurrentBrandClass(brand: Brand) {
    if (brand == this.currentBrand) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }
}
