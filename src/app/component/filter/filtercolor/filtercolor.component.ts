import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-filtercolor',
  templateUrl: './filtercolor.component.html',
  styleUrls: ['./filtercolor.component.css']
})
export class FiltercolorComponent implements OnInit {
  colors :Color[]= [];
  currentColor !:Color;

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors =response.data;
    });
  }

  setCurrentColor(color:Color){
    this.currentColor=color;
  }
  getCurrentColorClass(color:Color){
    if(color == this.currentColor){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

  getAllColorClass(){
    if(!this.currentColor){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
