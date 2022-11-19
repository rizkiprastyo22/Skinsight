import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeModule } from './home/home.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { ProductsModule } from './products/products.module';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    IngredientsModule,
    ProductsModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
