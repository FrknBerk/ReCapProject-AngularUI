import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars :Car[] = [];
  dataLoaded=false;

  constructor(private carService:CarService,private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      if(params["brandId"] || params["colorId"]){
        this.getCarsByBrand(params["brandId"])
        this.getCarsByColor(params["colorId"])        
      }
      else{
        this.getCarDetails();
      }
    })
  }

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response => {
      this.cars = response.data;
      this.dataLoaded=true;
    })
  }

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response => {
      this.cars = response.data
      this.dataLoaded=true;
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    })
  }

  getCarImageByCar(carId:number){
  }
}
