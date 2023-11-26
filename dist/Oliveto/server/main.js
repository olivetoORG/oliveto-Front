/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 34991:
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* reexport safe */ _src_main_server__WEBPACK_IMPORTED_MODULE_6__.AppServerModule),
/* harmony export */   app: () => (/* binding */ app),
/* harmony export */   renderApplication: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__.renderApplication),
/* harmony export */   renderModule: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__.renderModule),
/* harmony export */   "ɵSERVER_CONTEXT": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__["ɵSERVER_CONTEXT"])
/* harmony export */ });
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/node */ 20650);
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nguniversal/express-engine */ 93389);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ 35162);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ 44638);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node:fs */ 87561);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_fs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! node:path */ 49411);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_main_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/main.server */ 49174);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-server */ 97014);








// ssr DOM
const domino = __webpack_require__(/*! domino */ 88264);
const fs = __webpack_require__(/*! fs */ 57147);
const path = __webpack_require__(/*! path */ 71017);
// index from browser build!
const template = fs.readFileSync(path.join('.', 'dist', 'Oliveto', 'browser', 'index.html')).toString();
// for mock global window by domino
const win = domino.createWindow(template);
// mock
global['window'] = win;
// not implemented property and functions
Object.defineProperty(win.document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});
// mock documnet
global['document'] = win.document;
// The Express app is exported so that it can be used by serverless Functions.
function app() {
  const server = express__WEBPACK_IMPORTED_MODULE_2__();
  const distFolder = (0,node_path__WEBPACK_IMPORTED_MODULE_5__.join)(process.cwd(), 'dist', 'Oliveto', 'browser');
  // const distFolder = join(process.cwd(), 'dist/Oliveto/browser');
  const indexHtml = (0,node_fs__WEBPACK_IMPORTED_MODULE_4__.existsSync)((0,node_path__WEBPACK_IMPORTED_MODULE_5__.join)(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', (0,_nguniversal_express_engine__WEBPACK_IMPORTED_MODULE_1__.ngExpressEngine)({
    bootstrap: _src_main_server__WEBPACK_IMPORTED_MODULE_6__.AppServerModule
  }));
  server.use(compression__WEBPACK_IMPORTED_MODULE_3__());
  server.set('view engine', 'html');
  server.set('views', distFolder);
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express__WEBPACK_IMPORTED_MODULE_2__["static"](distFolder, {
    maxAge: '1y'
  }));
  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__.APP_BASE_HREF,
        useValue: req.baseUrl
      }]
    });
  });
  return server;
}
function run() {
  const port = process.env['PORT'] || 4000;
  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
const mainModule = require.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}


  // EXPORTS added by @angular-devkit/build-angular
  
  

/***/ }),

/***/ 11838:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);



const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: ''
}, {
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ 495).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/home/home.module */ 13495)).then(m => m.HomeModule),
  title: 'Oliveto | مطعم أوليفيتو ظهرة لبن'
}, {
  path: 'about',
  loadChildren: () => __webpack_require__.e(/*! import() */ 815).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/about/about.module */ 29815)).then(m => m.AboutModule),
  title: 'من نحن'
}, {
  path: 'menu',
  loadChildren: () => __webpack_require__.e(/*! import() */ 443).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/menu/menu.module */ 33443)).then(m => m.MenuModule),
  title: 'قائمة الطعام'
}, {
  path: 'contact',
  loadChildren: () => __webpack_require__.e(/*! import() */ 154).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/contact-us/contact-us.module */ 10154)).then(m => m.ContactUsModule),
  title: 'تواصل معنا'
}, {
  path: 'gallery',
  loadChildren: () => __webpack_require__.e(/*! import() */ 816).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/gallery/gallery.module */ 23816)).then(m => m.GalleryModule),
  title: 'الألبوم'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 96846:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _modules_shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/shared/components/footer/footer.component */ 14254);
/* harmony import */ var _modules_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/shared/components/navbar/navbar.component */ 21895);
/* harmony import */ var _modules_shared_components_scroll_button_scroll_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/shared/components/scroll-button/scroll-button.component */ 4745);








class AppComponent {
  constructor(router, platformId) {
    this.router = router;
    this.platformId = platformId;
    this.title = 'Oliveto';
  }
  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)) {
        return;
      }
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_4__.isPlatformBrowser)(this.platformId)) {
        window.scroll(0, 0);
      }
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-navbar")(1, "router-outlet")(2, "app-scroll-button")(3, "app-footer");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _modules_shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _modules_shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _modules_shared_components_scroll_button_scroll_button_component__WEBPACK_IMPORTED_MODULE_2__.ScrollButtonComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 50041:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 41081);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 97378);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 11838);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 96846);
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/shared/shared.module */ 84752);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ 48249);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-lightbox */ 80826);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 56448);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 30868);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 59936);












class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    providers: [(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.provideClientHydration)()],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__.LightboxModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrModule.forRoot()]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule, ngx_lightbox__WEBPACK_IMPORTED_MODULE_3__.LightboxModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrModule]
  });
})();

/***/ }),

/***/ 21463:
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* binding */ AppServerModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-server */ 97014);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ 50041);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 96846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 59936);




class AppServerModule {
  static #_ = this.ɵfac = function AppServerModule_Factory(t) {
    return new (t || AppServerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppServerModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppServerModule, {
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
  });
})();

/***/ }),

/***/ 65365:
/*!**********************************************************************!*\
  !*** ./src/app/modules/shared/components/bg-div/bg-div.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BgDivComponent: () => (/* binding */ BgDivComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class BgDivComponent {
  constructor() {
    this.sectionBackgroundImg = '';
  }
  static #_ = this.ɵfac = function BgDivComponent_Factory(t) {
    return new (t || BgDivComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BgDivComponent,
    selectors: [["app-bg-div"]],
    inputs: {
      sectionBackgroundImg: "sectionBackgroundImg"
    },
    decls: 5,
    vars: 2,
    consts: [["id", "bgDiv", 1, "d-flex", "justify-content-center", "align-items-center"], [1, "container"], [1, "row"], [1, "col-12"], [1, "bgDiv", "py-5"]],
    template: function BgDivComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.sectionBackgroundImg + ")");
      }
    },
    styles: ["#bgDiv[_ngcontent-%COMP%] {\n  height: 50vh;\n  width: 100%;\n  background: url(\"/assets/home/hero.webp\") top center;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n  padding: 0;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: #ffffff;\n}\n\n#bgDiv[_ngcontent-%COMP%]:before {\n  content: \"\";\n  background: rgba(255, 248, 248, 0.2);\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n}\n\n@media (max-width: 992px) {\n  #bgDiv[_ngcontent-%COMP%] {\n    height: 30vh;\n  }\n}\n@media (max-width: 767px) {\n  #bgDiv[_ngcontent-%COMP%] {\n    height: 20vh;\n  }\n}\n@media (min-width: 992px) and (max-width: 1700px) {\n  #bgDiv[_ngcontent-%COMP%] {\n    height: 40vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9iZy1kaXYvYmctZGl2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxvREFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFLFlBQUE7RUFBRjtBQUNGO0FBR0E7RUFDRTtJQUNFLFlBQUE7RUFERjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiI2JnRGl2IHtcclxuICBoZWlnaHQ6IDUwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9ob21lL2hlcm8ud2VicFwiKSB0b3AgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4jYmdEaXY6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNDgsIDI0OCwgMC4yKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICNiZ0RpdiB7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAjYmdEaXYge1xyXG4gICAgaGVpZ2h0OiAyMHZoO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTcwMHB4KSB7XHJcbiAgI2JnRGl2IHtcclxuICAgIGhlaWdodDogNDB2aDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 47480:
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared/components/border-button/border-button.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BorderButtonComponent: () => (/* binding */ BorderButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 68804);



const _c0 = function (a0) {
  return [a0];
};
class BorderButtonComponent {
  constructor() {
    this.buttonName = '';
    this.centered = false;
  }
  static #_ = this.ɵfac = function BorderButtonComponent_Factory(t) {
    return new (t || BorderButtonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BorderButtonComponent,
    selectors: [["app-border-button"]],
    inputs: {
      buttonName: "buttonName",
      routerLink: "routerLink",
      centered: "centered"
    },
    decls: 2,
    vars: 5,
    consts: [[1, "btn", "btn-3", "fw-bolder", "border-btn", "px-4", "mt-3", "py-2", 3, "ngClass", "routerLink"]],
    template: function BorderButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.centered ? "mx-auto" : "ms-auto")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.routerLink));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonName);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: [".btn-3[_ngcontent-%COMP%], .btn-3[_ngcontent-%COMP%]::after {\n  transition: all 0.3s;\n}\n\n.btn-3[_ngcontent-%COMP%] {\n  background: none;\n  border-radius: 5px;\n  color: var(--Main-Brand-Color);\n  display: block;\n  font-size: 1.6em;\n  font-weight: bold;\n  margin-top: 1em;\n  padding: 2em 6em;\n  position: relative;\n  text-transform: uppercase;\n  border-top: 1px solid var(--Main-Brand-Color) !important;\n  border-bottom: 1px solid var(--Main-Brand-Color) !important;\n  border-radius: 0 !important;\n  font-size: 20px;\n}\n\n.btn-3[_ngcontent-%COMP%]::before, .btn-3[_ngcontent-%COMP%]::after {\n  background: var(--Main-Brand-Color);\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n}\n\n.btn-3[_ngcontent-%COMP%]:hover {\n  color: #FFF;\n}\n\n.btn-3[_ngcontent-%COMP%]::after {\n  height: 0;\n  left: 50%;\n  top: 50%;\n  width: 0;\n}\n\n.btn-3[_ngcontent-%COMP%]:hover:after {\n  height: 100%;\n  left: 0;\n  top: 0;\n  width: 100%;\n}\n\n@media (max-width: 992px) {\n  .border-btn[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .btn-3[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n}\n@media (max-width: 767px) {\n  .border-btn[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9ib3JkZXItYnV0dG9uL2JvcmRlci1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBS0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdEQUFBO0VBQ0EsMkRBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTs7RUFFRSxtQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBQTtFQUNGO0VBQ0E7SUFDRSxjQUFBO0VBQ0Y7QUFDRjtBQUVBO0VBQ0U7SUFDRSxlQUFBO0VBQUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tMyxcclxuLmJ0bi0zOjphZnRlciB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4uYnRuLTMge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1NYWluLUJyYW5kLUNvbG9yKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEuNmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICBwYWRkaW5nOiAyZW0gNmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1NYWluLUJyYW5kLUNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1NYWluLUJyYW5kLUNvbG9yKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tMzo6YmVmb3JlLFxyXG4uYnRuLTM6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1NYWluLUJyYW5kLUNvbG9yKTtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5idG4tMzpob3ZlciB7XHJcbiAgY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbi5idG4tMzo6YWZ0ZXIge1xyXG4gIGhlaWdodDogMDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5idG4tMzpob3ZlcjphZnRlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuYm9yZGVyLWJ0biB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5idG4tM3tcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmJvcmRlci1idG4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 81211:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/shared/components/custom-second-section/custom-second-section.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomSecondSectionComponent: () => (/* binding */ CustomSecondSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 34228);


const _c0 = [[["", "button", ""]], [["", "working", ""]]];
const _c1 = ["[button]", "[working]"];
class CustomSecondSectionComponent {
  constructor() {
    this.sectionTitle = '';
    this.sectionDesc = '';
    this.imgsrc = '';
    this.sectionTitleColor = '';
    this.sectionDescColor = '';
    this.sectionDescSize = '';
    this.sectionBackgroundColor = '';
    this.customFontClass = false;
    this.customColClass = false;
    this.customColsClass = false;
    this.customAlignClass = false;
    this.customimgWidthClass = false;
  }
  static #_ = this.ɵfac = function CustomSecondSectionComponent_Factory(t) {
    return new (t || CustomSecondSectionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CustomSecondSectionComponent,
    selectors: [["app-custom-second-section"]],
    inputs: {
      sectionTitle: "sectionTitle",
      sectionDesc: "sectionDesc",
      imgsrc: "imgsrc",
      sectionTitleColor: "sectionTitleColor",
      sectionDescColor: "sectionDescColor",
      sectionDescSize: "sectionDescSize",
      sectionBackgroundColor: "sectionBackgroundColor",
      customFontClass: "customFontClass",
      customColClass: "customColClass",
      customColsClass: "customColsClass",
      customAlignClass: "customAlignClass",
      customimgWidthClass: "customimgWidthClass"
    },
    ngContentSelectors: _c1,
    decls: 17,
    vars: 17,
    consts: [[1, "custom-second-section", "section-padding"], [1, "container-fluid"], [1, "row", "align-items-center", "justify-content-start"], [1, "order-2", "order-lg-1", 3, "ngClass"], [1, "row", "justify-content-end", "align-items-center", "align-items-md-start"], [1, "col-12", 3, "ngClass"], ["dir", "rtl", 1, "section-content", "text-center", "text-lg-end"], [1, ""], [1, "fw-bolder", "mt-3", "mt-lg-0", "mb-3", "mb-lg-3", "section-title"], [1, "fw-bold", "px-1", 3, "ngClass"], [1, "p-0", "order-1", "order-lg-2", 3, "ngClass"], [1, "img-container", "text-center", "text-md-end", 3, "ngClass"], ["alt", "oliveto image", "loading", "lazy", 1, "img-fluid", "text-end", 3, "src", "ngClass"]],
    template: function CustomSecondSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](13, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10)(15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.sectionBackgroundColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.customColClass ? "col-md-12 col-lg-6" : "col-md-7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.customColsClass ? "col-lg-12 col-xl-11 px-2 ps-md-4 pe-md-0 px-md-5" : "col-lg-10 col-xl-8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.sectionTitleColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.sectionTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.sectionDescColor)("font-size", ctx.sectionDescSize, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.customFontClass ? "font-s" : "font-l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.sectionDesc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.customColClass ? "col-md-12 col-lg-6" : "col-md-5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.customAlignClass ? "text-md-center" : "text-md-end");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgsrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", ctx.customimgWidthClass ? "w1" : "w2");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: [".font-s[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  font-size: 22px;\n  font-weight: 700 !important;\n}\n\n.font-l[_ngcontent-%COMP%] {\n  line-height: 2.8rem;\n  font-size: 25px;\n  font-weight: 700 !important;\n}\n\n.custom-second-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: 800 !important;\n}\n\n.w1[_ngcontent-%COMP%] {\n  width: 80% !important;\n}\n\n.w2[_ngcontent-%COMP%] {\n  width: 80% !important;\n}\n\n@media (max-width: 992px) {\n  .font-s[_ngcontent-%COMP%] {\n    line-height: 2rem;\n    font-size: 20px;\n    font-weight: 700 !important;\n  }\n  .font-l[_ngcontent-%COMP%] {\n    line-height: 2.8rem;\n    font-size: 20px;\n    font-weight: 700 !important;\n  }\n  .custom-second-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .w1[_ngcontent-%COMP%] {\n    width: 60% !important;\n  }\n  .w2[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n@media (max-width: 767px) {\n  .font-s[_ngcontent-%COMP%] {\n    line-height: 1.8rem;\n    font-size: 16px;\n  }\n  .font-l[_ngcontent-%COMP%] {\n    line-height: 2rem;\n    font-size: 16px;\n  }\n  .custom-second-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .w1[_ngcontent-%COMP%] {\n    width: 80% !important;\n  }\n  .w2[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1700px) {\n  .font-s[_ngcontent-%COMP%] {\n    line-height: 2rem;\n    font-size: 16px;\n  }\n  .font-l[_ngcontent-%COMP%] {\n    line-height: 2.5rem;\n    font-size: 22px;\n    font-weight: 700 !important;\n  }\n  .custom-second-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .img-fluid[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9jdXN0b20tc2Vjb25kLXNlY3Rpb24vY3VzdG9tLXNlY29uZC1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGVBQUE7SUFDQSwyQkFBQTtFQUNGO0VBRUE7SUFDRSxtQkFBQTtJQUNBLGVBQUE7SUFDQSwyQkFBQTtFQUFGO0VBR0E7SUFDRSxlQUFBO0VBREY7RUFJQTtJQUNFLHFCQUFBO0VBRkY7RUFLQTtJQUNFLHNCQUFBO0VBSEY7QUFDRjtBQU1BO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLGVBQUE7RUFKRjtFQU9BO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0VBTEY7RUFRQTtJQUNFLGVBQUE7RUFORjtFQVNBO0lBQ0UscUJBQUE7RUFQRjtFQVVBO0lBQ0Usc0JBQUE7RUFSRjtBQUNGO0FBV0E7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFQVRGO0VBWUE7SUFDRSxtQkFBQTtJQUNBLGVBQUE7SUFDQSwyQkFBQTtFQVZGO0VBYUE7SUFDRSxlQUFBO0VBWEY7RUFjQTtJQUNFLFVBQUE7RUFaRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnQtcyB7XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvbnQtbCB7XHJcbiAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLXNlY29uZC1zZWN0aW9uIGgyIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udzEge1xyXG4gIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLncyIHtcclxuICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5mb250LXMge1xyXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9udC1sIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjhyZW07XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXNlY29uZC1zZWN0aW9uIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcblxyXG4gIC53MSB7XHJcbiAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudzIge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb250LXMge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5mb250LWwge1xyXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXNlY29uZC1zZWN0aW9uIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcblxyXG4gIC53MSB7XHJcbiAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudzIge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDE3MDBweCkge1xyXG4gIC5mb250LXMge1xyXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuZm9udC1sIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXNlY29uZC1zZWN0aW9uIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcblxyXG4gIC5pbWctZmx1aWQge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 61700:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/shared/components/custom-section/custom-section.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomSectionComponent: () => (/* binding */ CustomSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 34228);


const _c0 = [[["", "button", ""]], [["", "working", ""]]];
const _c1 = ["[button]", "[working]"];
class CustomSectionComponent {
  constructor() {
    this.sectionTitle = '';
    this.sectionDesc = '';
    this.imgsrc = '';
    this.sectionDescColor = '';
    this.sectionDescSize = '';
    this.customFontClass = false;
  }
  static #_ = this.ɵfac = function CustomSectionComponent_Factory(t) {
    return new (t || CustomSectionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CustomSectionComponent,
    selectors: [["app-custom-section"]],
    inputs: {
      sectionTitle: "sectionTitle",
      sectionDesc: "sectionDesc",
      imgsrc: "imgsrc",
      sectionDescColor: "sectionDescColor",
      sectionDescSize: "sectionDescSize",
      customFontClass: "customFontClass"
    },
    ngContentSelectors: _c1,
    decls: 19,
    vars: 8,
    consts: [[1, "custom-section", "section-padding"], [1, "container-fluid"], [1, "row", "align-items-center", "justify-content-start"], [1, "col-lg-6", "p-md-0"], [1, "img-container", "text-center"], ["alt", "\u0645\u0637\u0639\u0645 \u0623\u0648\u0644\u064A\u0641\u064A\u062A\u0648 \u0638\u0647\u0631\u0629 \u0644\u0628\u0646", "loading", "lazy", 1, "img-fluid", 3, "src"], [1, "col-lg-6", "order-md-2"], [1, "row", "justify-content-center", "align-items-center", "align-items-md-start"], [1, "col-12", "col-lg-10", "col-xl-9", "px-md-5", "px-lg-0"], ["dir", "rtl", 1, "section-content", "text-center", "text-lg-end"], [1, ""], [1, "fw-bolder", "main-color", "mt-3", "mt-lg-0", "mb-3", "mb-lg-3", "mb-xl-4", "section-title"], [1, "fw-bold", "sec-text-color", "px-1", 3, "ngClass"], [1, "col-3", "col-lg-2", "col-xl-3", "p-0", "d-none", "d-lg-block"], [1, "section-line", "w-100", "bg-main-color", "mt-lg-3", "mt-xxl-4"]],
    template: function CustomSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](16, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgsrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.sectionTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.sectionDescColor)("font-size", ctx.sectionDescSize, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.customFontClass ? "font-s" : "font-l");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.sectionDesc, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: [".section-line[_ngcontent-%COMP%] {\n  height: 3px;\n}\n\n.font-s[_ngcontent-%COMP%] {\n  line-height: 2rem;\n  font-size: 25px;\n  font-weight: 700 !important;\n}\n\n.font-l[_ngcontent-%COMP%] {\n  line-height: 2.8rem;\n  font-size: 25px;\n  font-weight: 700 !important;\n}\n\n.custom-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 35px;\n  font-weight: 800 !important;\n}\n\n.custom-section[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60% !important;\n}\n\n@media (max-width: 992px) {\n  .font-s[_ngcontent-%COMP%] {\n    line-height: 2rem;\n    font-size: 20px;\n    font-weight: 700 !important;\n  }\n  .font-l[_ngcontent-%COMP%] {\n    line-height: 2.8rem;\n    font-size: 22px;\n    font-weight: 700 !important;\n  }\n  .custom-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .img-fluid[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  .custom-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before, .custom-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n    content: \"\";\n    display: inline-block;\n    height: 2px;\n    position: relative;\n    vertical-align: middle;\n    width: 100px;\n    background-color: var(--Main-Brand-Color);\n    margin-right: 10px;\n    margin-left: 10px;\n  }\n}\n@media (max-width: 767px) {\n  .font-s[_ngcontent-%COMP%] {\n    line-height: 1.8rem;\n    font-size: 16px;\n  }\n  .font-l[_ngcontent-%COMP%] {\n    line-height: 2rem;\n    font-size: 16px;\n  }\n  .custom-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .custom-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before, .custom-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n    background-color: #000;\n    content: \"\";\n    display: inline-block;\n    height: 2px;\n    position: relative;\n    vertical-align: middle;\n    width: 50px;\n    background-color: var(--Main-Brand-Color);\n    margin-right: 10px;\n    margin-left: 10px;\n  }\n  .custom-section[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 80% !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1360px) {\n  .font-s[_ngcontent-%COMP%] {\n    line-height: 2rem;\n    font-size: 22px;\n  }\n  .font-l[_ngcontent-%COMP%] {\n    line-height: 2.4rem;\n    font-size: 20px;\n    font-weight: 700 !important;\n  }\n  .custom-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .custom-section[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9jdXN0b20tc2VjdGlvbi9jdXN0b20tc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGOztBQUNBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGVBQUE7SUFDQSwyQkFBQTtFQUVGO0VBQ0E7SUFDRSxtQkFBQTtJQUNBLGVBQUE7SUFDQSwyQkFBQTtFQUNGO0VBQ0E7SUFDRSxlQUFBO0VBQ0Y7RUFFQTtJQUNFLFVBQUE7RUFBRjtFQUVBOztJQUVFLFdBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0lBQ0EsWUFBQTtJQUNBLHlDQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQUFGO0FBQ0Y7QUFHQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxlQUFBO0VBREY7RUFJQTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFQUZGO0VBS0E7SUFDRSxlQUFBO0VBSEY7RUFNQTs7SUFFRSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxxQkFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLHlDQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtFQUpGO0VBT0E7SUFDRSxxQkFBQTtFQUxGO0FBQ0Y7QUFRQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0VBTkY7RUFTQTtJQUNFLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLDJCQUFBO0VBUEY7RUFVQTtJQUNFLGVBQUE7RUFSRjtFQVdBO0lBQ0UscUJBQUE7RUFURjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24tbGluZSB7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbn1cclxuXHJcbi5mb250LXMge1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb250LWwge1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjhyZW07XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1zZWN0aW9uIGgyIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLXNlY3Rpb24gLmltZy1jb250YWluZXIgaW1nIHtcclxuICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmZvbnQtcyB7XHJcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5mb250LWwge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuOHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmN1c3RvbS1zZWN0aW9uIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcblxyXG4gIC5pbWctZmx1aWQge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbiAgLmN1c3RvbS1zZWN0aW9uIGgyOjpiZWZvcmUsXHJcbiAgLmN1c3RvbS1zZWN0aW9uIGgyOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTWFpbi1CcmFuZC1Db2xvcik7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5mb250LXMge1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5mb250LWwge1xyXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXNlY3Rpb24gaDIge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxuXHJcbiAgLmN1c3RvbS1zZWN0aW9uIGgyOjpiZWZvcmUsXHJcbiAgLmN1c3RvbS1zZWN0aW9uIGgyOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTWFpbi1CcmFuZC1Db2xvcik7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tc2VjdGlvbiAuaW1nLWNvbnRhaW5lciBpbWcge1xyXG4gICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTM2MHB4KSB7XHJcbiAgLmZvbnQtcyB7XHJcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcblxyXG4gIC5mb250LWwge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5jdXN0b20tc2VjdGlvbiBoMiB7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXNlY3Rpb24gLmltZy1jb250YWluZXIgaW1nIHtcclxuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 14254:
/*!**********************************************************************!*\
  !*** ./src/app/modules/shared/components/footer/footer.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class FooterComponent {
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 52,
    vars: 0,
    consts: [[1, "container-fluid"], [1, "footer-container"], [1, "row", "justify-content-end", "align-items-center"], [1, "col-12", "col-lg-7", "pt-4", "pb-4", "pt-lg-5", "pb-lg-5", "footer-border"], [1, "row", "justify-content-between", "align-items-start"], [1, "col-lg-6", "p-0"], [1, "p-0", "p-lg-0", "text-center", "text-lg-start"], [1, "main-color", "fs-2", "fw-bold"], [1, "fa-solid", "fa-envelope", "me-4"], [1, "fa-solid", "fa-phone", "me-4"], [1, "footer-location"], [1, "text-center", "text-lg-end", "main-color", "fs-2", "fw-bold"], [1, "fa-solid", "fa-location-dot", "ms-1", "ms-lg-2"], [1, "footer-socials", "d-flex", "justify-content-center", "justify-content-lg-end", "align-items-center", "mt-2", "mt-lg-4"], [1, "d-flex", "justify-content-center", "justify-content-lg-end", "p-0"], ["href", "https://twitter.com/Olivetoksa", "target", "_blank", 1, "text-decoration-none"], [1, "mx-2"], [1, "fa-brands", "fa-twitter"], ["href", "https://www.instagram.com/olivetoksa/", "target", "_blank", 1, "text-decoration-none"], [1, "fa-brands", "fa-instagram"], ["href", "https://www.tiktok.com/@olivetoksa", "target", "_blank", 1, "text-decoration-none"], [1, "fa-brands", "fa-tiktok"], ["href", "https://www.facebook.com/olivetox/", "target", "_blank", 1, "text-decoration-none"], [1, "fa-brands", "fa-facebook-f"], ["href", "https://wa.me/+966552202041", "target", "_blank", 1, "text-decoration-none"], [1, "fa-brands", "fa-whatsapp"], ["href", "https://www.snapchat.com/add/olivetoksa", "target", "_blank", 1, "text-decoration-none"], [1, "fa-brands", "fa-snapchat"], [1, "col-12", "col-lg-3"], [1, "footer-img", "text-center", "mt-2", "mt-lg-0"], ["src", "assets/logo1.png", "alt", "\u0645\u0637\u0639\u0645 \u0623\u0648\u0644\u064A\u0641\u064A\u062A\u0648 \u0638\u0647\u0631\u0629 \u0644\u0628\u0646", "width", "80%", 1, "img-fluid"], [1, "footer-bottom", "py-3"], [1, "row"], [1, "col"], [1, "text-center", "main-color", "fs-5", "fs-lg-5"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "ul", 6)(7, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "info@oliveto-ksa.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "+966552202041");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "0114150028");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5)(20, "div", 10)(21, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " . \u0638\u0647\u0631\u0629 \u0644\u0628\u0646 - \u0634\u0627\u0631\u0639 \u0639\u0633\u064A\u0631 - \u0627\u0644\u0631\u064A\u0627\u0636 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13)(25, "ul", 14)(26, "a", 15)(27, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 18)(30, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 20)(33, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 22)(36, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 24)(39, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 26)(42, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 28)(45, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 31)(48, "div", 32)(49, "div", 33)(50, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Copyright 2023 All Right Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    styles: ["footer[_ngcontent-%COMP%] {\n  line-height: 4rem !important;\n}\n\n.social-box[_ngcontent-%COMP%] {\n  color: var(--Text-Color) !important;\n  background-color: var(--Main-Brand-Color) !important;\n  font-size: 30px !important;\n}\n\n.footer-border[_ngcontent-%COMP%] {\n  border-top: 3px var(--Main-Border-Color) solid !important;\n  border-bottom: 3px var(--Main-Border-Color) solid !important;\n}\n\n.footer-socials[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 10px;\n  height: 60px;\n  width: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  cursor: pointer;\n  position: relative;\n  background-color: var(--Main-Brand-Color);\n  color: var(--Text-Color);\n  font-size: 30px;\n  transition: all 0.3s ease-in-out;\n}\n\n.footer-socials[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: var(--Main-Sec-Brand-Color);\n}\n\n.footer-socials[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n}\n\n.footer-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80% !important;\n}\n\n@media (min-width: 1280px) {\n  .footer-socials[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 26px !important;\n    height: 50px;\n    width: 50px;\n  }\n  .footer-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70% !important;\n  }\n  footer[_ngcontent-%COMP%] {\n    line-height: 3.5rem !important;\n  }\n  footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\n    font-size: 26px !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1280px) {\n  .footer-socials[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n    height: 40px;\n    width: 40px;\n  }\n  .footer-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 90% !important;\n  }\n  footer[_ngcontent-%COMP%] {\n    line-height: 3rem !important;\n  }\n  footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n}\n@media (max-width: 992px) {\n  .footer-socials[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n    height: 40px;\n    width: 40px;\n  }\n  .footer-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30% !important;\n  }\n  footer[_ngcontent-%COMP%] {\n    line-height: 3.5rem !important;\n  }\n  footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\n    font-size: 28px !important;\n  }\n}\n@media (max-width: 767px) {\n  .footer-socials[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n    height: 35px;\n    width: 35px;\n  }\n  .footer-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 25% !important;\n  }\n  footer[_ngcontent-%COMP%] {\n    line-height: 2.5rem !important;\n  }\n  footer[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\n    font-size: 18px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7QUFDRjs7QUFDQTtFQUNFLG1DQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQkFBQTtBQUVGOztBQUFBO0VBQ0UseURBQUE7RUFDQSw0REFBQTtBQUdGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFHRjs7QUFBQTtFQUNFLDZDQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFBQTtFQUNFLHFCQUFBO0FBR0Y7O0FBQUE7RUFDRTtJQUNFLDBCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUFHRjtFQUFBO0lBQ0UscUJBQUE7RUFFRjtFQUNBO0lBQ0UsOEJBQUE7RUFDRjtFQUVBOztJQUVFLDBCQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0U7SUFDRSwwQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VBREY7RUFJQTtJQUNFLHFCQUFBO0VBRkY7RUFLQTtJQUNFLDRCQUFBO0VBSEY7RUFNQTs7SUFFRSwwQkFBQTtFQUpGO0FBQ0Y7QUFPQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQUxGO0VBUUE7SUFDRSxxQkFBQTtFQU5GO0VBU0E7SUFDRSw4QkFBQTtFQVBGO0VBVUE7O0lBRUUsMEJBQUE7RUFSRjtBQUNGO0FBV0E7RUFDRTtJQUNFLDBCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUFURjtFQVlBO0lBQ0UscUJBQUE7RUFWRjtFQWFBO0lBQ0UsOEJBQUE7RUFYRjtFQWNBOztJQUVFLDBCQUFBO0VBWkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciB7XHJcbiAgbGluZS1oZWlnaHQ6IDRyZW0gIWltcG9ydGFudDtcclxufVxyXG4uc29jaWFsLWJveCB7XHJcbiAgY29sb3I6IHZhcigtLVRleHQtQ29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTWFpbi1CcmFuZC1Db2xvcikgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudCA7XHJcbn1cclxuLmZvb3Rlci1ib3JkZXIge1xyXG4gIGJvcmRlci10b3A6IDNweCB2YXIoLS1NYWluLUJvcmRlci1Db2xvcikgc29saWQgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiAzcHggdmFyKC0tTWFpbi1Cb3JkZXItQ29sb3IpIHNvbGlkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb290ZXItc29jaWFscyB1bCBsaSB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTWFpbi1CcmFuZC1Db2xvcik7XHJcbiAgY29sb3I6IHZhcigtLVRleHQtQ29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmZvb3Rlci1zb2NpYWxzIHVsIGxpOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1NYWluLVNlYy1CcmFuZC1Db2xvcik7XHJcbn1cclxuXHJcbi5mb290ZXItc29jaWFscyB1bCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uZm9vdGVyLWltZyBpbWcge1xyXG4gIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xyXG4gIC5mb290ZXItc29jaWFscyB1bCBsaSB7XHJcbiAgICBmb250LXNpemU6IDI2cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1pbWcgaW1nIHtcclxuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGZvb3RlciB7XHJcbiAgICBsaW5lLWhlaWdodDogMy41cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBmb290ZXIgbGksXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDI2cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC5mb290ZXItc29jaWFscyB1bCBsaSB7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1pbWcgaW1nIHtcclxuICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGZvb3RlciB7XHJcbiAgICBsaW5lLWhlaWdodDogM3JlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIGxpLFxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuZm9vdGVyLXNvY2lhbHMgdWwgbGkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXItaW1nIGltZyB7XHJcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBmb290ZXIge1xyXG4gICAgbGluZS1oZWlnaHQ6IDMuNXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIGxpLFxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuZm9vdGVyLXNvY2lhbHMgdWwgbGkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXItaW1nIGltZyB7XHJcbiAgICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBmb290ZXIge1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIGxpLFxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 21895:
/*!**********************************************************************!*\
  !*** ./src/app/modules/shared/components/navbar/navbar.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 34228);



const _c0 = function () {
  return [""];
};
const _c1 = function () {
  return ["active"];
};
const _c2 = function (a0) {
  return {
    "text-orange": a0
  };
};
const _c3 = function () {
  return ["about"];
};
const _c4 = function () {
  return ["menu"];
};
const _c5 = function () {
  return ["gallery"];
};
const _c6 = function () {
  return ["contact"];
};
class NavbarComponent {
  constructor(router) {
    this.router = router;
  }
  isActive(route) {
    return this.router.isActive(route, true);
  }
  onWindowScroll() {
    let element = document.querySelector('nav');
    let container = document.querySelector('.container-fluid');
    if (window.scrollY > element.clientHeight) {
      element.classList.add('nav-scroll');
    } else {
      element.classList.remove('nav-scroll');
    }
  }
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler($event) {
          return ctx.onWindowScroll($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
    },
    decls: 24,
    vars: 37,
    consts: [["id", "nav", "dir", "rtl", 1, "navbar", "navbar-expand-lg", "navbar-transparent", "bg-transparent", "fixed-top"], [1, "mx-4", "mx-lg-0", "container-fluid", "py-1"], [1, "d-flex", "justify-content-between", "align-items-center", "container-size"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "navbar-brand", "d-flex", "justify-content-end", "justify-content-lg-start", "w-100", 3, "routerLink"], ["src", "assets/logo2.ico", "alt", "\u0645\u0637\u0639\u0645 \u0623\u0648\u0644\u064A\u0641\u064A\u062A\u0648 \u0638\u0647\u0631\u0629 \u0644\u0628\u0646", "loading", "lazy", 1, "img-fluid", "cursor-pointer", "navbar-brand-image", 2, "width", "25%"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "me-xl-2", "me-0"], [1, "navbar-nav", "mx-auto", "mb-2"], [1, "nav-item", "me-5"], [1, "nav-link", "text-white", "py-1", "py-lg-2", 3, "routerLink", "routerLinkActive", "ngClass"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "ul", 8)(9, "li", 9)(10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9)(13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0645\u0646 \u0646\u062D\u0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 9)(16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0637\u0639\u0627\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9)(19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0627\u0644\u0623\u0644\u0628\u0648\u0645");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9)(22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c2, ctx.isActive("/")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c3))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c2, ctx.isActive("/about")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c4))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c2, ctx.isActive("/menu")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c5))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c2, ctx.isActive("/gallery")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c6))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c1))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](35, _c2, ctx.isActive("/contact")));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
    styles: ["nav[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n}\n\n.nav-scroll[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.8) !important;\n  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.59);\n  -webkit-box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.59);\n  -moz-box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.59);\n}\n\n#nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n}\n\n#nav[_ngcontent-%COMP%]   .navbar-brand-image[_ngcontent-%COMP%] {\n  width: 100px !important;\n}\n\n@media (min-width: 992px) {\n  #nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    font-size: 23px !important;\n  }\n  .navbar-brand-image[_ngcontent-%COMP%] {\n    width: 80px !important;\n  }\n  .navbar-nav[_ngcontent-%COMP%] {\n    margin-right: 15rem;\n  }\n}\n@media (min-width: 992px) and (max-width: 1250px) {\n  #nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n  .navbar-nav[_ngcontent-%COMP%] {\n    margin-right: 5rem;\n  }\n}\n@media (max-width: 992px) {\n  nav[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.9) !important;\n    padding: 25px 0;\n  }\n  .navbar[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n  .navbar-nav[_ngcontent-%COMP%] {\n    padding: 20px 0 !important;\n  }\n  .container-fluid[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n  .navbar-brand[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .navbar-brand-image[_ngcontent-%COMP%] {\n    width: 100px !important;\n  }\n  .navbar-collapse[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 5px 0;\n  }\n  .nav-scroll[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.9) !important;\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  #nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    font-size: 22px !important;\n  }\n  .navbar-toggler[_ngcontent-%COMP%] {\n    margin-right: 14px;\n  }\n  .navbar-toggler-icon[_ngcontent-%COMP%] {\n    width: 2.5em;\n    height: 3.5em;\n  }\n  .container-size[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 767px) {\n  #nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    margin-top: 5px;\n  }\n  #nav[_ngcontent-%COMP%]   .navbar-brand-image[_ngcontent-%COMP%] {\n    width: 55px !important;\n  }\n  #nav.navbar-collapse[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 5px 0 !important;\n  }\n  #nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    font-size: 16px !important;\n  }\n  #nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  #nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    margin-right: -1.1rem !important;\n  }\n  #nav[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n    width: 1.5em;\n    height: 1.5em;\n  }\n  #nav[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-ng-c4209996368][_ngcontent-%COMP%] {\n    margin-right: 0px !important;\n  }\n}\n.navbar-toggler[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  border: 2px solid var(--Main-Brand-Color);\n  margin-bottom: 30px;\n}\n\n.navbar-toggler[_ngcontent-%COMP%]:active, .navbar-toggler[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\n.navbar-toggler[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\n  background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(223, 93, 39, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");\n}\n\n.text-orange[_ngcontent-%COMP%] {\n  color: var(--Main-Brand-Color) !important;\n  text-shadow: -1px 0px 0px #000, 1px -1px 0px #000, -1px 1px 2px #000, 1px 1px 2px #000 !important;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  text-shadow: -1px 0px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  border: none !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNFLCtDQUFBO0VBQ0EsK0NBQUE7RUFDQSx1REFBQTtFQUNBLG9EQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUVFO0lBQ0UsMEJBQUE7RUFBRjtFQUVBO0lBQ0Usc0JBQUE7RUFBRjtFQUVBO0lBQ0EsbUJBQUE7RUFBQTtBQUNGO0FBR0E7RUFDRTtJQUNFLDBCQUFBO0VBREY7RUFHQTtJQUNFLGtCQUFBO0VBREY7QUFDRjtBQUtBO0VBQ0U7SUFDRSwrQ0FBQTtJQUNBLGVBQUE7RUFIRjtFQU1BO0lBQ0UscUJBQUE7RUFKRjtFQU9BO0lBQ0UsMEJBQUE7RUFMRjtFQVFBO0lBQ0UscUJBQUE7RUFORjtFQVNBO0lBQ0UsYUFBQTtFQVBGO0VBWUE7SUFDRSx1QkFBQTtFQVZGO0VBYUE7SUFDRSxhQUFBO0VBWEY7RUFjQTtJQUNFLCtDQUFBO0lBQ0EsZ0JBQUE7SUFDQSx3QkFBQTtJQUNBLHFCQUFBO0VBWkY7RUFlQTtJQUNFLDBCQUFBO0VBYkY7RUFnQkE7SUFDRSxrQkFBQTtFQWRGO0VBaUJBO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUFmRjtFQWtCQTtJQUNFLFdBQUE7RUFoQkY7QUFDRjtBQW1CQTtFQUNFO0lBQ0UsZUFBQTtFQWpCRjtFQW1CQTtJQUNFLHNCQUFBO0VBakJGO0VBbUJBO0lBQ0Usd0JBQUE7RUFqQkY7RUFvQkE7SUFDRSwwQkFBQTtFQWxCRjtFQW9CQTtJQUNFLGFBQUE7RUFsQkY7RUFxQkE7SUFDRSxnQ0FBQTtFQW5CRjtFQXFCQTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBbkJGO0VBc0JBO0lBQ0UsNEJBQUE7RUFwQkY7QUFDRjtBQXVCQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0FBckJGOztBQXdCQTs7RUFFRSwyQkFBQTtBQXJCRjs7QUF3QkE7RUFDRSwwUEFBQTtBQXJCRjs7QUF3QkE7RUFDRSx5Q0FBQTtFQUNBLGlHQUFBO0FBckJGOztBQXlCQTtFQUNFLHNGQUFBO0FBdEJGOztBQTBCQTtFQUNFLHVCQUFBO0FBdkJGIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm5hdi1zY3JvbGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNTkpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDdweCA2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41OSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggN3B4IDZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjU5KTtcclxufVxyXG5cclxuI25hdiAubmF2LWxpbmsge1xyXG4gIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jbmF2IC5uYXZiYXItYnJhbmQtaW1hZ2Uge1xyXG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpe1xyXG5cclxuICAjbmF2IC5uYXYtbGluayB7XHJcbiAgICBmb250LXNpemU6IDIzcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm5hdmJhci1icmFuZC1pbWFnZSB7XHJcbiAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubmF2YmFyLW5hdntcclxuICBtYXJnaW4tcmlnaHQ6IDE1cmVtO1xyXG59XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEyNTBweCl7XHJcbiAgI25hdiAubmF2LWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5uYXZiYXItbmF2e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIG5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSkgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDI1cHggMDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXIge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1uYXYge1xyXG4gICAgcGFkZGluZzogMjBweCAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIC8vIG1hcmdpbi1yaWdodDogMjM1cHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogNDFweDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItYnJhbmQtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWNvbGxhcHNlIHVsIGxpIHtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgfVxyXG5cclxuICAubmF2LXNjcm9sbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSkgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAjbmF2IC5uYXYtbGluayB7XHJcbiAgICBmb250LXNpemU6IDIycHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgICB3aWR0aDogMi41ZW07XHJcbiAgICBoZWlnaHQ6IDMuNWVtO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyLXNpemV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICNuYXYgLm5hdmJhci1icmFuZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgfVxyXG4gICNuYXYgLm5hdmJhci1icmFuZC1pbWFnZSB7XHJcbiAgICB3aWR0aDogNTVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAjbmF2Lm5hdmJhci1jb2xsYXBzZSB1bCBsaSB7XHJcbiAgICBtYXJnaW46IDVweCAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjbmF2IC5uYXYtbGluayB7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgI25hdiAubmF2YmFyLWJyYW5kIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAvLyBtYXJnaW4tcmlnaHQ6IDIzNXB4O1xyXG4gIH1cclxuICAjbmF2IC5uYXZiYXItbmF2IHtcclxuICAgIG1hcmdpbi1yaWdodDogLTEuMXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAjbmF2IC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICAgIHdpZHRoOiAxLjVlbTtcclxuICAgIGhlaWdodDogMS41ZW07XHJcbiAgfVxyXG5cclxuICAjbmF2IC5uYXZiYXItdG9nZ2xlcltfbmdjb250ZW50LW5nLWM0MjA5OTk2MzY4XSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLU1haW4tQnJhbmQtQ29sb3IpO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlcjphY3RpdmUsXHJcbi5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXIgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMzAgMzAnJTNlJTNjcGF0aCBzdHJva2U9J3JnYmEoMjIzLCA5MywgMzksIDEpJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgc3Ryb2tlLXdpZHRoPScyJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvJTNlJTNjL3N2ZyUzZVwiKTtcclxufVxyXG5cclxuLnRleHQtb3JhbmdlIHtcclxuICBjb2xvcjogdmFyKC0tTWFpbi1CcmFuZC1Db2xvcikgIWltcG9ydGFudDtcclxuICB0ZXh0LXNoYWRvdzogLTFweCAwcHggMHB4ICMwMDAsIDFweCAtMXB4IDBweCAjMDAwLCAtMXB4IDFweCAycHggIzAwMCxcclxuICAgIDFweCAxcHggMnB4ICMwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICB0ZXh0LXNoYWRvdzogLTFweCAwcHggMnB4ICMwMDAsIDFweCAtMXB4IDJweCAjMDAwLCAtMXB4IDFweCAycHggIzAwMCxcclxuICAgIDFweCAxcHggMnB4ICMwMDA7XHJcbn1cclxuXHJcbi5uYXZiYXItdG9nZ2xlciB7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 40430:
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared/components/normal-button/normal-button.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NormalButtonComponent: () => (/* binding */ NormalButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);


class NormalButtonComponent {
  constructor() {
    this.buttonBackgroundColor = '';
    this.buttonName = '';
    this.buttonType = '';
    this.routerLinkAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  buttonRouteclick() {
    this.routerLinkAction.emit();
  }
  static #_ = this.ɵfac = function NormalButtonComponent_Factory(t) {
    return new (t || NormalButtonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NormalButtonComponent,
    selectors: [["app-normal-button"]],
    inputs: {
      buttonBackgroundColor: "buttonBackgroundColor",
      buttonName: "buttonName",
      routerLink: "routerLink",
      randomButtonAction: "randomButtonAction",
      buttonType: "buttonType"
    },
    outputs: {
      routerLinkAction: "routerLinkAction"
    },
    decls: 2,
    vars: 4,
    consts: [[1, "btn", "normal-btn", "main-text-color", "text-center", 2, "padding", "10px 35px", 3, "type", "click"]],
    template: function NormalButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NormalButtonComponent_Template_button_click_0_listener() {
          return ctx.buttonRouteclick();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.buttonBackgroundColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.buttonType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonName);
      }
    },
    styles: [".normal-btn[_ngcontent-%COMP%] {\n  border-radius: 0 !important;\n  font-size: 16px;\n}\n\n@media (max-width: 992px) {\n  .normal-btn[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media (max-width: 767px) {\n  .normal-btn[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9ub3JtYWwtYnV0dG9uL25vcm1hbC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBQTtFQUNGO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBQTtFQUFGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubm9ybWFsLWJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLm5vcm1hbC1idG4ge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLm5vcm1hbC1idG4ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 88283:
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/components/page-header/page-header.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageHeaderComponent: () => (/* binding */ PageHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class PageHeaderComponent {
  constructor() {
    this.pageTitle = '';
    this.sectionBackgroundImg = '';
  }
  static #_ = this.ɵfac = function PageHeaderComponent_Factory(t) {
    return new (t || PageHeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PageHeaderComponent,
    selectors: [["app-page-header"]],
    inputs: {
      pageTitle: "pageTitle",
      sectionBackgroundImg: "sectionBackgroundImg"
    },
    decls: 7,
    vars: 3,
    consts: [["id", "pageHeader", 1, "d-flex", "justify-content-center", "align-items-center"], [1, "container"], [1, "row"], [1, "col-12"], [1, "page-header-content", "py-5"], [1, "text-center"]],
    template: function PageHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.sectionBackgroundImg + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageTitle);
      }
    },
    styles: ["#pageHeader[_ngcontent-%COMP%] {\n  height: 30vh;\n  width: 100%;\n  background: url(\"/assets/home/hero.webp\") top center;\n  background-size: cover;\n  position: relative;\n  overflow: hidden;\n  padding: 0;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: #ffffff;\n}\n\n#pageHeader[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  background-image: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.6509803922));\n  opacity: 2.5;\n  height: 100%;\n  width: 100%;\n}\n\n#pageHeader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 700;\n  text-shadow: -1px 1px 6px rgba(0, 0, 0, 0.4);\n  z-index: 9999;\n  font-size: 60px;\n}\n\n#pageHeader[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n}\n\n@media (max-width: 992px) {\n  #pageHeader[_ngcontent-%COMP%] {\n    height: 20vh;\n  }\n  #pageHeader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 45px;\n  }\n  #pageHeader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n@media (max-width: 767px) {\n  #pageHeader[_ngcontent-%COMP%] {\n    height: 15vh;\n  }\n  #pageHeader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  #pageHeader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEZBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQUlGOztBQURBO0VBQ0U7SUFDRSxZQUFBO0VBSUY7RUFGQTtJQUNFLGVBQUE7RUFJRjtFQUZBO0lBQ0UsZUFBQTtFQUlGO0FBQ0Y7QUFEQTtFQUNFO0lBQ0UsWUFBQTtFQUdGO0VBREE7SUFDRSxlQUFBO0VBR0Y7RUFEQTtJQUNFLGVBQUE7RUFHRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ2VIZWFkZXIge1xyXG4gIGhlaWdodDogMzB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2hvbWUvaGVyby53ZWJwXCIpIHRvcCBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuI3BhZ2VIZWFkZXI6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgdHJhbnNwYXJlbnQsICNmZmZmZmZhNik7XHJcbiAgb3BhY2l0eTogMi41O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4jcGFnZUhlYWRlciBoMSB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LXNoYWRvdzogLTFweCAxcHggNnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGZvbnQtc2l6ZTogNjBweDtcclxufVxyXG4jcGFnZUhlYWRlciAuY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAjcGFnZUhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDIwdmg7XHJcbiAgfVxyXG4gICNwYWdlSGVhZGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICB9XHJcbiAgI3BhZ2VIZWFkZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAjcGFnZUhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDE1dmg7XHJcbiAgfVxyXG4gICNwYWdlSGVhZGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgI3BhZ2VIZWFkZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4745:
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared/components/scroll-button/scroll-button.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollButtonComponent: () => (/* binding */ ScrollButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 34228);




const _c0 = function (a0) {
  return {
    "show-scrollTop": a0
  };
};
class ScrollButtonComponent {
  constructor(platformId) {
    this.platformId = platformId;
    this.windowScrolled = false;
  }
  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.scrollY !== 0;
    });
  }
  scrollToTop() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this.platformId)) {
      window.scroll(0, 0);
    }
    // window.scrollTo(0, 0);
  }
  static #_ = this.ɵfac = function ScrollButtonComponent_Factory(t) {
    return new (t || ScrollButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ScrollButtonComponent,
    selectors: [["app-scroll-button"]],
    decls: 3,
    vars: 3,
    consts: [[1, "to-top", 3, "ngClass", "click"], [1, "scroll-button"], [1, "fa-solid", "fa-chevron-up"]],
    template: function ScrollButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScrollButtonComponent_Template_div_click_0_listener() {
          return ctx.scrollToTop();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, ctx.windowScrolled));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.NgClass],
    styles: [".to-top[_ngcontent-%COMP%] {\n  bottom: 0;\n  cursor: pointer;\n  margin: 0 15px 12px 0;\n  position: fixed;\n  right: 0;\n  opacity: 0;\n  background-color: var(--Main-Brand-Color);\n  color: var(--Text-Color);\n  border-radius: 50px;\n  padding: 10px;\n  z-index: 99;\n  text-align: center;\n}\n\n.to-top[_ngcontent-%COMP%]:hover {\n  background-color: var(--Main-Sec-Brand-Color);\n}\n\n.to-top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--Text-Color);\n  text-align: center;\n}\n\n.scroll-button[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.show-scrollTop[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n  transition: all 0.3s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9zY3JvbGwtYnV0dG9uL3Njcm9sbC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EseUNBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkNBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsZ0NBQUE7QUFFRiIsInNvdXJjZXNDb250ZW50IjpbIi50by10b3Age1xyXG4gIGJvdHRvbTogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAwIDE1cHggMTJweCAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU1haW4tQnJhbmQtQ29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS1UZXh0LUNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udG8tdG9wOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1NYWluLVNlYy1CcmFuZC1Db2xvcik7XHJcbn1cclxuXHJcbi50by10b3Agc3BhbiBpIHtcclxuICBjb2xvcjogdmFyKC0tVGV4dC1Db2xvcik7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2Nyb2xsLWJ1dHRvbiB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5zaG93LXNjcm9sbFRvcCB7XHJcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 21213:
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared/components/section-title/section-title.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SectionTitleComponent: () => (/* binding */ SectionTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 34228);


class SectionTitleComponent {
  constructor() {
    this.title = '';
    this.sectionTitleClass = false;
    this.sectionPaddingClass = false;
  }
  static #_ = this.ɵfac = function SectionTitleComponent_Factory(t) {
    return new (t || SectionTitleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SectionTitleComponent,
    selectors: [["app-section-title"]],
    inputs: {
      title: "title",
      sectionTitleClass: "sectionTitleClass",
      sectionPaddingClass: "sectionPaddingClass"
    },
    decls: 6,
    vars: 3,
    consts: [[1, "container", "custom-title", "my-3", "my-lg-5", 3, "ngClass"], [1, "row", "justify-content-center", "align-items-center"], [1, "col-12"], [1, "text-center", 3, "ngClass"]],
    template: function SectionTitleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.sectionTitleClass ? "py-4 pb-5" : "py-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.sectionTitleClass ? "title-l" : "title-s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: [".custom-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before, .custom-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  height: 2px;\n  position: relative;\n  vertical-align: middle;\n  width: 100px;\n  background-color: var(--Main-Brand-Color);\n  margin-right: 10px;\n  margin-left: 10px;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: var(--Main-Brand-Color);\n  font-weight: 700;\n}\n\n.title-l[_ngcontent-%COMP%] {\n  font-size: 50px;\n}\n\n.title-s[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n\n@media (min-width: 992px) and (max-width: 1476px) {\n  .title-s[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .title-l[_ngcontent-%COMP%] {\n    font-size: 50px;\n  }\n}\n@media (max-width: 992px) {\n  .title-s[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .title-l[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .custom-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before, .custom-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n    width: 50px;\n  }\n}\n@media (max-width: 767px) {\n  .title-s[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .title-l[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .custom-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before, .custom-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\n    width: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9zZWN0aW9uLXRpdGxlL3NlY3Rpb24tdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw4QkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0FBSUY7O0FBRkE7RUFDRTtJQUNFLGVBQUE7RUFLRjtFQUhBO0lBQ0UsZUFBQTtFQUtGO0FBQ0Y7QUFGQTtFQUNFO0lBQ0UsZUFBQTtFQUlGO0VBRkE7SUFDRSxlQUFBO0VBSUY7RUFEQTs7SUFFRSxXQUFBO0VBR0Y7QUFDRjtBQUFBO0VBQ0U7SUFDRSxlQUFBO0VBRUY7RUFBQTtJQUNFLGVBQUE7RUFFRjtFQUFBOztJQUVFLFdBQUE7RUFFRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS10aXRsZSBoMjo6YmVmb3JlLFxyXG4uY3VzdG9tLXRpdGxlIGgyOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLU1haW4tQnJhbmQtQ29sb3IpO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5oMiB7XHJcbiAgY29sb3I6IHZhcigtLU1haW4tQnJhbmQtQ29sb3IpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLnRpdGxlLWwge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufVxyXG4udGl0bGUtcyB7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDE0NzZweCkge1xyXG4gIC50aXRsZS1zIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcbiAgLnRpdGxlLWwge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLnRpdGxlLXMge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gIH1cclxuICAudGl0bGUtbCB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tLXRpdGxlIGgyOjpiZWZvcmUsXHJcbiAgLmN1c3RvbS10aXRsZSBoMjo6YWZ0ZXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAudGl0bGUtcyB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG4gIC50aXRsZS1sIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICB9XHJcbiAgLmN1c3RvbS10aXRsZSBoMjo6YmVmb3JlLFxyXG4gIC5jdXN0b20tdGl0bGUgaDI6OmFmdGVyIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 92935:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shared/components/testimonials/testimonials.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestimonialsComponent: () => (/* binding */ TestimonialsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 34228);


function TestimonialsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "div", 15)(4, "div", 16)(5, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 19)(10, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" From ", item_r1.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.content, " ");
  }
}
class TestimonialsComponent {
  constructor() {
    this.carouselItems = [{
      content: 'Excellent taste and awesome staff and nice place...keep on',
      name: 'Amr Hossam',
      location: 'Ksa'
    }, {
      content: 'I would come again in the future for sure , loved everything',
      name: 'Nour Ehab',
      location: 'Egypt'
    }, {
      content: 'the food was nice and the customer service was excellent the only thing i didnt like was the soup cause it was very salty',
      name: 'Keith Lee',
      location: 'Las Vegas'
    }];
  }
  static #_ = this.ɵfac = function TestimonialsComponent_Factory(t) {
    return new (t || TestimonialsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TestimonialsComponent,
    selectors: [["app-testimonials"]],
    decls: 12,
    vars: 1,
    consts: [[1, "pt-5", "pb-5"], [1, "container"], ["id", "carouselExampleCaptions", 1, "carousel", "slide", 2, "background-color", "transparent !important"], [1, "carousel-inner"], ["class", "carousel-item", 3, "active", 4, "ngFor", "ngForOf"], ["src", "assets/Testimonials/quote.svg", "alt", "\u0645\u0637\u0639\u0645 \u0623\u0648\u0644\u064A\u0641\u064A\u062A\u0648 \u0638\u0647\u0631\u0629 \u0644\u0628\u0646", 1, "quote-svg", "quote-svg-one"], ["src", "assets/Testimonials/quote.svg", "alt", "\u0645\u0637\u0639\u0645 \u0623\u0648\u0644\u064A\u0641\u064A\u062A\u0648 \u0638\u0647\u0631\u0629 \u0644\u0628\u0646", 1, "quote-svg", "quote-svg-position", "quote-svg-two"], [1, "carousel-buttons", "d-flex", "justify-content-center"], ["data-bs-target", "#carouselExampleCaptions", "data-bs-slide", "prev", 1, "mx-4", "carousel-button"], [1, "fa-solid", "fa-arrow-left"], ["data-bs-target", "#carouselExampleCaptions", "data-bs-slide", "next", 1, "mx-4", "carousel-button"], [1, "fa-solid", "fa-arrow-right"], [1, "carousel-item"], [1, "row", "justify-content-center", "align-items-center"], [1, "col-md-7"], [1, "testimonial-container"], [1, "client-info"], [1, "sec-text-color", "text-center", "m-0", "fs-5"], [1, "main-color", "text-center"], [1, "client-testimonal"], [1, "main-color", "testimon-text", "text-center", "lead", "font-italic"]],
    template: function TestimonialsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TestimonialsComponent_div_4_Template, 12, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5)(6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.carouselItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: [".carousel-inner[_ngcontent-%COMP%] {\n  min-height: 220px;\n}\n\n.carousel-button[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  color: var(--Main-Brand-Color);\n  border: 1px var(--Main-Brand-Color) solid !important;\n  border-radius: 50%;\n  margin: 10px;\n  height: 60px;\n  width: 60px;\n  transition: all 0.3s ease-in-out;\n}\n\n.carousel-button[_ngcontent-%COMP%]:hover {\n  color: var(--Text-Color) !important;\n  background-color: var(--Main-Sec-Brand-Color) !important;\n}\n\n.carousel-button[_ngcontent-%COMP%]:active {\n  border: 1px var(--Main-Brand-Color) solid !important;\n}\n\n.client-testimonal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 30px !important;\n  font-weight: 500;\n  font-style: italic;\n}\n\n.quote-svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.quote-svg-one[_ngcontent-%COMP%] {\n  right: 15%;\n}\n\n.quote-svg-two[_ngcontent-%COMP%] {\n  left: 15%;\n}\n\n.quote-svg-position[_ngcontent-%COMP%] {\n  transform: rotateY(180deg) translateY(-50%);\n}\n\n@media (max-width: 992px) {\n  .quote-svg-one[_ngcontent-%COMP%] {\n    right: 5%;\n  }\n  .quote-svg-two[_ngcontent-%COMP%] {\n    left: 5%;\n  }\n  .client-testimonal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 25px !important;\n  }\n}\n@media (max-width: 767px) {\n  .carousel-button[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n  }\n  .client-testimonal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n  .quote-svg[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLHdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxvREFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUFFRjs7QUFDQTtFQUNFLG1DQUFBO0VBQ0Esd0RBQUE7QUFFRjs7QUFDQTtFQUNFLG9EQUFBO0FBRUY7O0FBQ0E7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBRUY7O0FBQ0E7RUFDRSxVQUFBO0FBRUY7O0FBQUE7RUFDRSxTQUFBO0FBR0Y7O0FBQUE7RUFDRSwyQ0FBQTtBQUdGOztBQUFBO0VBQ0U7SUFDRSxTQUFBO0VBR0Y7RUFEQTtJQUNFLFFBQUE7RUFHRjtFQURBO0lBQ0UsMEJBQUE7RUFHRjtBQUNGO0FBQUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxXQUFBO0VBRUY7RUFDQTtJQUNFLDBCQUFBO0VBQ0Y7RUFFQTtJQUNFLHdCQUFBO0VBQUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1pbm5lciB7XHJcbiAgbWluLWhlaWdodDogMjIwcHg7XHJcbn1cclxuLmNhcm91c2VsLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tTWFpbi1CcmFuZC1Db2xvcik7XHJcbiAgYm9yZGVyOiAxcHggdmFyKC0tTWFpbi1CcmFuZC1Db2xvcikgc29saWQgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogNjBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLmNhcm91c2VsLWJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLVRleHQtQ29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTWFpbi1TZWMtQnJhbmQtQ29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1idXR0b246YWN0aXZlIHtcclxuICBib3JkZXI6IDFweCB2YXIoLS1NYWluLUJyYW5kLUNvbG9yKSBzb2xpZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2xpZW50LXRlc3RpbW9uYWwgcCB7XHJcbiAgZm9udC1zaXplOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5xdW90ZS1zdmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi5xdW90ZS1zdmctb25lIHtcclxuICByaWdodDogMTUlO1xyXG59XHJcbi5xdW90ZS1zdmctdHdvIHtcclxuICBsZWZ0OiAxNSU7XHJcbn1cclxuXHJcbi5xdW90ZS1zdmctcG9zaXRpb24ge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5xdW90ZS1zdmctb25lIHtcclxuICAgIHJpZ2h0OiA1JTtcclxuICB9XHJcbiAgLnF1b3RlLXN2Zy10d28ge1xyXG4gICAgbGVmdDogNSU7XHJcbiAgfVxyXG4gIC5jbGllbnQtdGVzdGltb25hbCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNhcm91c2VsLWJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICB9XHJcblxyXG4gIC5jbGllbnQtdGVzdGltb25hbCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnF1b3RlLXN2ZyB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 59764:
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared/components/working-hours/working-hours.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkingHoursComponent: () => (/* binding */ WorkingHoursComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 34228);


class WorkingHoursComponent {
  constructor() {
    this.sectionDescColor = '';
    this.customClass = false;
  }
  static #_ = this.ɵfac = function WorkingHoursComponent_Factory(t) {
    return new (t || WorkingHoursComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WorkingHoursComponent,
    selectors: [["app-working-hours"]],
    inputs: {
      sectionDescColor: "sectionDescColor",
      customClass: "customClass"
    },
    decls: 7,
    vars: 3,
    consts: [[1, "working-hours", "d-flex", "justify-content-center", "align-items-center", "my-5"], [1, "container"], [1, "row", "justify-content-center", "justify-content-md-end", "align-items-center"], [1, "col-12"], [1, "working-hours-content", "py-2", "px-1", 3, "ngClass"], [1, "text-center"]],
    template: function WorkingHoursComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0637\u0648\u0627\u0644 \u0623\u064A\u0627\u0645 \u0627\u0644\u0623\u0633\u0628\u0648\u0639 : \u0645\u0646 \u0627\u0644\u062B\u0627\u0644\u062B\u0629 \u0645\u0633\u0627\u0621\u064B - \u0627\u0644\u062B\u0627\u0646\u064A\u0629 \u0635\u0628\u0627\u062D\u0627\u064B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.customClass ? "gray" : "white");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.sectionDescColor);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: [".gray.working-hours-content[_ngcontent-%COMP%] {\n  border-top: 3px solid var(--Second-Border-Color);\n  border-bottom: 3px solid var(--Second-Border-Color);\n}\n\n.white.working-hours-content[_ngcontent-%COMP%] {\n  border-top: 3px solid #fff;\n  border-bottom: 3px solid #fff;\n}\n\n.working-hours-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #565450;\n  font-weight: 800;\n  font-size: 26px;\n}\n\n@media (min-width: 992px) and (max-width: 1360px) {\n  .working-hours-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 992px) {\n  .working-hours-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 767px) {\n  .working-hours-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy93b3JraW5nLWhvdXJzL3dvcmtpbmctaG91cnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnREFBQTtFQUNBLG1EQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwwQkFBQTtFQUNBLDZCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBQUE7RUFDRTtJQUNFLGVBQUE7RUFHRjtBQUNGO0FBQUE7RUFDRTtJQUNFLGVBQUE7RUFFRjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGVBQUE7RUFDRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmdyYXkud29ya2luZy1ob3Vycy1jb250ZW50IHtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0tU2Vjb25kLUJvcmRlci1Db2xvcik7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLVNlY29uZC1Cb3JkZXItQ29sb3IpO1xyXG59XHJcbi53aGl0ZS53b3JraW5nLWhvdXJzLWNvbnRlbnQge1xyXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmZmO1xyXG59XHJcbi53b3JraW5nLWhvdXJzLWNvbnRlbnQgaDMge1xyXG4gIGNvbG9yOiAjNTY1NDUwO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMzYwcHgpIHtcclxuICAud29ya2luZy1ob3Vycy1jb250ZW50IGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC53b3JraW5nLWhvdXJzLWNvbnRlbnQgaDMge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLndvcmtpbmctaG91cnMtY29udGVudCBoMyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 84752:
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/footer/footer.component */ 14254);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 21895);
/* harmony import */ var _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/testimonials/testimonials.component */ 92935);
/* harmony import */ var _components_custom_section_custom_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/custom-section/custom-section.component */ 61700);
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-header/page-header.component */ 88283);
/* harmony import */ var _components_border_button_border_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/border-button/border-button.component */ 47480);
/* harmony import */ var _components_normal_button_normal_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/normal-button/normal-button.component */ 40430);
/* harmony import */ var _components_section_title_section_title_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/section-title/section-title.component */ 21213);
/* harmony import */ var _components_working_hours_working_hours_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/working-hours/working-hours.component */ 59764);
/* harmony import */ var _components_bg_div_bg_div_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/bg-div/bg-div.component */ 65365);
/* harmony import */ var _components_custom_second_section_custom_second_section_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/custom-second-section/custom-second-section.component */ 81211);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _components_scroll_button_scroll_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/scroll-button/scroll-button.component */ 4745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 59936);















const declarations = [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_2__.TestimonialsComponent, _components_custom_section_custom_section_component__WEBPACK_IMPORTED_MODULE_3__.CustomSectionComponent, _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__.PageHeaderComponent, _components_border_button_border_button_component__WEBPACK_IMPORTED_MODULE_5__.BorderButtonComponent, _components_normal_button_normal_button_component__WEBPACK_IMPORTED_MODULE_6__.NormalButtonComponent, _components_section_title_section_title_component__WEBPACK_IMPORTED_MODULE_7__.SectionTitleComponent, _components_working_hours_working_hours_component__WEBPACK_IMPORTED_MODULE_8__.WorkingHoursComponent, _components_bg_div_bg_div_component__WEBPACK_IMPORTED_MODULE_9__.BgDivComponent, _components_custom_second_section_custom_second_section_component__WEBPACK_IMPORTED_MODULE_10__.CustomSecondSectionComponent, _components_scroll_button_scroll_button_component__WEBPACK_IMPORTED_MODULE_11__.ScrollButtonComponent];
class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_2__.TestimonialsComponent, _components_custom_section_custom_section_component__WEBPACK_IMPORTED_MODULE_3__.CustomSectionComponent, _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__.PageHeaderComponent, _components_border_button_border_button_component__WEBPACK_IMPORTED_MODULE_5__.BorderButtonComponent, _components_normal_button_normal_button_component__WEBPACK_IMPORTED_MODULE_6__.NormalButtonComponent, _components_section_title_section_title_component__WEBPACK_IMPORTED_MODULE_7__.SectionTitleComponent, _components_working_hours_working_hours_component__WEBPACK_IMPORTED_MODULE_8__.WorkingHoursComponent, _components_bg_div_bg_div_component__WEBPACK_IMPORTED_MODULE_9__.BgDivComponent, _components_custom_second_section_custom_second_section_component__WEBPACK_IMPORTED_MODULE_10__.CustomSecondSectionComponent, _components_scroll_button_scroll_button_component__WEBPACK_IMPORTED_MODULE_11__.ScrollButtonComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule],
    exports: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_2__.TestimonialsComponent, _components_custom_section_custom_section_component__WEBPACK_IMPORTED_MODULE_3__.CustomSectionComponent, _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__.PageHeaderComponent, _components_border_button_border_button_component__WEBPACK_IMPORTED_MODULE_5__.BorderButtonComponent, _components_normal_button_normal_button_component__WEBPACK_IMPORTED_MODULE_6__.NormalButtonComponent, _components_section_title_section_title_component__WEBPACK_IMPORTED_MODULE_7__.SectionTitleComponent, _components_working_hours_working_hours_component__WEBPACK_IMPORTED_MODULE_8__.WorkingHoursComponent, _components_bg_div_bg_div_component__WEBPACK_IMPORTED_MODULE_9__.BgDivComponent, _components_custom_second_section_custom_second_section_component__WEBPACK_IMPORTED_MODULE_10__.CustomSecondSectionComponent, _components_scroll_button_scroll_button_component__WEBPACK_IMPORTED_MODULE_11__.ScrollButtonComponent]
  });
})();

/***/ }),

/***/ 49174:
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* reexport safe */ _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__.AppServerModule)
/* harmony export */ });
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module */ 21463);


/***/ }),

/***/ 18967:
/*!****************************************!*\
  !*** ./node_modules/express/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 18967;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 50852:
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 82361:
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 95687:
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 41808:
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 87561:
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ 49411:
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ 22037:
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 63477:
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 39512:
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 76224:
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		__webpack_require__.O(undefined, [736], () => (__webpack_require__(56394)))
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [736], () => (__webpack_require__(34991)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + (chunkId === 736 ? "vendor" : chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			179: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(736);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map