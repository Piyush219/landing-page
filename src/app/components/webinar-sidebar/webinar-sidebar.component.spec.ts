import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarSidebarComponent } from './webinar-sidebar.component';

describe('WebinarSidebarComponent', () => {
  let component: WebinarSidebarComponent;
  let fixture: ComponentFixture<WebinarSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebinarSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebinarSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
