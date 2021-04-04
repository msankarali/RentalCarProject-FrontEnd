import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RentedCarDto } from '../models/dtos/rentedCarDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private apiUrl = environment.apiUrl + 'api/Rentals/';

  constructor(private httpClient: HttpClient) { }

  getAllRentedCars(): Observable<ListResponseModel<RentedCarDto>> {
    return this.httpClient.get<ListResponseModel<RentedCarDto>>(this.apiUrl + 'GetRentedCars');
  }
}
