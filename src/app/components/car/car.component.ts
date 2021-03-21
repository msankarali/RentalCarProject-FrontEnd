import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CarDto } from 'src/app/models/dtos/carDto';
import { CarFilterDto } from 'src/app/models/filters/carFilterDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: CarDto[] = [];
  filterCarText: string;
  // carFilterDto: CarFilterDto;
  // filterColorId: number;
  // filterBrandId: number;
  // filterMinPrice: number;
  // filterMaxPrice: number;
  metin: string;

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    // !! queryParams => parametre degisiklik durumunda tetikliyor
    // *
    // ? subscribe async metod
    // TODO: params ise sadece bir kez

    this.activatedRoute.queryParams.subscribe(params => {
      this.GetAll();
    })
  }

  GetAll() {
    this.carService.getAll().subscribe(response => {
      this.cars = response.data;
    });
  }
  GetAllByColorId(colorId: number) {
    this.carService.getAllByColorId(colorId).subscribe(response => {
      this.cars = response.data;
    });
  }
  GetAllByBrandId(brandId: number) {
    this.carService.getAllByBrandId(brandId).subscribe(response => {
      this.cars = response.data;
    });
  }
  GetAllByBrandAndColorIds(brandId: number, colorId: number) {
    this.carService.getAllByBrandAndColorIds(brandId, colorId).subscribe(response => {
      this.cars = response.data;
    });
  }

}
