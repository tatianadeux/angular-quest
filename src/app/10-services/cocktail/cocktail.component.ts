import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/models/cocktail.model';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  @Input()
  cocktail: Cocktail | undefined;

  constructor() {}

  ngOnInit(): void {}

}
