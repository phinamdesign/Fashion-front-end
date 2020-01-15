import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCommenterComponent } from './update-commenter.component';

describe('UpdateCommenterComponent', () => {
  let component: UpdateCommenterComponent;
  let fixture: ComponentFixture<UpdateCommenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCommenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCommenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
