import { Component } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-infinite-slider',
  templateUrl: './infinite-slider.component.html',
  styleUrls: ['./infinite-slider.component.scss'],
})
export class InfiniteSliderComponent {
  constructor(private mainService: MainServiceService) { }


  
}
