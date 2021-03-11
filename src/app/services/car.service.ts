import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDtoResponse } from '../models/responses/carDtoResponse';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = environment.apiUrl + 'Cars/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<CarDtoResponse> {
    return this.httpClient.get<CarDtoResponse>(this.apiUrl + 'GetAllCarsWithDetails');
  }
}
