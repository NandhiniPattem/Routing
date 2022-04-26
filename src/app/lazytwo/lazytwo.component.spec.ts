import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazytwoComponent } from './lazytwo.component';

describe('LazytwoComponent', () => {
  let component: LazytwoComponent;
  let fixture: ComponentFixture<LazytwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazytwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
