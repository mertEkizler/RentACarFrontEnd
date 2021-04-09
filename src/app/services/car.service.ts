import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'http://localhost:55629/api/';
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByBrand(id:number):Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl + "cars/getcarsbybrandid?brandId="+id
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByColor(id:number):Observable<ListResponseModel<Car>> {
    let newPath=this.apiUrl + "cars/getcarsbycolorid?colorId="+id
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  add(car:Car):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"cars/add",car)
  }
}
