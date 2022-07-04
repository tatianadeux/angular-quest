import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
      providedIn: 'root'
})

export class CocktailService {

  private service: HttpClient;

  constructor(paramService: HttpClient){
    this.service = paramService;
  }

  public getCocktails(): Observable<string> {
    const observable1: Observable<any> = this.service.get("assets/cocktails.json")
    const treatment = (param_data:any) => {
        return param_data as string
    }
    return observable1.pipe(map(treatment))
  }
}
