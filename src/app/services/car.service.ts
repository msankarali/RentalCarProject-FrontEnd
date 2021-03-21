import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDtoResponse } from '../models/responses/carDtoResponse';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = environment.apiUrl + 'Cars/';
  path: string;
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  getAllByColorId(colorId: number): Observable<CarDtoResponse> {
    return this.httpClient.get<CarDtoResponse>(this.apiUrl + 'GetAllCarsWithDetails?colorId=' + colorId);
  }
  getAll(): Observable<CarDtoResponse> {
    return this.httpClient.get<CarDtoResponse>(this.apiUrl + 'GetAllCarsWithDetails?' + this.router.url.split('?')[1]);
  }

  getAllByBrandId(brandId: number): Observable<CarDtoResponse> {
    return this.httpClient.get<CarDtoResponse>(this.apiUrl + 'GetAllCarsByBrandId?brandId=' + brandId);
  }
  getAllByBrandAndColorIds(brandId: number, colorId: number): Observable<CarDtoResponse> {
    return this.httpClient.get<CarDtoResponse>(this.apiUrl + 'GetAllCarsByColorId?brandId=' + brandId + '&colorId=' + colorId);
  }
}
