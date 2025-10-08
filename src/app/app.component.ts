import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { WebinarCardUiComponent } from './shared/webinar-card-ui/webinar-card-ui.component';
import { SpeakerCardUiComponent } from './shared/speaker-card-ui/speaker-card-ui.component';
import { LiveWebinarUiComponent } from './components/live-webinar-ui/live-webinar-ui.component';
import { UpcomingWebinarUiComponent } from './components/upcoming-webinar-ui/upcoming-webinar-ui.component';
import { StaticConfig } from './configs/static.config';
import { AllTopicsComponent } from './components/all-topics/all-topics.component';
import { WebinarSidebarComponent } from './components/webinar-sidebar/webinar-sidebar.component';
import { WebinarSuggestionsComponent } from './components/webinar-suggestions/webinar-suggestions.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    LiveWebinarUiComponent,
    WebinarCardUiComponent,
    SpeakerCardUiComponent,
    UpcomingWebinarUiComponent,
    AllTopicsComponent,
    WebinarSidebarComponent,
    WebinarSuggestionsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'docquity-task';

  speakerCardConfig = StaticConfig.speakersConfig
}
