import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideostvComponent } from './videostv.component';

describe('VideostvComponent', () => {
  let component: VideostvComponent;
  let fixture: ComponentFixture<VideostvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideostvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideostvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
