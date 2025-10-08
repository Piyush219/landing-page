import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarCardUiComponent } from './webinar-card-ui.component';

describe('WebinarCardUiComponent', () => {
  let component: WebinarCardUiComponent;
  let fixture: ComponentFixture<WebinarCardUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebinarCardUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebinarCardUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
