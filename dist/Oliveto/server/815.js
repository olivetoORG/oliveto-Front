"use strict";
exports.id = 815;
exports.ids = [815];
exports.modules = {

/***/ 92139:
/*!*******************************************************!*\
  !*** ./src/app/modules/about/about-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutRoutingModule: () => (/* binding */ AboutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ 80822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);




const routes = [{
  path: '',
  component: _about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent
}];
class AboutRoutingModule {
  static #_ = this.ɵfac = function AboutRoutingModule_Factory(t) {
    return new (t || AboutRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AboutRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 80822:
/*!**************************************************!*\
  !*** ./src/app/modules/about/about.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _shared_components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/testimonials/testimonials.component */ 92935);
/* harmony import */ var _shared_components_custom_section_custom_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/custom-section/custom-section.component */ 61700);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/page-header/page-header.component */ 88283);
/* harmony import */ var _shared_components_normal_button_normal_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/normal-button/normal-button.component */ 40430);
/* harmony import */ var _shared_components_working_hours_working_hours_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/working-hours/working-hours.component */ 59764);
/* harmony import */ var _shared_components_bg_div_bg_div_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/bg-div/bg-div.component */ 65365);
/* harmony import */ var _shared_components_custom_second_section_custom_second_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/custom-second-section/custom-second-section.component */ 81211);









class AboutComponent {
  constructor(router) {
    this.router = router;
  }
  navigateTo() {
    this.router.navigate(['/', 'menu']);
  }
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 9,
    vars: 22,
    consts: [[3, "pageTitle", "sectionBackgroundImg"], [3, "sectionTitle", "imgsrc", "sectionDesc", "sectionDescColor", "sectionTitleColor", "customFontClass", "customColClass", "customColsClass", "customAlignClass", "customimgWidthClass"], ["button", "", 1, "ms-lg-5", "mt-lg-5", "d-flex", "justify-content-center", "justify-content-lg-end", "align-items-center"], [3, "buttonBackgroundColor", "buttonName", "routerLinkAction"], [3, "imgsrc", "sectionTitle", "sectionDesc", "sectionDescColor", "customFontClass"], ["working", ""], [3, "customClass"], [3, "sectionBackgroundImg"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-page-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-custom-second-section", 1)(2, "span", 2)(3, "app-normal-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("routerLinkAction", function AboutComponent_Template_app_normal_button_routerLinkAction_3_listener() {
          return ctx.navigateTo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "app-custom-section", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-working-hours", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "app-bg-div", 7)(8, "app-testimonials");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageTitle", "\u0645\u0646 \u0646\u062D\u0646")("sectionBackgroundImg", "/assets/home/hero.webp");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sectionTitle", "\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644")("imgsrc", "assets/about/about-3.webp")("sectionTitle", "\u0645\u0631\u062D\u0628\u064B\u0627 \u0628\u0643 \u0641\u064A \u0645\u0637\u0639\u0645\u0646\u0627 \u0627\u0644\u0631\u0627\u0626\u0639 \u0641\u064A \u0638\u0647\u0631\u0629 \u0644\u0628\u0646!")("sectionDesc", "\u0646\u062D\u0646 \u0646\u0631\u062D\u0628 \u0628\u0627\u0644\u0639\u0627\u0626\u0644\u0627\u062A \u0648\u0627\u0644\u0623\u0635\u062F\u0642\u0627\u0621 \u0648\u0627\u0644\u0632\u0645\u0644\u0627\u0621 \u0644\u062A\u062C\u0631\u0628\u0629 \u062A\u0630\u0648\u0642 \u0627\u0644\u0623\u0637\u0628\u0627\u0642 \u0627\u0644\u0634\u0647\u064A\u0629 \u0641\u064A \u0645\u0637\u0639\u0645\u0646\u0627. \u0643\u0645\u0627 \u0646\u0642\u062F\u0645 \u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0637\u0639\u0627\u0645 \u0644\u0644\u0645\u0646\u0627\u0633\u0628\u0627\u062A \u0627\u0644\u062E\u0627\u0635\u0629 \u0648\u0627\u0644\u0623\u062D\u062F\u0627\u062B. \u0627\u062D\u062C\u0632 \u0637\u0627\u0648\u0644\u062A\u0643 \u0627\u0644\u0622\u0646 \u0648\u0627\u0633\u062A\u0645\u062A\u0639 \u0628\u062A\u062C\u0631\u0628\u0629 \u062A\u0630\u0648\u0642 \u0644\u0627 \u062A\u064F\u0646\u0633\u0649. \u062A\u0641\u0636\u0644 \u0628\u0632\u064A\u0627\u0631\u062A\u0646\u0627 \u0627\u0644\u064A\u0648\u0645 \u0648\u0627\u0643\u062A\u0634\u0641 \u0645\u0630\u0627\u0642 \u0627\u0644\u0623\u0643\u0644\u0627\u062A \u0627\u0644\u0634\u0647\u064A\u0629 \u0641\u064A \u0642\u0644\u0628 \u0638\u0647\u0631\u0629 \u0644\u0628\u0646. \u0625\u0646\u0646\u0627 \u0648\u0627\u062B\u0642\u0648\u0646 \u0645\u0646 \u0623\u0646\u0643 \u0633\u062A\u062A\u0631\u0643\u0646\u0627 \u0628\u0627\u0628\u062A\u0633\u0627\u0645\u0629 \u0639\u0644\u0649 \u0648\u062C\u0647\u0643 \u0648\u0631\u063A\u0628\u0629 \u0641\u064A \u0627\u0644\u0639\u0648\u062F\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649.")("sectionDescColor", "#56534F")("sectionTitleColor", "#DF5D27")("customFontClass", false)("customColClass", true)("customColsClass", true)("customAlignClass", true)("customimgWidthClass", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttonBackgroundColor", "#6E110BD1")("buttonName", "\u0627\u0644\u0645\u0632\u064A\u062F");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("imgsrc", "assets/home/home-photo3.webp")("sectionTitle", "\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644")("sectionDesc", "\u0646\u062D\u0631\u0635 \u0639\u0644\u0649 \u062A\u0642\u062F\u064A\u0645 \u062E\u062F\u0645\u0629 \u0639\u0645\u0644\u0627\u0621 \u0645\u0645\u062A\u0627\u0632\u0629. \u064A\u0639\u0645\u0644 \u0641\u0631\u064A\u0642\u0646\u0627 \u0627\u0644\u0645\u062F\u0631\u0628 \u0639\u0644\u0649 \u0636\u0645\u0627\u0646 \u0631\u0627\u062D\u062A\u0643 \u0648\u0627\u0633\u062A\u0645\u062A\u0627\u0639\u0643 \u0628\u062A\u062C\u0631\u0628\u0629 \u062A\u0646\u0627\u0648\u0644 \u0627\u0644\u0637\u0639\u0627\u0645 \u0644\u062F\u064A\u0646\u0627.")("sectionDescColor", "#565450")("customFontClass", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("customClass", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("sectionBackgroundImg", "/assets/about/about-2.webp");
      }
    },
    dependencies: [_shared_components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_0__.TestimonialsComponent, _shared_components_custom_section_custom_section_component__WEBPACK_IMPORTED_MODULE_1__.CustomSectionComponent, _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__.PageHeaderComponent, _shared_components_normal_button_normal_button_component__WEBPACK_IMPORTED_MODULE_3__.NormalButtonComponent, _shared_components_working_hours_working_hours_component__WEBPACK_IMPORTED_MODULE_4__.WorkingHoursComponent, _shared_components_bg_div_bg_div_component__WEBPACK_IMPORTED_MODULE_5__.BgDivComponent, _shared_components_custom_second_section_custom_second_section_component__WEBPACK_IMPORTED_MODULE_6__.CustomSecondSectionComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 29815:
/*!***********************************************!*\
  !*** ./src/app/modules/about/about.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutModule: () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 92139);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component */ 80822);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 84752);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 59936);





class AboutModule {
  static #_ = this.ɵfac = function AboutModule_Factory(t) {
    return new (t || AboutModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AboutModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AboutModule, {
    declarations: [_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ })

};
;
//# sourceMappingURL=815.js.map