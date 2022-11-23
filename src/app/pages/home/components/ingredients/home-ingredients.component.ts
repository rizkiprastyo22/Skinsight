import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../../model/ingredients.model';

@Component({
  selector: 'app-home-ingredients',
  templateUrl: './home-ingredients.component.html',
  styleUrls: ['./home-ingredients.component.scss']
})
export class HomeIngredientsComponent implements OnInit {

  ingredients: Ingredients[] = [
    {
      name: 'Hyaluronic Acid',
      desc: 'Antistatik, Humektan, Pelembab, dll',
      img: '../../../../../assets/images/beranda/hyaluronic-acid.png'
    },
    {
      name: 'Glycerine',
      desc: 'Denaturant, Hair Conditioner, dll',
      img: '../../../../../assets/images/beranda/hyaluronic-acid.png'
    },
    {
      name: 'Ascorbic Acid',
      desc: 'Antioksidan, Buffering, Masking, dll',
      img: '../../../../../assets/images/beranda/hyaluronic-acid.png'
    }
  ]

  constructor() {}

  ngOnInit(): void {
    
  }
}
