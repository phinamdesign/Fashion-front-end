import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOderDetailComponent } from './update-oder-detail.component';

describe('UpdateOderDetailComponent', () => {
  let component: UpdateOderDetailComponent;
  let fixture: ComponentFixture<UpdateOderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
