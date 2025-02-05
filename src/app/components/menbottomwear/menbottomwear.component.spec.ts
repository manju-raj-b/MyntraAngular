import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenbottomwearComponent } from './menbottomwear.component';

describe('MenbottomwearComponent', () => {
  let component: MenbottomwearComponent;
  let fixture: ComponentFixture<MenbottomwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenbottomwearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenbottomwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
