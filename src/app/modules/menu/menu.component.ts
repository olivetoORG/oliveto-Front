import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private meta: Meta, private titleService: Title) { }

  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: ' قائمة الطعام | مطعم أوليفيتو فى ظهرة لبن. استمتع بتجربة تناول الطعام في أفضل مطعم في ظهرة لبن، المملكة العربية السعودية. نقدم أطباق شهية مستوحاة من المأكولات التقليدية، تتميز بالنكهات الفريدة والمكونات الطازجة. اكتشف أجواء راقية وخدمة عالية الجودة. زورونا اليوم لتستمتعوا بتجربة تناول الطعام الاستثنائية في ظهرة لبن' });
    this.titleService.setTitle('قائمة الطعام | مطعم أوليفيتو ظهرة لبن');
  }
}
