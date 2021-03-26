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
    CarImageComponent
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
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
