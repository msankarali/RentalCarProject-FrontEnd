import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerResponse } from '../models/responses/customerResponse';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = environment.apiUrl + 'api/Customers/';

  constructor(private httpClient: HttpClient) { }

  getAllCustomersWithDetails(): Observable<CustomerResponse> {
    return this.httpClient.get<CustomerResponse>(this.apiUrl + 'GetAllCustomersWithDetails');
  }
}
