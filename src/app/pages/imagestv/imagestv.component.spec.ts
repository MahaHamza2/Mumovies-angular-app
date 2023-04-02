import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagestvComponent } from './imagestv.component';

describe('ImagestvComponent', () => {
  let component: ImagestvComponent;
  let fixture: ComponentFixture<ImagestvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagestvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagestvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
