import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

import { CocktailslistComponent } from './10-services/cocktailslist/cocktailslist.component';
import { Cocktail } from './models/cocktail.model';
import { CocktailService } from './services/cocktail.service';

describe('Quest Test Suite', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, BrowserModule],
      declarations: [
        CocktailslistComponent
      ],
    }).compileComponents();
  }));

  fit('service should be created', () => {
    const service: CocktailService = TestBed.inject(CocktailService);
    expect(service).toBeTruthy();
  });

  fit('service should have a "getCocktails" method which returns an Observable<Cocktail[]> object', () => {
    const service: CocktailService = TestBed.inject(CocktailService);
    service.getCocktailsList().subscribe(
      (cocktails: any[]) => {
        expect(cocktails.length).toBeGreaterThan(0);
      }
    );
  });

  fit('should create a CocktailListComponent instance', async(() => {
    const fixture = TestBed.createComponent(CocktailslistComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  fit(
    'component should have a public property named "cocktails"',
    async(
      () => {
        const fixture = TestBed.createComponent(CocktailslistComponent);
        fixture.detectChanges();
        expect(fixture.componentInstance.cocktailsList).toBeTruthy();
      }
    )
  );

  fit(
    'component should display at least one cocktail',
    async(
      () => {
        const fixture = TestBed.createComponent(CocktailslistComponent);
        const service: CocktailService = TestBed.inject(CocktailService);
        const mock: Observable<Cocktail[]> = of([
          {
            name: 'bloody mary',
            price: 1,
            img: 'https://i.4pcdn.org/s4s/1398123404333.gif'
          }
        ]);

        spyOn(service, 'getCocktailsList').and.returnValue( mock );

        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        const content = compiled.textContent;
        const first = fixture.componentInstance.cocktailsList[0];
        console.log(fixture.componentInstance.cocktailsList, first);
        expect(content).toContain(first.name);
      }
    )
  );
});
