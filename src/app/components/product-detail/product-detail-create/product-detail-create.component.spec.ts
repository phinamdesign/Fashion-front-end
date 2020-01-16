import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailCreateComponent } from './product-detail-create.component';

describe('ProductDetailCreateComponent', () => {
  let component: ProductDetailCreateComponent;
  let fixture: ComponentFixture<ProductDetailCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
