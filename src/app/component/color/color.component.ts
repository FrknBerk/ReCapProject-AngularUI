import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from "@angular/forms";
import {ToastrService} from 'ngx-toastr';
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
  colorAddForm !: FormGroup;

  constructor(private colorService:ColorService,private formBuilder:FormBuilder,private toastrService :ToastrService) { }

  ngOnInit(): void {
    this.getColors();
    this.createColorAddForm();
  }

  getColors(){
    this.colorService.getColors().subscribe(response => {
      this.colors =response.data;
      this.dataLoaded =true;
    });
  }

  createColorAddForm(){
    this.colorAddForm = this.formBuilder.group({
      colorName:["",Validators.required],
      getState:[true,Validators.required]
    })
  }

  add(){
    if(this.colorAddForm.valid){
      let colorModel = Object.assign({},this.colorAddForm.value)
      this.colorService.add(colorModel).subscribe( response => {
        this.toastrService.success(response.message,"Başarılı")
        this.getColors();
      },responseError => {
        if(responseError.error.Errors.length>0){
          for(let i=0;i < responseError.error.Errors.length;i++){
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama hatası")
          }
        }
      })
    }
    else{
      this.toastrService.error("Formunuz eksik","Dikkat")
    }
  }
}
