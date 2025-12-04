import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBoxes } from './detail-boxes';

describe('DetailBoxes', () => {
  let component: DetailBoxes;
  let fixture: ComponentFixture<DetailBoxes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailBoxes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBoxes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
