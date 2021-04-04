import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarImage } from '../models/entities/carImage';
import { ItemResponseModel } from '../models/itemResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  private apiUrl = environment.apiUrl + 'api/CarImages/';

  constructor(private httpClient: HttpClient) { }

  getCarImageByCarId(carId: number): Observable<ItemResponseModel<CarImage>> {
    return this.httpClient.get<ItemResponseModel<CarImage>>(this.apiUrl + 'GetCarPreviewImageByCarId?carId=' + carId);
  }
}
