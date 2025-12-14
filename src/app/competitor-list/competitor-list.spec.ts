import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorList } from './competitor-list';

describe('CompetitorList', () => {
  let component: CompetitorList;
  let fixture: ComponentFixture<CompetitorList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetitorList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompetitorList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
