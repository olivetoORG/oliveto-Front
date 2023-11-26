import { Component,HostListener } from '@angular/core';
import { RouterModule, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
  @HostListener('window:scroll', ['$event'])
	onWindowScroll() {
		let element = document.querySelector('nav') as HTMLElement;
    let container = document.querySelector('.container-fluid') as HTMLElement;
		if (window.scrollY > element.clientHeight) {
			element.classList.add('nav-scroll');
		} else {
			element.classList.remove('nav-scroll');
		}
	}
}
