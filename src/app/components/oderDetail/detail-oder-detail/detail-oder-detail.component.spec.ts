import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOderDetailComponent } from './detail-oder-detail.component';

describe('DetailOderDetailComponent', () => {
  let component: DetailOderDetailComponent;
  let fixture: ComponentFixture<DetailOderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailOderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailOderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
