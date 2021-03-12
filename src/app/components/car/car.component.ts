import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/dtos/carDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: CarDto[] = [];
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.GetAllCarsWithDetails();
  }

  GetAllCarsWithDetails() {
    this.carService.getAll().subscribe(response => {
      this.cars = response.data;
    });
  }

}
