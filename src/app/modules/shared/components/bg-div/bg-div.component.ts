import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bg-div',
  templateUrl: './bg-div.component.html',
  styleUrls: ['./bg-div.component.scss'],
})
export class BgDivComponent {
  @Input() sectionBackgroundImg: string = '';
}
