import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-update',
  templateUrl: './color-update.component.html',
  styleUrls: ['./color-update.component.css'],
})
export class ColorUpdateComponent implements OnInit {
  colorAddForm!: FormGroup;

  constructor(
    private colorService: ColorService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {}

  UpdateColorComp: boolean = false;

  @Input() clr:any;
  colorId?:number;
  colorName?:string;
  getState?:boolean;

  colors:Color[] = [];

  ngOnInit(): void {
    this.loadColors();
    this.createColorAddForm();
  }

  createColorAddForm() {
    this.colorAddForm = this.formBuilder.group({
      colorName: ['', Validators.required],
      getState: [true, Validators.required],
    });
  }

  add() {
    this.clr = {
      colorId: 0,
      colorName: '',
    };
    this.UpdateColorComp = true;
    if (this.colorAddForm.valid) {
      let colorModel = Object.assign({}, this.colorAddForm.value);
      this.colorService.add(colorModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Eklendi');
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

  loadColors(){
    this.colorService.getColors().subscribe((response:any) => {
      this.colors = response;
      this.colorId = this.clr.colorId;
      this.colorName = this.clr.colorName;
    });
  }

  updateColor(){
    var color = {
      colorId:this.colorId,
      colorName:this.colorName,
      getState:true,
    };
    this.colorService.update(color).subscribe((response) => {
      this.toastrService.success(response.message,'Güncellendi');
    });
  }

}
