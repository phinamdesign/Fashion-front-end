import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommenterComponent } from './create-commenter.component';

describe('CreateCommenterComponent', () => {
  let component: CreateCommenterComponent;
  let fixture: ComponentFixture<CreateCommenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCommenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
