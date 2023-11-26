import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-section',
  templateUrl: './custom-section.component.html',
  styleUrls: ['./custom-section.component.scss'],
})
export class CustomSectionComponent {
  @Input() sectionTitle: string = '';
  @Input() sectionDesc: string = '';
  @Input() imgsrc: string = '';
  @Input() sectionDescColor: string = '';
  @Input() sectionDescSize: string = '';
  @Input() customFontClass: boolean = false;
}
