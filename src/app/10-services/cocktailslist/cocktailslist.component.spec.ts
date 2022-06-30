import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailslistComponent } from './cocktailslist.component';

describe('CocktailslistComponent', () => {
  let component: CocktailslistComponent;
  let fixture: ComponentFixture<CocktailslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
