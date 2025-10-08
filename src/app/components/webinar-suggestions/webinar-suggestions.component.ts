import { Component } from '@angular/core';
import { StaticConfig } from '../../configs/static.config';
import { WebinarCardUiComponent } from '../../shared/webinar-card-ui/webinar-card-ui.component';

@Component({
  selector: 'app-webinar-suggestions',
  standalone: true,
  imports: [
    WebinarCardUiComponent
  ],
  templateUrl: './webinar-suggestions.component.html',
  styleUrl: './webinar-suggestions.component.scss'
})
export class WebinarSuggestionsComponent {

  liveWebinarConfig = StaticConfig.webinarConfigs.liveWebinarConfig.splice(0,2);
}
