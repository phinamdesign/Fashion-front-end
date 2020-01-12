import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtegoryDeleteComponent } from './ctegory-delete.component';

describe('CtegoryDeleteComponent', () => {
  let component: CtegoryDeleteComponent;
  let fixture: ComponentFixture<CtegoryDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtegoryDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtegoryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
