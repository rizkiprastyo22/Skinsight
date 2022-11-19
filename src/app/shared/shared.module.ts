import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';

const components = [
  HeaderComponent,
  FooterComponent
]

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule)
  }
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [...components, RouterModule]
})
export class SharedModule { }
