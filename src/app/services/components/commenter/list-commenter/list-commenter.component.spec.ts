import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommenterComponent } from './list-commenter.component';

describe('ListCommenterComponent', () => {
  let component: ListCommenterComponent;
  let fixture: ComponentFixture<ListCommenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCommenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCommenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
