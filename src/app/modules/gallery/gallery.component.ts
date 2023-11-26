import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';
import { MainServiceService } from 'src/app/services/main-service.service';

interface Album {
  id: number;
  src: string;
  caption: string;
  thumb: string;
}
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  galleryList: any[] = [];

  _albums: Album[] = [];

  constructor(
    private _lightboxConfig: LightboxConfig,
    private _lightbox: Lightbox,
    private mainService: MainServiceService,
    private meta: Meta,
    private titleService: Title
  ) {
    // override default config
    this._lightboxConfig.centerVertically = true;
    this._lightboxConfig.disableScrolling = true;
    this._lightboxConfig.alwaysShowNavOnTouchDevices = true;
    this._lightboxConfig.fitImageInViewPort = true;
    this._lightboxConfig.showImageNumberLabel = true;
    this._lightboxConfig.wrapAround = true;
  }

  ngOnInit(): void {
    this.mainService.getAllGalleries().subscribe({
      next: (res: any): void => {
        if (res && res.data && res.data.data) {
          this.galleryList = res.data.data;
          this.constructAlbums();
        }
      },
      error: (error) => {
      },
    });
    this.meta.updateTag({ name: 'description', content: ' صور المطعم | مطعم أوليفيتو فى ظهرة لبن. استمتع بتجربة تناول الطعام في أفضل مطعم في ظهرة لبن، المملكة العربية السعودية. نقدم أطباق شهية مستوحاة من المأكولات التقليدية، تتميز بالنكهات الفريدة والمكونات الطازجة. اكتشف أجواء راقية وخدمة عالية الجودة. زورونا اليوم لتستمتعوا بتجربة تناول الطعام الاستثنائية في ظهرة لبن' });
    this.titleService.setTitle('الألبوم | مطعم أوليفيتو ظهرة لبن');
  }

  constructAlbums(): void {
    for (let i = 0; i < this.galleryList.length; i++) {
      if (this.galleryList[i].image && this.galleryList[i].title) {
        const album = {
          id: this.galleryList[i].id,
          src: this.galleryList[i].image,
          caption: this.galleryList[i].title,
          thumb: this.galleryList[i].image,
        };
        this._albums.push(album);
      } else {
        console.error(
          'Missing image or title for gallery item:',
          this.galleryList[i]
        );
      }
    }
  }

  open(index: number): void {
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    this._lightbox.close();
  }

}
