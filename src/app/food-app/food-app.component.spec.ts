import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAppComponent } from './food-app.component';

describe('FoodAppComponent', () => {
  let component: FoodAppComponent;
  let fixture: ComponentFixture<FoodAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
