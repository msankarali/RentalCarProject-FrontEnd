import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  ) {
    router.events.subscribe((event) => {
      this.GetAll();
    });
  }

  ngOnInit(): void {

    // this.carFilterDto.colorId = <number><any>this.activatedRoute.snapshot.queryParamMap.get("colorId") | 0;
    // this.carFilterDto.brandId = <number><any>this.activatedRoute.snapshot.queryParamMap.get("brandId") | 0;
    // this.carFilterDto.minPrice = <number><any>this.activatedRoute.snapshot.queryParamMap.get("MinPrice") | 0;
    // this.carFilterDto.maxPrice = <number><any>this.activatedRoute.snapshot.queryParamMap.get("MaxPrice") | 0;

    // console.log(this.carFilterDto);
    this.activatedRoute.params.subscribe(params => {

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
