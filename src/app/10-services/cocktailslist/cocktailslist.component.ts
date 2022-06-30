import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/models/cocktail.model';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-cocktailslist',
  templateUrl: './cocktailslist.component.html',
  styleUrls: ['./cocktailslist.component.scss']
})
export class CocktailslistComponent implements OnInit {

  cocktailsList: Cocktail[] = [];

  constructor(public cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktailsList = this.cocktailService.getCocktails()
  }



}
