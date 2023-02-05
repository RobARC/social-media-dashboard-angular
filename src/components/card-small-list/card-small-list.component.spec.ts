import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSmallListComponent } from './card-small-list.component';

describe('CardSmallListComponent', () => {
  let component: CardSmallListComponent;
  let fixture: ComponentFixture<CardSmallListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSmallListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSmallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
