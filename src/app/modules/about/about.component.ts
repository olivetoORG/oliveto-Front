import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(private router: Router, private meta: Meta, private titleService: Title) { }

  ngOnInit() {
    this.meta.updateTag({ name: 'description', content: ' عن المطعم | مطعم أوليفيتو فى ظهرة لبن. استمتع بتجربة تناول الطعام في أفضل مطعم في ظهرة لبن، المملكة العربية السعودية. نقدم أطباق شهية مستوحاة من المأكولات التقليدية، تتميز بالنكهات الفريدة والمكونات الطازجة. اكتشف أجواء راقية وخدمة عالية الجودة. زورونا اليوم لتستمتعوا بتجربة تناول الطعام الاستثنائية في ظهرة لبن' });
    this.titleService.setTitle('من نحن | مطعم أوليفيتو ظهرة لبن');
  }
  navigateTo() {
    this.router.navigate(['/', 'menu']);
  }
}
