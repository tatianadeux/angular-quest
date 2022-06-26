import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnomatopoeiasComponent } from './onomatopoeias.component';

describe('OnomatopoeiasComponent', () => {
  let component: OnomatopoeiasComponent;
  let fixture: ComponentFixture<OnomatopoeiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnomatopoeiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnomatopoeiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
