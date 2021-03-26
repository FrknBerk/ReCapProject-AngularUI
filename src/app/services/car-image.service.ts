import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CarImage } from 'src/app/models/carımage';
import {Observable} from 'rxjs';
import {ListResponseModel} from 'src/app/models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
 
@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl='https://localhost:44307/api/'

  constructor(private httpClient:HttpClient) { }

  getCarImagesByCar(carId:number):Observable<ResponseModel>{
    let newPath = this.apiUrl+"CarImages/getcarıd?carId="+carId
    return this.httpClient.get<ResponseModel>(newPath);
  }
}
