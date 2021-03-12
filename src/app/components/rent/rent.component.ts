import { Component, OnInit } from '@angular/core';
import { RentedCarDto } from 'src/app/models/dtos/rentedCarDto';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  rents: RentedCarDto[] = [];
  constructor(private rentalService: RentalService) { }

  ngOnInit(): void {
    this.getAllRentedCars();
  }

  getAllRentedCars() {
    this.rentalService.getAllRentedCars().subscribe(response => {
      this.rents = response.data;
    });
  }

}
