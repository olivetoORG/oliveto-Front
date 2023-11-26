import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OffersComponent } from './offers/offers/offers.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Oliveto';

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private modalService: NgbModal
  ) {}

  openModal() {
    const modalRef = this.modalService.open(OffersComponent, {
      size: 'md',
      centered: true,
    }); // Open your modal component
    // You can pass data to the modal component using modalRef.componentInstance.property = value;
    // For example: modalRef.componentInstance.data = someData;
    modalRef.result
      .then((result) => {
        // Handle modal close/dismiss result if needed
        console.log(`Modal closed with result: ${result}`);
      })
      .catch((reason) => {
        // Handle modal dismiss/cancel reason if needed
        console.log(`Modal dismissed with reason: ${reason}`);
      });
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      if (isPlatformBrowser(this.platformId)) {
        window.scroll(0, 0);
      }
    });
  }
}
