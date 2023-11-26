import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { InfiniteSliderComponent } from './components/infinite-slider/infinite-slider.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuCarouselComponent } from './components/menu-carousel/menu-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MenuTableComponent } from './components/menu-table/menu-table.component';

@NgModule({
  declarations: [
    HomeComponent,
    InfiniteSliderComponent,
    HeaderComponent,
    MenuCarouselComponent,
    MenuTableComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, CarouselModule],
})
export class HomeModule {}
