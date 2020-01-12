import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOderDetailComponent } from './create-oder-detail.component';

describe('CreateOderDetailComponent', () => {
  let component: CreateOderDetailComponent;
  let fixture: ComponentFixture<CreateOderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
