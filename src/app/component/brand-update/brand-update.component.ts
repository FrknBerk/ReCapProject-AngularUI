import { Component, OnInit, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-update',
  templateUrl: './brand-update.component.html',
  styleUrls: ['./brand-update.component.css'],
})
export class BrandUpdateComponent implements OnInit {
  brandAddForm!: FormGroup;

  constructor(
    private brandService: BrandService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {}

  UpdateBrandComp: boolean = false;

  @Input() brnd: any;
  brandId?: number;
  brandName?: string;
  getState?: boolean;

  brands: Brand[] = [];

  ngOnInit(): void {
    this.loadBrands();
    this.createBrandAddForm();
  }

  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      brandName: ['', Validators.required],
      getState: [true, Validators.required],
    });
  }

  add() {
    this.brnd = {
      brandId: 0,
      brandName: '',
    };
    this.UpdateBrandComp = true;
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value);
      this.brandService.add(brandModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Eklendi');
        },
        (responseError) => {
          if (responseError.error.Errors?.length > 0) {
            for (let i = 0; i < responseError.error.Errors?.length; i++) {
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

  loadBrands() {
    this.brandService.getBrands().subscribe((response: any) => {
      this.brands = response;
      this.brandId = this.brnd.brandId;
      this.brandName = this.brnd.brandName;
    });
  }

  updateBrand() {
    var brand = {
      brandId: this.brandId,
      brandName: this.brandName,
      getState: true,
    };
    this.brandService.update(brand).subscribe((response) => {
      this.toastrService.success(response.message, 'Güncellendi');
    });
  }
}
