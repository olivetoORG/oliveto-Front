import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss'],
})
export class ScrollButtonComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  windowScrolled = false;

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.scrollY !== 0;
    });
  }
  scrollToTop(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scroll(0, 0);
    }
    // window.scrollTo(0, 0);
  }
}
