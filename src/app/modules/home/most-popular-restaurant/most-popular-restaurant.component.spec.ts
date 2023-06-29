import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularRestaurantComponent } from './most-popular-restaurant.component';

describe('MostPopularRestaurantComponent', () => {
  let component: MostPopularRestaurantComponent;
  let fixture: ComponentFixture<MostPopularRestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostPopularRestaurantComponent]
    });
    fixture = TestBed.createComponent(MostPopularRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
