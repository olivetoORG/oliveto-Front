import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { SharedModule } from '../shared/shared.module';
import { LightboxModule } from 'ngx-lightbox';

@NgModule({
  declarations: [GalleryComponent],
  imports: [CommonModule, GalleryRoutingModule, SharedModule, LightboxModule],
})
export class GalleryModule {}
