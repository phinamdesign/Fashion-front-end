import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCommenterComponent } from './details-commenter.component';

describe('DetailsCommenterComponent', () => {
  let component: DetailsCommenterComponent;
  let fixture: ComponentFixture<DetailsCommenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCommenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCommenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
