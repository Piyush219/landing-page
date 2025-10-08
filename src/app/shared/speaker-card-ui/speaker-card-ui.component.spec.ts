import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerCardUiComponent } from './speaker-card-ui.component';

describe('SpeakerCardUiComponent', () => {
  let component: SpeakerCardUiComponent;
  let fixture: ComponentFixture<SpeakerCardUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakerCardUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakerCardUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
