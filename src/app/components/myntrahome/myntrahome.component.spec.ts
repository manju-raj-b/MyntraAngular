import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyntrahomeComponent } from './myntrahome.component';

describe('MyntrahomeComponent', () => {
  let component: MyntrahomeComponent;
  let fixture: ComponentFixture<MyntrahomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyntrahomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyntrahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
