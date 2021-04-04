import { NgModule } from '@angular/core';
import { RouterModule, Routes, NavigationEnd } from '@angular/router';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  { path: "", component: CarComponent },
  { path: "cars", component: CarComponent },
  { path: "cars/car-details/:carId", component: CarDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
