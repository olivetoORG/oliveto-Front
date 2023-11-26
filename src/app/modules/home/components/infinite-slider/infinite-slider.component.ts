import { Component } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-infinite-slider',
  templateUrl: './infinite-slider.component.html',
  styleUrls: ['./infinite-slider.component.scss'],
})
export class InfiniteSliderComponent {
  constructor(private mainService: MainServiceService) {}
  bannerData: any[] = [];

  ngOnInit(): void {
    new Promise((resolve) => {
      this.mainService.getBanner().subscribe({
        next: (res: any): void => {
          if (res) {
            this.bannerData = res?.data;
            resolve(true);
            console.log(this.bannerData);
          }
        },
        error: (error) => {},
      });
    }).then(() => {});
  }
}
