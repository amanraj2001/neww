import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistdetailsComponent } from './productlistdetails.component';

describe('ProductlistdetailsComponent', () => {
  let component: ProductlistdetailsComponent;
  let fixture: ComponentFixture<ProductlistdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlistdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductlistdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
