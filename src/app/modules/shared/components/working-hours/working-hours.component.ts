import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-working-hours',
  templateUrl: './working-hours.component.html',
  styleUrls: ['./working-hours.component.scss'],
})
export class WorkingHoursComponent {
  @Input() sectionDescColor: string = '';
  @Input() customClass: boolean = false;
}
