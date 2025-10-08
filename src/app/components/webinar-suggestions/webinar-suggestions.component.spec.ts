import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarSuggestionsComponent } from './webinar-suggestions.component';

describe('WebinarSuggestionsComponent', () => {
  let component: WebinarSuggestionsComponent;
  let fixture: ComponentFixture<WebinarSuggestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebinarSuggestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebinarSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
