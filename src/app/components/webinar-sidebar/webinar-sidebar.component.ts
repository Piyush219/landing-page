import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-webinar-sidebar',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatCheckboxModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './webinar-sidebar.component.html',
  styleUrl: './webinar-sidebar.component.scss',
})
export class WebinarSidebarComponent {
  specialties = [
    { name: 'Acupuncture', checked: false },
    { name: 'Allergy and Immunology', checked: false },
    { name: 'Anaesthesiology', checked: false },
    { name: 'Clinical Nutrition', checked: false },
    { name: 'General Practitioner', checked: false },
  ];

  filterGroups = [
    { title: 'Specialties', expanded: true, items: this.specialties },
    { title: 'Topics', expanded: false , items: this.specialties},
    { title: 'Speakers', expanded: false, items: this.specialties },
    { title: 'Pharma & associations', expanded: false, items: this.specialties },
  ];
}
