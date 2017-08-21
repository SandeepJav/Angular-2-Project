import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dumm Allo', 'This is for test', `http://www.wholeyum.com/wp-content/uploads/2016/09/dum-aloo-recipe.jpg`),
    new Recipe('Dum Allo', 'This is for test', `http://www.wholeyum.com/wp-content/uploads/2016/09/dum-aloo-recipe.jpg`)
  ];

  constructor() { }

  ngOnInit() {
  }

}
