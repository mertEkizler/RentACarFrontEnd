import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  car:Car[]=[]
  carImages:CarImage[]=[]
  constructor(private carImageService:CarImageService,private activatedRoute:ActivatedRoute,private carService:CarService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.getImagesByCarId(params["carId"]);
    })
  }


  getImagesByCarId(carId:number){
    this.carImageService.getImagesByCarId(carId).subscribe(response=>{
      this.carImages=response.data
    })
  }

}
