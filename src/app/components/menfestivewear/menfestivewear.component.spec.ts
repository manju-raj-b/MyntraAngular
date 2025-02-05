import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenfestivewearComponent } from './menfestivewear.component';

describe('MenfestivewearComponent', () => {
  let component: MenfestivewearComponent;
  let fixture: ComponentFixture<MenfestivewearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenfestivewearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenfestivewearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
