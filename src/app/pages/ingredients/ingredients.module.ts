import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsComponent } from './ingredients.component';
import { IngredientsBannerComponent } from './components/banner/ingredients-banner.component';



@NgModule({
  declarations: [
    IngredientsComponent,
    IngredientsBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IngredientsComponent
  ]
})
export class IngredientsModule { }
