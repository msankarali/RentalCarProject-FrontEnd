import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BrandResponse } from '../models/responses/brandResponse';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private apiUrl = environment.apiUrl + 'api/Brands/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<BrandResponse> {
    return this.httpClient.get<BrandResponse>(this.apiUrl + 'GetAll');
  }
}
