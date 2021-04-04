import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CarComponent } from './components/car/car.component';
import { RentComponent } from './components/rent/rent.component';
import { LeftsidebarComponent } from './components/leftsidebar/leftsidebar.component';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { ToastrModule } from 'ngx-toastr';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CardModule } from 'primeng/card';
import { ListboxModule } from 'primeng/listbox';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BrandComponent,
    ColorComponent,
    CustomerComponent,
    CarComponent,
    RentComponent,
    LeftsidebarComponent,

    CarFilterPipe,
    ColorFilterPipe,
    BrandFilterPipe,
    CarDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    AccordionModule,
    MenubarModule,
    TableModule,
    ButtonModule,
    TieredMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot({
      positionClass: 'toastr-bottom-right',
    }),
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ListboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
