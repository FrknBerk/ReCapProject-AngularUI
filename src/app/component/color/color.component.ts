import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from "@angular/forms";
import {ToastrService} from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors :Color[] = [];
  dataLoaded=false;
 

  UpdateColorComp:boolean=false;
  filterText="";
  clr:any;

  colorId?:number;
  colorName?:string;

  constructor(
    private colorService:ColorService,
    private toastrService :ToastrService) { }

  ngOnInit(): void {
    this.getColors();
  }

  addClick(){
    this.clr = {
      colorId:0,
      colorName:'',
    }
    this.UpdateColorComp=true;
  }

  closeClick(){
    this.UpdateColorComp=false;
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors =response.data;
      this.dataLoaded =true;
    });
  }

  delete(color:Color){
    if(confirm('Silmek istediğinize emin misiniz?')){
      this.colorService.delete(color).subscribe(response => {
        this.toastrService.success(response.message,"Silindi");
        this.getColors();
      })
    }
  }

  updateColor(item:any){
    this.clr=item;
    this.UpdateColorComp=true;
  }

}
