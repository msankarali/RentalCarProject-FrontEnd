import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDetailsWithImagesDto } from '../models/dtos/carDetailsWithImagesDto';
import { CarDto } from '../models/dtos/carDto';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  private apiUrl = environment.apiUrl + "api/Cars/";
  constructor(
    private httpClient: HttpClient
  ) { }

  getCarDetailsByCarId(carId: number): Observable<ItemResponseModel<CarDetailsWithImagesDto>> {
    return this.httpClient.get<ItemResponseModel<CarDetailsWithImagesDto>>(this.apiUrl + 'GetCarDetailsByCarId?carId=' + carId);
  }
}
