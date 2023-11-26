import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-normal-button',
  templateUrl: './normal-button.component.html',
  styleUrls: ['./normal-button.component.scss'],
})
export class NormalButtonComponent {
  @Input() buttonBackgroundColor: string = '';
  @Input() buttonName: string = '';
  @Input() routerLink: any;
  @Input() randomButtonAction: any;
  @Input() buttonType: string = '';
  @Output() routerLinkAction = new EventEmitter();

  buttonRouteclick() {
    this.routerLinkAction.emit();
  }
}
