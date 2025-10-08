import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveWebinarUiComponent } from './live-webinar-ui.component';

describe('LiveWebinarUiComponent', () => {
  let component: LiveWebinarUiComponent;
  let fixture: ComponentFixture<LiveWebinarUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveWebinarUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveWebinarUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
