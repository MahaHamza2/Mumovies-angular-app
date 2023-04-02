import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorstvComponent } from './actorstv.component';

describe('ActorstvComponent', () => {
  let component: ActorstvComponent;
  let fixture: ComponentFixture<ActorstvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorstvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActorstvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
