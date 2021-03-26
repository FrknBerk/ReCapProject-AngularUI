import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalCar } from '../models/rentalcar';

@Injectable({
  providedIn: 'root'
})
export class RentalcarService {
  apiUrl = 'https://localhost:44307/api/';

  constructor(private httpClient: HttpClient) { }
  
  getRentalCars() : Observable<ListResponseModel<RentalCar>>{
    let newPath = this.apiUrl+'rentals/getrentalcardetails'
    return this.httpClient.get<ListResponseModel<RentalCar>>(newPath);
  }

 
}
