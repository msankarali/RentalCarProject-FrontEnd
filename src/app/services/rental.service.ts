import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RentedCarDto } from '../models/dtos/rentedCarDto';
import { CarDtoResponse } from '../models/responses/carDtoResponse';
import { RentedCarDtoResponse } from '../models/responses/rentedCarDtoResponse';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private apiUrl = environment.apiUrl + 'api/Rentals/';

  constructor(private httpClient: HttpClient) { }

  getAllRentedCars(): Observable<RentedCarDtoResponse> {
    return this.httpClient.get<RentedCarDtoResponse>(this.apiUrl + 'GetRentedCars');
  }
}
