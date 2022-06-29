import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInscriptionComponent } from './menu-inscription.component';

describe('SignupComponent', () => {
  let component: MenuInscriptionComponent;
  let fixture: ComponentFixture<MenuInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuInscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
