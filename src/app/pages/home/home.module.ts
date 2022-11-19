import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeBannerComponent } from './components/banner/home-banner.component';
import { HomeIngredientsComponent } from './components/ingredients/home-ingredients.component';
import { HomeProductsComponent } from './components/products/home-products.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeIngredientsComponent,
    HomeProductsComponent

  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
