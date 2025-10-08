import { Component } from '@angular/core';
import { StaticConfig } from '../../configs/static.config';
import { WebinarCardUiComponent } from '../../shared/webinar-card-ui/webinar-card-ui.component';

@Component({
  selector: 'app-upcoming-webinar-ui',
  standalone: true,
  imports: [
    WebinarCardUiComponent
  ],
  templateUrl: './upcoming-webinar-ui.component.html',
  styleUrl: './upcoming-webinar-ui.component.scss'
})
export class UpcomingWebinarUiComponent {

  upComingWebinarConfig = StaticConfig.webinarConfigs.upComingWebinarConfig

}
