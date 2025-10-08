import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { StaticConfig } from '../../configs/static.config';

@Component({
  selector: 'app-all-topics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-topics.component.html',
  styleUrl: './all-topics.component.scss'
})
export class AllTopicsComponent {

  tags = StaticConfig.specializationTags;

}
