"use strict";
exports.id = 816;
exports.ids = [816];
exports.modules = {

/***/ 85420:
/*!***********************************************************!*\
  !*** ./src/app/modules/gallery/gallery-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GalleryRoutingModule: () => (/* binding */ GalleryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.component */ 42269);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);




const routes = [{
  path: '',
  component: _gallery_component__WEBPACK_IMPORTED_MODULE_0__.GalleryComponent
}];
class GalleryRoutingModule {
  static #_ = this.ɵfac = function GalleryRoutingModule_Factory(t) {
    return new (t || GalleryRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: GalleryRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GalleryRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 42269:
/*!******************************************************!*\
  !*** ./src/app/modules/gallery/gallery.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GalleryComponent: () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lightbox */ 80826);
/* harmony import */ var src_app_services_main_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/main-service.service */ 26923);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _shared_components_section_title_section_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/section-title/section-title.component */ 21213);





function GalleryComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function GalleryComponent_div_4_Template_img_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const i_r2 = restoredCtx.index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.open(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const image_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", image_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}
class GalleryComponent {
  constructor(_lightboxConfig, _lightbox, mainService) {
    this._lightboxConfig = _lightboxConfig;
    this._lightbox = _lightbox;
    this.mainService = mainService;
    this.galleryList = [];
    this._albums = [];
    // override default config
    this._lightboxConfig.centerVertically = true;
    this._lightboxConfig.disableScrolling = true;
    this._lightboxConfig.alwaysShowNavOnTouchDevices = true;
    this._lightboxConfig.fitImageInViewPort = true;
    this._lightboxConfig.showImageNumberLabel = true;
    this._lightboxConfig.wrapAround = true;
  }
  ngOnInit() {
    this.mainService.getAllGalleries().subscribe({
      next: res => {
        if (res && res.data && res.data.data) {
          this.galleryList = res.data.data;
          this.constructAlbums();
        }
      },
      error: error => {}
    });
  }
  constructAlbums() {
    for (let i = 0; i < this.galleryList.length; i++) {
      if (this.galleryList[i].image && this.galleryList[i].title) {
        const album = {
          id: this.galleryList[i].id,
          src: this.galleryList[i].image,
          caption: this.galleryList[i].title,
          thumb: this.galleryList[i].image
        };
        this._albums.push(album);
      } else {
        console.error('Missing image or title for gallery item:', this.galleryList[i]);
      }
    }
  }
  open(index) {
    this._lightbox.open(this._albums, index);
  }
  close() {
    this._lightbox.close();
  }
  static #_ = this.ɵfac = function GalleryComponent_Factory(t) {
    return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.LightboxConfig), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.Lightbox), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_main_service_service__WEBPACK_IMPORTED_MODULE_1__.MainServiceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: GalleryComponent,
    selectors: [["app-gallery"]],
    decls: 5,
    vars: 4,
    consts: [["id", "gallery", 1, "section-padding"], [3, "title", "sectionTitleClass"], [1, "container"], [1, "row", "justify-content-start", "align-items-center"], ["class", "col-12 col-md-6 col-lg-4 col-xl-4 text-center mb-4", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-lg-4", "col-xl-4", "text-center", "mb-4"], [1, "img-container"], ["alt", "\u0645\u0637\u0639\u0645 \u0623\u0648\u0644\u064A\u0641\u064A\u062A\u0648 \u0638\u0647\u0631\u0629 \u0644\u0628\u0646", "loading", "lazy", 1, "w-auto", "img-thumb", 3, "src", "click"]],
    template: function GalleryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-section-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, GalleryComponent_div_4_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "\u0627\u0644\u0623\u0644\u0628\u0648\u0645")("sectionTitleClass", true)("sectionTitleClass", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.galleryList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _shared_components_section_title_section_title_component__WEBPACK_IMPORTED_MODULE_2__.SectionTitleComponent],
    styles: ["#gallery[_ngcontent-%COMP%]   .img-thumb[_ngcontent-%COMP%] {\n  max-width: 100% !important;\n  height: auto !important;\n}\n\n#gallery[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  margin: 0 auto !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiI2dhbGxlcnkgLmltZy10aHVtYiB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNnYWxsZXJ5IC5pbWctY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gIC8vIG1heC13aWR0aDogNTAwcHggIWltcG9ydGFudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 23816:
/*!***************************************************!*\
  !*** ./src/app/modules/gallery/gallery.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GalleryModule: () => (/* binding */ GalleryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery-routing.module */ 85420);
/* harmony import */ var _gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.component */ 42269);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 84752);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-lightbox */ 80826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 59936);






class GalleryModule {
  static #_ = this.ɵfac = function GalleryModule_Factory(t) {
    return new (t || GalleryModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: GalleryModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__.GalleryRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__.LightboxModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GalleryModule, {
    declarations: [_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _gallery_routing_module__WEBPACK_IMPORTED_MODULE_0__.GalleryRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__.LightboxModule]
  });
})();

/***/ }),

/***/ 26923:
/*!**************************************************!*\
  !*** ./src/app/services/main-service.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainServiceService: () => (/* binding */ MainServiceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 56448);


class MainServiceService {
  constructor(http) {
    this.http = http;
    this.baseUrl = 'https://oliveto-ksa.com/api';
  }
  getAllCategories() {
    return this.http.get(`${this.baseUrl}/categories`);
  }
  getAllProducts() {
    return this.http.get(`${this.baseUrl}/products`);
  }
  getAllGalleries() {
    return this.http.get(`${this.baseUrl}/galleries`);
  }
  sendContactData(data) {
    let formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);
    return this.http.post(`${this.baseUrl}/contact_us`, formData);
  }
  static #_ = this.ɵfac = function MainServiceService_Factory(t) {
    return new (t || MainServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: MainServiceService,
    factory: MainServiceService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

};
;
//# sourceMappingURL=816.js.map