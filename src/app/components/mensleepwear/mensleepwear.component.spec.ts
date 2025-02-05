import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensleepwearComponent } from './mensleepwear.component';

describe('MensleepwearComponent', () => {
  let component: MensleepwearComponent;
  let fixture: ComponentFixture<MensleepwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensleepwearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensleepwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
