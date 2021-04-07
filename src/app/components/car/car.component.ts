import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  currentCar:Car
  filterText="";
  constructor(private carService:CarService, 
    private activatedRoute:ActivatedRoute, private toastrService:ToastrService,private rentService:RentService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }else{
        this.getCars()
      }
    })
    
  }

  getCars() {
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
    })    
  }

  getCarsByBrand(id:number) {
    this.carService.getCarsByBrand(id).subscribe(response=>{
      this.cars = response.data
    })    
  }

  getCarsByColor(id:number) {
    this.carService.getCarsByColor(id).subscribe(response=>{
      this.cars = response.data
    })    
  }

  rentACar(car:Car){
    this.toastrService.success("rented", car.carName)
    this.rentService.rentACar(car);
  }

}
