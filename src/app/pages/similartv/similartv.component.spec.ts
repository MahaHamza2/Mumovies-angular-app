import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilartvComponent } from './similartv.component';

describe('SimilartvComponent', () => {
  let component: SimilartvComponent;
  let fixture: ComponentFixture<SimilartvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilartvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilartvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
