import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
})
export class SectionTitleComponent {
  @Input() title: string = '';
  @Input() sectionTitleClass: boolean = false;
  @Input() sectionPaddingClass: boolean = false;
}
