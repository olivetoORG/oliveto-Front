import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  constructor() {}
  carouselItems: any[] = [
    {
      content: 'Excellent taste and awesome staff and nice place...keep on',
      name: 'Amr Hossam',
      location: 'Ksa',
    },
    {
      content: 'I would come again in the future for sure , loved everything',
      name: 'Nour Ehab',
      location: 'Egypt',
    },
    {
      content: 'The service is great, and the staff is very friendly, but the bread was not fresh',
      name: 'Ahmed Helmy',
      location: 'Egypt',
    },
  ];
}
