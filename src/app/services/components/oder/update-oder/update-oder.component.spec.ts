import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOderComponent } from './update-oder.component';

describe('UpdateOderComponent', () => {
  let component: UpdateOderComponent;
  let fixture: ComponentFixture<UpdateOderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateOderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
