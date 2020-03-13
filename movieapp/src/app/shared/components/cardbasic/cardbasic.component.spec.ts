import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbasicComponent } from './cardbasic.component';

describe('CardbasicComponent', () => {
  let component: CardbasicComponent;
  let fixture: ComponentFixture<CardbasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardbasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
