import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactLocationComponent } from './components/contact-location/contact-location.component';

@NgModule({
  declarations: [
    ContactComponent,
    ContactFormComponent,
    ContactLocationComponent,
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ContactUsModule {}
