import { Component, OnInit } from '@angular/core';
import { Products } from '../../model/products.model';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit{

  products: Products[] = [
    {
      name: 'Skin10004',
      desc: 'Madagascar Centella Toning',
      img: '../../../../../assets/images/beranda/madagascar-centella-toning.jpg'
    },
    {
      name: 'Lacoco en nature',
      desc: 'Darkspot Essence',
      img: '../../../../../assets/images/beranda/miracle-toner.jpg'
    },
    {
      name: 'COSRX',
      desc: 'AHA/BHA Clarifying Toner',
      img: '../../../../../assets/images/beranda/your-skin-bae.jpg'
    }
  ]

  constructor() {}

  ngOnInit(): void {
    
  }

}
