import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LightboxModule } from 'ngx-lightbox';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { OffersComponent } from './offers/offers/offers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [AppComponent, OffersComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CarouselModule,
    BrowserAnimationsModule,
    LightboxModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot(),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
