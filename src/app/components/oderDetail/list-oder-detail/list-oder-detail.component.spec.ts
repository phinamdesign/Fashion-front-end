import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOderDetailComponent } from './list-oder-detail.component';

describe('ListOderDetailComponent', () => {
  let component: ListOderDetailComponent;
  let fixture: ComponentFixture<ListOderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
