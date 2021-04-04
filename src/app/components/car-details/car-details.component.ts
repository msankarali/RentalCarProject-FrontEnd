import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailsWithImagesDto } from 'src/app/models/dtos/carDetailsWithImagesDto';
import { CarDto } from 'src/app/models/dtos/carDto';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  selectedCarDetails: CarDetailsWithImagesDto;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carDetailService: CarDetailService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.carDetailService.getCarDetailsByCarId(params['carId']).subscribe(response => {
        console.log(response)
        this.selectedCarDetails = response.data;
      })
    })
  }

}
