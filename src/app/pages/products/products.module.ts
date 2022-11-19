import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsBannerComponent } from './components/banner/products-banner.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductsBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductsComponent
  ]
})
export class ProductsModule { }
