import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDto } from '../models/dtos/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  private apiUrl = environment.apiUrl + "api/CarDetails/";
  constructor(
    private httpClient: HttpClient
  ) { }

  getCarDetailsByCarId(carId: number): Observable<ListResponseModel<CarDto>> {
    
  }
}
