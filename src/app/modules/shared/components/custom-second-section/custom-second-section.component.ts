import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-second-section',
  templateUrl: './custom-second-section.component.html',
  styleUrls: ['./custom-second-section.component.scss'],
})
export class CustomSecondSectionComponent {
  @Input() sectionTitle: string = '';
  @Input() sectionDesc: string = '';
  @Input() imgsrc: string = '';
  @Input() sectionTitleColor: string = '';
  @Input() sectionDescColor: string = '';
  @Input() sectionDescSize: string = '';
  @Input() sectionBackgroundColor: string = '';
  @Input() customFontClass: boolean = false;
  @Input() customColClass: boolean = false;
  @Input() customColsClass: boolean = false;
  @Input() customAlignClass: boolean = false;
  @Input() customimgWidthClass: boolean = false;
}
