import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RentalcarComponent } from './component/rentalcar/rentalcar.component';
import { NaviComponent } from './component/navi/navi.component';
import { BrandComponent } from './component/brand/brand.component';
import { ColorComponent } from './component/color/color.component';
import { CarComponent } from './component/car/car.component';
import { CustomerComponent } from './component/customer/customer.component';
import { FilterbrandComponent } from './component/filter/filterbrand/filterbrand.component';
import { FiltercolorComponent } from './component/filter/filtercolor/filtercolor.component';
import { CarImageComponent } from './component/car-image/car-image.component';

import { ToastrModule } from "ngx-toastr";
import { BrandUpdateComponent } from './component/brand-update/brand-update.component';
import { ColorUpdateComponent } from './component/color-update/color-update.component';
import { FilterColorPipePipe } from './pipes/color/filter-color-pipe.pipe';
import { FilterCarPipePipe } from './pipes/car/filter-car-pipe.pipe';
import { FilterBrandPipePipe } from './pipes/brand/filter-brand-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RentalcarComponent,
    NaviComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CustomerComponent,
    FilterbrandComponent,
    FiltercolorComponent,
    CarImageComponent,
    BrandUpdateComponent,
    ColorUpdateComponent,
    FilterColorPipePipe,
    FilterCarPipePipe,
    FilterBrandPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
