import { Component } from '@angular/core';
import { WebinarCardUiComponent } from '../../shared/webinar-card-ui/webinar-card-ui.component';
import { StaticConfig } from '../../configs/static.config';

@Component({
  selector: 'app-live-webinar-ui',
  standalone: true,
  imports: [WebinarCardUiComponent],
  templateUrl: './live-webinar-ui.component.html',
  styleUrl: './live-webinar-ui.component.scss'
})
export class LiveWebinarUiComponent {

  liveWebinarConfig = StaticConfig.webinarConfigs.liveWebinarConfig

}
