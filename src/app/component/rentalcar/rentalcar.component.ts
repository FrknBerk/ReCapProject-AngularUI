import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {  RentalCar} from 'src/app/models/rentalcar';
import {RentalcarService} from 'src/app/services/rentalcar.service';

@Component({
  selector: 'app-rentalcar',
  templateUrl: './rentalcar.component.html',
  styleUrls: ['./rentalcar.component.css']
})
export class RentalcarComponent implements OnInit {
  rentalCars : RentalCar[] = [];
  dataLoaded=false;
  constructor(private rentalcarService:RentalcarService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getRentalCars();
  }

  getRentalCars(){
    this.rentalcarService.getRentalCars().subscribe(response => {
      this.rentalCars = response.data;
      this.dataLoaded=true
    })
  }

 
}
