import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
      title: 'Oliveto | مطعم أوليفيتو ظهرة لبن'
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
    title: 'من نحن'
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./modules/menu/menu.module').then((m) => m.MenuModule),
    title: 'قائمة الطعام'
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/contact-us/contact-us.module').then(
        (m) => m.ContactUsModule
      ),
    title: 'تواصل معنا'
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./modules/gallery/gallery.module').then((m) => m.GalleryModule),
    title: 'الألبوم'
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
