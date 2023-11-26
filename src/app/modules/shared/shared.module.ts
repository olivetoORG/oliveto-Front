import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CustomSectionComponent } from './components/custom-section/custom-section.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { BorderButtonComponent } from './components/border-button/border-button.component';
import { NormalButtonComponent } from './components/normal-button/normal-button.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { WorkingHoursComponent } from './components/working-hours/working-hours.component';
import { BgDivComponent } from './components/bg-div/bg-div.component';
import { CustomSecondSectionComponent } from './components/custom-second-section/custom-second-section.component';
import { RouterModule } from '@angular/router';
import { ScrollButtonComponent } from './components/scroll-button/scroll-button.component';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';

const declarations = [
  FooterComponent,
  NavbarComponent,
  TestimonialsComponent,
  CustomSectionComponent,
  PageHeaderComponent,
  BorderButtonComponent,
  NormalButtonComponent,
  SectionTitleComponent,
  WorkingHoursComponent,
  BgDivComponent,
  CustomSecondSectionComponent,
  ScrollButtonComponent,
  PageLoaderComponent
];
@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, RouterModule],
  exports: [...declarations],
})
export class SharedModule {}
