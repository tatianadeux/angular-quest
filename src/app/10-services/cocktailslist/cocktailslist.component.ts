import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/models/cocktail.model';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-cocktailslist',
  templateUrl: './cocktailslist.component.html',
  styleUrls: ['./cocktailslist.component.scss']
})
export class CocktailslistComponent implements OnInit {

  /* liste qui contiendra tous les pokémons*/
  public cocktailsList: Cocktail[] = [];

  constructor(public cocktailService: CocktailService) { }
    /* instanciation du service */

  public ngOnInit(): Cocktail[] {
    this.cocktailService.getCocktailsList()
      .subscribe(
        (cocktailArray: Cocktail[]) => {
          this.cocktailsList = cocktailArray
          console.log(this.cocktailsList);
          console.log(cocktailArray);
        }
      )
    return this.cocktailsList;
  }
}
