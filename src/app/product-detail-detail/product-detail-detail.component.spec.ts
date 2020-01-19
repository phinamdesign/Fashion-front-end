import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailDetailComponent } from './product-detail-detail.component';

describe('ProductDetailDetailComponent', () => {
  let component: ProductDetailDetailComponent;
  let fixture: ComponentFixture<ProductDetailDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
