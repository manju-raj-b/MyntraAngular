import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentopwearComponent } from './mentopwear.component';

describe('MentopwearComponent', () => {
  let component: MentopwearComponent;
  let fixture: ComponentFixture<MentopwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentopwearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentopwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
