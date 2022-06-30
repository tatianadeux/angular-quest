import { Injectable } from "@angular/core";
import { CocktailslistComponent } from "../10-services/cocktailslist/cocktailslist.component";
import { Cocktail } from "../models/cocktail.model";

@Injectable({
      providedIn: 'root'
})

export class CocktailService {

  private cocktailsList: Cocktail[] = [
    new Cocktail("Piña Colada", 4, "https://assets.afcdn.com/recipe/20180705/80258_w350h250c1cx974cy1535.jpg"),
    new Cocktail("Mojito", 3, "https://assets.afcdn.com/recipe/20180705/80255_w350h250c1cx2774cy1849.jpg"),
    new Cocktail("Punch Exotique", 4, "https://assets.afcdn.com/recipe/20180705/80348_w350h250c1cx1491cy2383.jpg"),
    new Cocktail("Margarita", 3, "https://assets.afcdn.com/recipe/20180705/80288_w350h250c1cx1473cy1313.jpg")
  ];
  constructor(){}

  public getCocktails(): Cocktail[] {
    return this.cocktailsList
  }
}
