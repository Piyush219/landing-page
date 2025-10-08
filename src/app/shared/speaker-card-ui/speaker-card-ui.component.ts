import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-speaker-card-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speaker-card-ui.component.html',
  styleUrl: './speaker-card-ui.component.scss'
})
export class SpeakerCardUiComponent {

  @Input() config:any;

}
