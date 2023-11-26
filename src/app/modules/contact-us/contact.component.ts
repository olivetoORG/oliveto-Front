import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private meta: Meta, private titleService: Title) { }

  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: ' تواصل معنا مطعم أوليفيتو فى ظهرة لبن. استمتع بتجربة تناول الطعام في أفضل مطعم في ظهرة لبن، المملكة العربية السعودية. نقدم أطباق شهية مستوحاة من المأكولات التقليدية، تتميز بالنكهات الفريدة والمكونات الطازجة. اكتشف أجواء راقية وخدمة عالية الجودة. زورونا اليوم لتستمتعوا بتجربة تناول الطعام الاستثنائية في ظهرة لبن' }); this.titleService.setTitle('تواصل معنا | مطعم أوليفيتو ظهرة لبن');
  }
}