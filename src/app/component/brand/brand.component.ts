import { Component, OnInit, Input } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { BrandService } from 'src/app/services/brand.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  
  dataLoaded = false;
  filterText="";

  UpdateBrandComp:boolean=false;
  brnd:any;
  
  brandId?:number;
  brandName?:string;

  constructor(
    private brandService: BrandService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getBrands();
  }

  addClick(){
    this.brnd ={
      brandId:0,
      brandName:""
    }
    this.UpdateBrandComp=true;
  }

  closeClick(){
    this.UpdateBrandComp=false;
    this.getBrands();
  }


  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
      this.dataLoaded = true;
    });
  }

  

  delete(brand:Brand){
    if(confirm("Silmek istediğinize emin misiniz?")){
      this.brandService.delete(brand).subscribe(response => {
        this.toastrService.success(response.message,"Silindi");
        this.getBrands();
      })
    }
  }

  updateBrand(item:any){
    this.brnd=item;
    this.UpdateBrandComp=true;
   
  }
}
