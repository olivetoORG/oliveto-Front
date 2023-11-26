import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/lib/models/owl-options.model';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-menu-carousel',
  templateUrl: './menu-carousel.component.html',
  styleUrls: ['./menu-carousel.component.scss'],
})
export class MenuCarouselComponent implements OnInit {
  productsList: any[] = [];

  constructor(private mainService: MainServiceService) {}
  customOptions: OwlOptions = {
    stagePadding: 50,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    margin: 10,
    lazyLoad: false,
    pullDrag: false,
    dots: true,
    rtl: true,
    autoplay: false,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-arrow-right"></i>',
      '<i class="fa-solid fa-arrow-left"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      767: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1280: {
        items: 3,
      },
      1500: {
        items: 4,
      },
    },
    nav: true,
  };

  ngOnInit(): void {
    new Promise((resolve) => {
      this.mainService.getAllProducts().subscribe({
        next: (res: any): void => {
          if (res) {
            this.productsList = res?.data?.data;
            resolve(true);
          }
        },
        error: (error) => {},
      });
    }).then(() => {});
  }
}
