import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/models/cocktail.model';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-cocktailslist',
  templateUrl: './cocktailslist.component.html',
  styleUrls: ['./cocktailslist.component.scss']
})
export class CocktailslistComponent implements OnInit {

  public cocktailsList: Cocktail[] = [];
  private service: CocktailService;

  constructor(public paramService: CocktailService) {
    this.service = paramService;
  }

  public ngOnInit(): void {
    this.service.getCocktails().subscribe(
      /*(cocktailArryay: Cocktail[]) => {
        this.cocktailsList = cocktailArryay
      }*/
    )
  }
}
