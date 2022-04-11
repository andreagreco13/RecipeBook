import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Broccoli Pesto Pasta',
      'A vibrant punch of emerald green',
      'https://images.themodernproper.com/billowy-turkey/production/posts/2020/Broccoli-Pesto-Pasta-7.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1599768462&s=1f973289090d6a228c2ee4880d3dcff1'
    ),
    new Recipe(
      'Baked Salmon with Grapefruit Salad',
      'Melt-in-your-mouth salmon perfection',
      'https://images.themodernproper.com/billowy-turkey/production/posts/2014/grapefruit-salmon-salad-3.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1599770175&s=9e9524cd24b63b5e2ef4edb828a64b4c'
    ),
    new Recipe(
      'Lemon Chicken',
      'Chicken recipe shines with a sunny, lemony zing',
      'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Lemon-Chicken-7.jpg?w=1200&auto=compress%2Cformat&fit=crop&dm=1603455541&s=9f315f342977e90f1d7caf55cc555e34'
    )
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
