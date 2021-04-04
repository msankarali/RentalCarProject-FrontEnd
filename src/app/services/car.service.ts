import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarDto } from '../models/dtos/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = environment.apiUrl + 'api/Cars/';
  path: string;
  constructor(
    private httpClient: HttpClient,
    private router: Router) { }

  getAllByColorId(colorId: number): Observable<ListResponseModel<CarDto>> {
    return this.httpClient.get<ListResponseModel<CarDto>>(this.apiUrl + 'GetAllCarsWithDetails?colorId=' + colorId);
  }
  getAll(): Observable<ListResponseModel<CarDto>> {
    return this.httpClient.get<ListResponseModel<CarDto>>(this.apiUrl + 'GetAllCarsWithDetails?' + this.router.url.split('?')[1]);
  }

  getAllByBrandId(brandId: number): Observable<ListResponseModel<CarDto>> {
    return this.httpClient.get<ListResponseModel<CarDto>>(this.apiUrl + 'GetAllCarsByBrandId?brandId=' + brandId);
  }
  getAllByBrandAndColorIds(brandId: number, colorId: number): Observable<ListResponseModel<CarDto>> {
    return this.httpClient.get<ListResponseModel<CarDto>>(this.apiUrl + 'GetAllCarsByColorId?brandId=' + brandId + '&colorId=' + colorId);
  }
}
