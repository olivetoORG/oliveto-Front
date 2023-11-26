import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-menu-section',
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.scss'],
})
export class MenuSectionComponent {
  isSandwiches: boolean = false;

  constructor(private mainService: MainServiceService) {}
  categoryList: any[] = [];

  // categories: any[] = [
  //   {
  //     name: 'وجبات المشاوى',
  //     products: [
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'وجبات الشاورما',
  //     products: [
  //       {
  //         name: 'ساندوتش شاورما  ',
  //         category: 'chicken',
  //         calories: '200',
  //         person_price: '12',
  //       },
  //       {
  //         name: 'ساندوتش لحمة',
  //         category: 'chicken',
  //         calories: '240',
  //         person_price: '10',
  //       },
  //       {
  //         name: 'ساندوتش شاورما  ',
  //         category: 'chicken',
  //         calories: '200',
  //         person_price: '12',
  //       },
  //       {
  //         name: 'ساندوتش لحمة',
  //         category: 'chicken',
  //         calories: '240',
  //         person_price: '10',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'وجبات المشاوى',
  //     products: [
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'وجبات المشاوى',
  //     products: [
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'وجبات المشاوى',
  //     products: [
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'وجبات المشاوى',
  //     products: [
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'وجبات المشاوى',
  //     products: [
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'وجبات المشاوى',
  //     products: [
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'وجبات المشاوى',
  //     products: [
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'وجبات المشاوى',
  //     products: [
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'وجبات المشاوى',
  //     products: [
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //     ],
  //   },
  //   {
  //     name: 'وجبات المشاوى',
  //     products: [
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //       {
  //         name: 'مشكل مشاوى',
  //         category: 'bbq',
  //         calories: '300',
  //         person_price: '15',
  //         kilo_price: '60',
  //       },
  //       {
  //         name: 'مشكل دجاج',
  //         category: 'bbq',
  //         calories: '280',
  //         person_price: '20',
  //         kilo_price: '80',
  //       },
  //     ],
  //   },
  // ];

  public hasKiloPrice(products: any[]): boolean {
    return products.some(
      (p) => p.kilo_price !== undefined && p.kilo_price !== null
    );
  }

  ngOnInit(): void {
    new Promise((resolve) => {
      this.mainService.getAllCategories().subscribe({
        next: (res: any): void => {
          if (res) {
            this.categoryList = res?.data?.data;
            resolve(true);
          }
        },
        error: (error) => {
        },
      });
    }).then(() => {});
  }
}
