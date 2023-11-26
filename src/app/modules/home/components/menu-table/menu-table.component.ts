import { Component } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss'],
})
export class MenuTableComponent {
  categoryList: any[] = [];

  constructor(
    private mainService: MainServiceService,
    private router: Router
  ) {}

  navigateTo() {
    this.router.navigate(['/', 'menu']);
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
        error: (error) => {},
      });
    }).then(() => {});
  }
}
