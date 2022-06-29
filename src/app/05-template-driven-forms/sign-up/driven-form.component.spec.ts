import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivenFormComoponent } from './driven-form.component';

describe('SignUpComponent', () => {
  let component: DrivenFormComoponent;
  let fixture: ComponentFixture<DrivenFormComoponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivenFormComoponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivenFormComoponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
