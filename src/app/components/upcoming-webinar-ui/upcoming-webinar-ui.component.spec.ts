import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingWebinarUiComponent } from './upcoming-webinar-ui.component';

describe('UpcomingWebinarUiComponent', () => {
  let component: UpcomingWebinarUiComponent;
  let fixture: ComponentFixture<UpcomingWebinarUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpcomingWebinarUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingWebinarUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
