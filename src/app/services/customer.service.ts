import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://localhost:44307/api/';


  constructor(private httpClient:HttpClient) { }

  getCustomerDetails() : Observable<ListResponseModel<Customer>>{
    let newPath = this.apiUrl+'customers/getcustomerdetails'
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
}
