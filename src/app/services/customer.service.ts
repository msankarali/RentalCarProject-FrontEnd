import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/entities/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = environment.apiUrl + 'api/Customers/';

  constructor(private httpClient: HttpClient) { }

  getAllCustomersWithDetails(): Observable<ListResponseModel<Customer>> {
    return this.httpClient.get<ListResponseModel<Customer>>(this.apiUrl + 'GetAllCustomersWithDetails');
  }
}
