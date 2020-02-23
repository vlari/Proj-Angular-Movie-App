import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlinepostComponent } from './headlinepost.component';

describe('HeadlinepostComponent', () => {
  let component: HeadlinepostComponent;
  let fixture: ComponentFixture<HeadlinepostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlinepostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlinepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
