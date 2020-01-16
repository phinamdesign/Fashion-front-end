import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideShowProductComponent } from './slide-show-product.component';

describe('SlideShowProductComponent', () => {
  let component: SlideShowProductComponent;
  let fixture: ComponentFixture<SlideShowProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideShowProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideShowProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
