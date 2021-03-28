import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './component/brand/brand.component';
import { CarComponent } from './component/car/car.component';
import { ColorComponent } from './component/color/color.component';
import { CustomerComponent } from './component/customer/customer.component';
import { RentalcarComponent } from './component/rentalcar/rentalcar.component';

const routes: Routes = [
  {path:'',pathMatch:"full",component:RentalcarComponent},
  {path:'rentals',component:RentalcarComponent},
  {path:'brands',component:BrandComponent},
  {path:'colors',component:ColorComponent},
  {path:'cars',component:CarComponent},
  {path:'customers',component:CustomerComponent},
  {path:'cars/getlistbybrand/:brandId',component:CarComponent},
  {path:'cars/getlistbycolor/:colorId',component:CarComponent},
  {path:'brands/add',component:BrandComponent},
  {path:'colors/add',component:ColorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
