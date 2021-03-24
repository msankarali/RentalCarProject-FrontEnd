import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ColorResponse } from '../models/responses/colorResponse';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private apiUrl = environment.apiUrl + 'api/Colors/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ColorResponse> {
    return this.httpClient.get<ColorResponse>(this.apiUrl + 'GetAllColors');
  }
}
