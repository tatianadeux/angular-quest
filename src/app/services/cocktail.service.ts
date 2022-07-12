import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Cocktail } from "../models/cocktail.model";

@Injectable({
      providedIn: 'root'
})

export class CocktailService {

  private baseUrl: string = 'assets/cocktails.json';

  constructor(private httpClient: HttpClient){}

  getCocktailsList(): Observable<Cocktail[]> {

    return this.httpClient.get<Cocktail[]>(`${this.baseUrl}`);

  }
}
