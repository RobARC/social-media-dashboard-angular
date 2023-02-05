import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSmallComponent } from './card-small.component';

describe('CardSmallComponent', () => {
  let component: CardSmallComponent;
  let fixture: ComponentFixture<CardSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
