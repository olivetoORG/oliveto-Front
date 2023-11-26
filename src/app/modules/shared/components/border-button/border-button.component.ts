import { Component, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-border-button',
  templateUrl: './border-button.component.html',
  styleUrls: ['./border-button.component.scss'],
})
export class BorderButtonComponent {
  @Input() buttonName: string = '';
  @Input() routerLink: any;
  @Input() centered: boolean = false;
  @Input() buttonType: string = '';
  @Output() routerLinkAction = new EventEmitter();

  buttonRouteclick() {
    this.routerLinkAction.emit();
  }
}
