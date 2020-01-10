import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsOderComponent } from './details-oder.component';

describe('DetailsOderComponent', () => {
  let component: DetailsOderComponent;
  let fixture: ComponentFixture<DetailsOderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsOderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsOderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
