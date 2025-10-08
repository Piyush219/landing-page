import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-webinar-card-ui',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './webinar-card-ui.component.html',
  styleUrl: './webinar-card-ui.component.scss',
})
export class WebinarCardUiComponent {
  @Input() config: any;
  @Output() buttonClick = new EventEmitter<void>();

  constructor(){}


  ngOnInit(): void {
    console.log("Webinar Card Config:", this.config);
    
  }


  onButtonClick(): void {
    if (this.config?.button?.action) {
      this.config.button.action();
    } else {
      this.buttonClick.emit();
    }
  }

  // Another example card (maybe without some elements)
  anotherCardConfig = {
    thumbnailUrl: 'https://i.imgur.com/another-image.jpg',
    title: 'Introduction to Angular 18 Features',
    author: {
      name: 'Angular Team',
    },
    button: {
      text: 'Learn More',
    },
  };

  handleCardButtonClick(): void {
    console.log('Generic card button clicked!');
  }
}
