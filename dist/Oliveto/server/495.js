"use strict";
exports.id = 495;
exports.ids = [495];
exports.modules = {

/***/ 84860:
/*!********************************************************************!*\
  !*** ./src/app/modules/home/components/header/header.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _shared_components_normal_button_normal_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/normal-button/normal-button.component */ 40430);



class HeaderComponent {
  constructor(router) {
    this.router = router;
  }
  navigateTo() {
    this.router.navigate(['/', 'about']);
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 10,
    vars: 2,
    consts: [["id", "hero", 1, "d-flex", "justify-content-center", "align-items-center", "vh-100", "pb-0"], [1, "container-fluid", "pt-5", "mt-5"], [1, "row", "justify-content-end", "align-items-center"], [1, "col-lg-8", "col-xl-6"], ["dir", "rtl", 1, "header-content", "text-center", "text-lg-end"], [1, "mb-3", 2, "line-height", "1.4"], [1, "mb-4", 2, "line-height", "1.6"], [3, "buttonName", "buttonBackgroundColor", "routerLinkAction"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0643 \u0641\u064A \u0645\u0637\u0639\u0645\u0646\u0627 \u0627\u0644\u0631\u0627\u0626\u0639 \u0641\u064A \u0638\u0647\u0631\u0629 \u0644\u0628\u0646!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " \u062A\u0641\u0636\u0644 \u0628\u0632\u064A\u0627\u0631\u062A\u0646\u0627 \u0627\u0644\u064A\u0648\u0645 \u0648\u0627\u0643\u062A\u0634\u0641 \u0645\u0630\u0627\u0642 \u0627\u0644\u0623\u0643\u0644\u0627\u062A \u0627\u0644\u0634\u0647\u064A\u0629 \u0641\u064A \u0642\u0644\u0628 \u0638\u0647\u0631\u0629 \u0644\u0628\u0646. \u0625\u0646\u0646\u0627 \u0648\u0627\u062B\u0642\u0648\u0646 \u0645\u0646 \u0623\u0646\u0643 \u0633\u062A\u062A\u0631\u0643\u0646\u0627 \u0628\u0627\u0628\u062A\u0633\u0627\u0645\u0629 \u0639\u0644\u0649 \u0648\u062C\u0647\u0643 \u0648\u0631\u063A\u0628\u0629 \u0641\u064A \u0627\u0644\u0639\u0648\u062F\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "app-normal-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("routerLinkAction", function HeaderComponent_Template_app_normal_button_routerLinkAction_9_listener() {
          return ctx.navigateTo();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("buttonName", "\u0627\u0644\u0645\u0632\u064A\u062F")("buttonBackgroundColor", "#e75e25");
      }
    },
    dependencies: [_shared_components_normal_button_normal_button_component__WEBPACK_IMPORTED_MODULE_0__.NormalButtonComponent],
    styles: ["#hero[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100%;\n  background: url(\"/assets/home/hero.webp\") top center;\n  position: relative;\n  overflow: hidden;\n  padding: 0;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: white;\n}\n\n@media (max-width: 991px) {\n  #hero[_ngcontent-%COMP%] {\n    background: url(\"/assets/home/Burger.webp\") center center !important;\n    height: 95vh !important;\n    background-position: left;\n  }\n  .header-content[_ngcontent-%COMP%] {\n    margin-bottom: 215px;\n  }\n}\n@media (max-width: 575px) {\n  #hero[_ngcontent-%COMP%] {\n    background: url(\"/assets/home/Burger-phnoe-size.webp\") center center !important;\n    height: 80vh !important;\n  }\n  .header-content[_ngcontent-%COMP%] {\n    margin-bottom: 215px;\n  }\n}\n#hero[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  width: 85% !important;\n}\n\nsection[_ngcontent-%COMP%] {\n  padding: 60px 0;\n  overflow: hidden;\n}\n\n#hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\n  text-shadow: -1px -1px 2px #000, 1px -1px 2px #000, -1px 1px 2px #000, 1px 1px 2px #000;\n}\n\n#hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-weight: 700;\n}\n\n#hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n}\n\n@media (max-width: 992px) {\n  #hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 45px;\n  }\n  #hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n@media (max-width: 767px) {\n  #hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n  #hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFO0lBQ0Usb0VBQUE7SUFDQSx1QkFBQTtJQUNBLHlCQUFBO0VBREY7RUFJQTtJQUNFLG9CQUFBO0VBRkY7QUFDRjtBQUtBO0VBQ0U7SUFDRSwrRUFBQTtJQUNBLHVCQUFBO0VBSEY7RUFNQTtJQUNFLG9CQUFBO0VBSkY7QUFDRjtBQU9BO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBTEY7O0FBUUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFMRjs7QUFRQTs7RUFHRSx1RkFBQTtBQU5GOztBQVVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFO0lBQ0UsZUFBQTtFQVBGO0VBVUE7SUFDRSxlQUFBO0VBUkY7QUFDRjtBQVdBO0VBQ0U7SUFDRSxlQUFBO0VBVEY7RUFZQTtJQUNFLGVBQUE7RUFWRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaGVybyBzdGF0aWMgaW1nIGNzc1xyXG5cclxuI2hlcm8ge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9ob21lL2hlcm8ud2VicFwiKSB0b3AgY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICNoZXJvIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaG9tZS9CdXJnZXIud2VicFwiKSBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDk1dmggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAjaGVybyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2hvbWUvQnVyZ2VyLXBobm9lLXNpemUud2VicFwiKSBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDgwdmggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItY29udGVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMTVweDtcclxuICB9XHJcbn1cclxuXHJcbiNoZXJvIC5jb250YWluZXItZmx1aWQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI2hlcm8gaDEsXHJcbnAge1xyXG5cclxuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDJweCAjMDAwLCAxcHggLTFweCAycHggIzAwMCwgLTFweCAxcHggMnB4ICMwMDAsXHJcbiAgICAxcHggMXB4IDJweCAjMDAwO1xyXG59XHJcblxyXG4jaGVybyBoMSB7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiNoZXJvIHAge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAjaGVybyBoMSB7XHJcbiAgICBmb250LXNpemU6IDQ1cHg7XHJcbiAgfVxyXG5cclxuICAjaGVybyBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICNoZXJvIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcblxyXG4gICNoZXJvIHAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8gaGVybyBzbGlkZXIgY3NzXHJcblxyXG4vLyAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHRvcDogNTAlO1xyXG4vLyAgIGxlZnQ6IDY1JTtcclxuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuLy8gICB0ZXh0LWFsaWduOiBlbmQ7XHJcbi8vICAgY29sb3I6ICNmZmY7IC8qIEFkanVzdCB0ZXh0IGNvbG9yIGFzIG5lZWRlZCAqL1xyXG4vLyAgIHdpZHRoOiA0MCU7XHJcbi8vIH1cclxuXHJcbi8vICNoZXJvU2xpZGVyIGgxLFxyXG4vLyBwIHtcclxuLy8gICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDJweCAjMDAwLCAxcHggLTFweCAycHggIzAwMCwgLTFweCAxcHggMnB4ICMwMDAsXHJcbi8vICAgICAxcHggMXB4IDJweCAjMDAwO1xyXG4vLyB9XHJcblxyXG4vLyAjaGVyb1NsaWRlciBoMSB7XHJcbi8vICAgZm9udC1zaXplOiA2MHB4O1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbi8vIH1cclxuXHJcbi8vICNoZXJvU2xpZGVyIHAge1xyXG4vLyAgIGZvbnQtc2l6ZTogMzBweDtcclxuLy8gICBmb250LXdlaWdodDogNzAwO1xyXG4vLyB9XHJcblxyXG4vLyAjaGVyb1NsaWRlciB7XHJcbi8vICAgaGVpZ2h0OiAxMDB2aDtcclxuLy8gfVxyXG4vLyAjaGVyb1NsaWRlciAuY2Fyb3VzZWwtaW5uZXIge1xyXG4vLyAgIGhlaWdodDogMTAwJTtcclxuLy8gfVxyXG4vLyAjaGVyb1NsaWRlciAuY2Fyb3VzZWwtaXRlbSBpbWcge1xyXG4vLyAgIGhlaWdodDogMTAwdmg7XHJcbi8vICAgb2JqZWN0LWZpdDogY292ZXI7IC8qIE1haW50YWluIGFzcGVjdCByYXRpbyBhbmQgZmlsbCB0aGUgc3BhY2UgKi9cclxuLy8gfVxyXG4vLyBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxNTAwcHgpIHtcclxuLy8gICAjaGVyb1NsaWRlciBoMSB7XHJcbi8vICAgICBmb250LXNpemU6IDQ1cHg7XHJcbi8vICAgfVxyXG5cclxuLy8gICAjaGVyb1NsaWRlciBwIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjVweDtcclxuLy8gICB9XHJcbi8vICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4vLyAgICAgdG9wOiA1MCU7XHJcbi8vICAgICBsZWZ0OiA2MCU7XHJcbi8vICAgICB3aWR0aDogNDklO1xyXG4vLyAgIH1cclxuLy8gICAgIC5oZXJvU2xpZGVyIHtcclxuLy8gICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vICAgLmNhcm91c2VsLWl0ZW0gaW1nIHtcclxuLy8gICAgIGhlaWdodDogMTAwdmggIWltcG9ydGFudDtcclxuLy8gICAgIG9iamVjdC1maXQ6IGNvdmVyOyAvKiBNYWludGFpbiBhc3BlY3QgcmF0aW8gYW5kIGZpbGwgdGhlIHNwYWNlICovXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuLy8gICAjaGVyb1NsaWRlciBoMSB7XHJcbi8vICAgICBmb250LXNpemU6IDM1cHg7XHJcbi8vICAgfVxyXG5cclxuLy8gICAjaGVyb1NsaWRlciBwIHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuLy8gICB9XHJcbi8vICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4vLyAgICAgdG9wOiA1MCU7XHJcbi8vICAgICBsZWZ0OiA1MCU7XHJcbi8vICAgICB3aWR0aDogNzAlO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLmhlcm9TbGlkZXIge1xyXG4vLyAgICAgaGVpZ2h0OiA3MHZoICFpbXBvcnRhbnQ7XHJcbi8vICAgfVxyXG4vLyAgIC5jYXJvdXNlbC1pdGVtIGltZyB7XHJcbi8vICAgICBoZWlnaHQ6IDcwdmggIWltcG9ydGFudDtcclxuLy8gICAgIG9iamVjdC1maXQ6IGNvdmVyOyAvKiBNYWludGFpbiBhc3BlY3QgcmF0aW8gYW5kIGZpbGwgdGhlIHNwYWNlICovXHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuLy8gICAuaGVyb1NsaWRlciB7XHJcbi8vICAgICBoZWlnaHQ6IDgwdmggIWltcG9ydGFudDtcclxuLy8gICB9XHJcbi8vICAgLmNhcm91c2VsLWlubmVyIHtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICB9XHJcbi8vICAgLmNhcm91c2VsLWl0ZW0gaW1nIHtcclxuLy8gICAgIGhlaWdodDogODB2aCAhaW1wb3J0YW50O1xyXG4vLyAgICAgb2JqZWN0LWZpdDogY292ZXI7IC8qIE1haW50YWluIGFzcGVjdCByYXRpbyBhbmQgZmlsbCB0aGUgc3BhY2UgKi9cclxuLy8gICB9XHJcbi8vICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4vLyAgICAgdG9wOiA1MCU7XHJcbi8vICAgICBsZWZ0OiA1MCU7XHJcbi8vICAgICB3aWR0aDogNzAlO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgI2hlcm9TbGlkZXIgaDEge1xyXG4vLyAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgI2hlcm9TbGlkZXIgcCB7XHJcbi8vICAgICBmb250LXNpemU6IDE1cHg7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyAjaGVyb1NsaWRlciAuY29udGFpbmVyLWZsdWlkIHtcclxuLy8gICAtLWJzLWd1dHRlci14OiAwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 38754:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/home/components/infinite-slider/infinite-slider.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfiniteSliderComponent: () => (/* binding */ InfiniteSliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 59936);

class InfiniteSliderComponent {
  static #_ = this.ɵfac = function InfiniteSliderComponent_Factory(t) {
    return new (t || InfiniteSliderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InfiniteSliderComponent,
    selectors: [["app-infinite-slider"]],
    decls: 12,
    vars: 0,
    consts: [["id", "infiniteSlider", 1, "text-wrapper-container"], [1, "text-wrapper", "d-flex", "justify-content-start", "overflow-hidden"]],
    template: function InfiniteSliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "!\u0646\u062D\u0646 \u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631\u0643\u0645 \u0641\u064A \u0645\u0637\u0639\u0645\u0646\u0627 \u0641\u064A \u0638\u0647\u0631\u0629 \u0644\u0628\u0646. \u062A\u0641\u0636\u0644\u0648\u0627 \u0628\u0632\u064A\u0627\u0631\u062A\u0646\u0627 \u0648\u0627\u0633\u062A\u0645\u062A\u0639\u0648\u0627 \u0628\u0623\u0634\u0647\u0649 \u0627\u0644\u0623\u0637\u0628\u0627\u0642 \u0648\u0623\u0641\u0636\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "!\u0646\u062D\u0646 \u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631\u0643\u0645 \u0641\u064A \u0645\u0637\u0639\u0645\u0646\u0627 \u0641\u064A \u0638\u0647\u0631\u0629 \u0644\u0628\u0646. \u062A\u0641\u0636\u0644\u0648\u0627 \u0628\u0632\u064A\u0627\u0631\u062A\u0646\u0627 \u0648\u0627\u0633\u062A\u0645\u062A\u0639\u0648\u0627 \u0628\u0623\u0634\u0647\u0649 \u0627\u0644\u0623\u0637\u0628\u0627\u0642 \u0648\u0623\u0641\u0636\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "!\u0646\u062D\u0646 \u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631\u0643\u0645 \u0641\u064A \u0645\u0637\u0639\u0645\u0646\u0627 \u0641\u064A \u0638\u0647\u0631\u0629 \u0644\u0628\u0646. \u062A\u0641\u0636\u0644\u0648\u0627 \u0628\u0632\u064A\u0627\u0631\u062A\u0646\u0627 \u0648\u0627\u0633\u062A\u0645\u062A\u0639\u0648\u0627 \u0628\u0623\u0634\u0647\u0649 \u0627\u0644\u0623\u0637\u0628\u0627\u0642 \u0648\u0623\u0641\u0636\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "!\u0646\u062D\u0646 \u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631\u0643\u0645 \u0641\u064A \u0645\u0637\u0639\u0645\u0646\u0627 \u0641\u064A \u0638\u0647\u0631\u0629 \u0644\u0628\u0646. \u062A\u0641\u0636\u0644\u0648\u0627 \u0628\u0632\u064A\u0627\u0631\u062A\u0646\u0627 \u0648\u0627\u0633\u062A\u0645\u062A\u0639\u0648\u0627 \u0628\u0623\u0634\u0647\u0649 \u0627\u0644\u0623\u0637\u0628\u0627\u0642 \u0648\u0623\u0641\u0636\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "!\u0646\u062D\u0646 \u0641\u064A \u0627\u0646\u062A\u0638\u0627\u0631\u0643\u0645 \u0641\u064A \u0645\u0637\u0639\u0645\u0646\u0627 \u0641\u064A \u0638\u0647\u0631\u0629 \u0644\u0628\u0646. \u062A\u0641\u0636\u0644\u0648\u0627 \u0628\u0632\u064A\u0627\u0631\u062A\u0646\u0627 \u0648\u0627\u0633\u062A\u0645\u062A\u0639\u0648\u0627 \u0628\u0623\u0634\u0647\u0649 \u0627\u0644\u0623\u0637\u0628\u0627\u0642 \u0648\u0623\u0641\u0636\u0644 \u0627\u0644\u062E\u062F\u0645\u0627\u062A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    styles: [".text-wrapper[_ngcontent-%COMP%] {\n  background-color: var(--Main-Brand-Color);\n  color: white;\n}\n\n#infiniteSlider[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding: 1rem 1.5rem;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  animation: _ngcontent-%COMP%_move-rtl 6000ms linear infinite;\n  font-size: 28px;\n  font-weight: 900;\n  margin: 0;\n}\n\n.text-wrapper[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  animation-play-state: paused;\n}\n\n@keyframes _ngcontent-%COMP%_move-rtl {\n  0% {\n    transform: translateX(-100%);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}\n@media (max-width: 992px) {\n  #infiniteSlider[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px !important;\n  }\n}\n@media (max-width: 767px) {\n  #infiniteSlider[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 15px !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1476px) {\n  #infiniteSlider[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvaW5maW5pdGUtc2xpZGVyL2luZmluaXRlLXNsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDRCQUFBO0VBQ0Y7RUFFQTtJQUNFLHdCQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0U7SUFDRSwwQkFBQTtFQURGO0FBQ0Y7QUFJQTtFQUNFO0lBQ0UsMEJBQUE7RUFGRjtBQUNGO0FBS0E7RUFDRTtJQUNFLGVBQUE7RUFIRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTWFpbi1CcmFuZC1Db2xvcik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jaW5maW5pdGVTbGlkZXIgaDMge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGFuaW1hdGlvbjogbW92ZS1ydGwgNjAwMG1zIGxpbmVhciBpbmZpbml0ZTtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50ZXh0LXdyYXBwZXI6aG92ZXIgaDMge1xyXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbW92ZS1ydGwge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICNpbmZpbml0ZVNsaWRlciBoMyB7XHJcbiAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICNpbmZpbml0ZVNsaWRlciBoMyB7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDE0NzZweCkge1xyXG4gICNpbmZpbml0ZVNsaWRlciBoMyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 10607:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/home/components/menu-carousel/menu-carousel.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuCarouselComponent: () => (/* binding */ MenuCarouselComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var src_app_services_main_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/main-service.service */ 26923);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _shared_components_section_title_section_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/section-title/section-title.component */ 21213);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ 48249);





function MenuCarouselComponent_ng_container_5_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 10)(3, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const product_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", product_r2 == null ? null : product_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", product_r2 == null ? null : product_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", product_r2 == null ? null : product_r2.category_name, "");
  }
}
function MenuCarouselComponent_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuCarouselComponent_ng_container_5_ng_container_1_ng_template_1_Template, 7, 3, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function MenuCarouselComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MenuCarouselComponent_ng_container_5_ng_container_1_Template, 2, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r2 == null ? null : product_r2.image);
  }
}
class MenuCarouselComponent {
  constructor(mainService) {
    this.mainService = mainService;
    this.productsList = [];
    this.customOptions = {
      stagePadding: 50,
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      margin: 10,
      lazyLoad: false,
      pullDrag: false,
      dots: true,
      rtl: true,
      autoplay: true,
      navSpeed: 700,
      navText: ['<i class="fa-solid fa-arrow-right"></i>', '<i class="fa-solid fa-arrow-left"></i>'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 2
        },
        940: {
          items: 4
        }
      },
      nav: true
    };
  }
  ngOnInit() {
    new Promise(resolve => {
      this.mainService.getAllProducts().subscribe({
        next: res => {
          if (res) {
            this.productsList = res?.data?.data;
            resolve(true);
          }
        },
        error: error => {}
      });
    }).then(() => {});
  }
  static #_ = this.ɵfac = function MenuCarouselComponent_Factory(t) {
    return new (t || MenuCarouselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_main_service_service__WEBPACK_IMPORTED_MODULE_0__.MainServiceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MenuCarouselComponent,
    selectors: [["app-menu-carousel"]],
    decls: 6,
    vars: 3,
    consts: [[1, "menu-carousel", "section-padding"], [3, "title"], [1, "container-fluid"], [3, "options"], ["owlCar", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["carouselSlide", ""], ["dir", "rtl", 1, "item", "mx-2"], ["alt", "\u0645\u0637\u0639\u0645 \u0623\u0648\u0644\u064A\u0641\u064A\u062A\u0648 \u0638\u0647\u0631\u0629 \u0644\u0628\u0646", 1, "img-fluid", "item-img", 3, "src"], [1, "caption", "bg-secondry-color", "text-center", "text-lg-end"], [1, "main-text-color", 2, "font-weight", "700 !important"], [1, "main-color", 2, "font-weight", "700 !important"]],
    template: function MenuCarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-section-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "owl-carousel-o", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MenuCarouselComponent_ng_container_5_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "\u0627\u0644\u0623\u0637\u0628\u0627\u0642");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.productsList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_components_section_title_section_title_component__WEBPACK_IMPORTED_MODULE_1__.SectionTitleComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselSlideDirective],
    styles: [".menu-carousel[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n.menu-carousel[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -50px;\n  left: 15px;\n  right: 15px;\n  opacity: 0;\n  transition: all 0.3s;\n  padding: 50px;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n}\n\n.menu-carousel[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .caption[_ngcontent-%COMP%] {\n  opacity: 1;\n  bottom: 15px;\n}\n\n.menu-carousel[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:focus   .caption[_ngcontent-%COMP%] {\n  opacity: 1;\n  bottom: 15px;\n}\n\n.item-img[_ngcontent-%COMP%] {\n  transition: all 0.4s;\n}\n\n.item[_ngcontent-%COMP%]:hover   .item-img[_ngcontent-%COMP%] {\n  scale: 1.06;\n  cursor: pointer;\n  filter: blur(3px);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvbWVudS1jYXJvdXNlbC9tZW51LWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRjs7QUFFQTtFQUNDLFdBQUE7RUFDQSxlQUFBO0VBQ0MsaUJBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWNhcm91c2VsIC5pdGVtIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tZW51LWNhcm91c2VsIC5jYXB0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtNTBweDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcclxufVxyXG5cclxuLm1lbnUtY2Fyb3VzZWwgLml0ZW06aG92ZXIgLmNhcHRpb24ge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubWVudS1jYXJvdXNlbCAuaXRlbTpmb2N1cyAuY2FwdGlvbiB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5pdGVtLWltZyB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbn1cclxuXHJcbi5pdGVtOmhvdmVyIC5pdGVtLWltZyB7XHJcblx0c2NhbGU6IDEuMDY7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG4gIGZpbHRlcjogYmx1cigzcHgpO1xyXG59XHJcblxyXG4vLyAuaXRlbSAuY2FwdGlvbiB7XHJcbi8vIFx0aGVpZ2h0OiAxMDAlO1xyXG4vLyBcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yNjgpO1xyXG4vLyBcdGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG4vLyBcdHRyYW5zaXRpb246IDAuM3M7XHJcbi8vIFx0b3BhY2l0eTogMDtcclxuLy8gXHRjb2xvcjogI2ZmZjtcclxuLy8gfVxyXG4vLyAuY2Fyb3VzZWwtYnV0dG9uIHtcclxuLy8gICBjb2xvcjogdmFyKC0tTWFpbi1CcmFuZC1Db2xvcik7XHJcbi8vICAgZm9udC1zaXplOiAyMHB4O1xyXG4vLyAgIG1hcmdpbjogNXB4O1xyXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbi8vICAgcGFkZGluZzogNXB4O1xyXG4vLyAgIHdpZHRoOiA0MnB4O1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLU1haW4tQnJhbmQtQ29sb3IpO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgbWFyZ2luLXJpZ2h0OiA2OHB4O1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiA2OHB4O1xyXG4vLyB9XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 19218:
/*!****************************************************************************!*\
  !*** ./src/app/modules/home/components/menu-table/menu-table.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuTableComponent: () => (/* binding */ MenuTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var src_app_services_main_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/main-service.service */ 26923);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _shared_components_border_button_border_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/border-button/border-button.component */ 47480);
/* harmony import */ var _shared_components_section_title_section_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/section-title/section-title.component */ 21213);






function MenuTableComponent_div_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0627\u0644\u0646\u0641\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u0627\u0644\u0643\u064A\u0644\u0648");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MenuTableComponent_div_4_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u0627\u0644\u0633\u0639\u0631");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
function MenuTableComponent_div_4_tbody_7_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const product_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r6 == null ? null : product_r6.min_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r6 == null ? null : product_r6.max_price);
  }
}
function MenuTableComponent_div_4_tbody_7_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const product_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r6 == null ? null : product_r6.medium_price);
  }
}
function MenuTableComponent_div_4_tbody_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tbody")(1, "tr")(2, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MenuTableComponent_div_4_tbody_7_ng_container_4_Template, 5, 2, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MenuTableComponent_div_4_tbody_7_ng_container_5_Template, 3, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](product_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (product_r6 == null ? null : product_r6.min_price) || (product_r6 == null ? null : product_r6.max_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(product_r6 == null ? null : product_r6.max_price) && !(product_r6 == null ? null : product_r6.min_price));
  }
}
function MenuTableComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "table", 8)(2, "thead")(3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MenuTableComponent_div_4_ng_container_5_Template, 5, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MenuTableComponent_div_4_ng_container_6_Template, 3, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MenuTableComponent_div_4_tbody_7_Template, 6, 3, "tbody", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("menu-border", i_r2 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (category_r1.products[i_r2] == null ? null : category_r1.products[i_r2].min_price) && (category_r1.products[i_r2] == null ? null : category_r1.products[i_r2].max_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(category_r1.products[i_r2] == null ? null : category_r1.products[i_r2].min_price) && !(category_r1.products[i_r2] == null ? null : category_r1.products[i_r2].max_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", category_r1.products);
  }
}
const _c0 = function () {
  return ["menu"];
};
class MenuTableComponent {
  constructor(mainService) {
    this.mainService = mainService;
    this.categoryList = [];
  }
  ngOnInit() {
    new Promise(resolve => {
      this.mainService.getAllCategories().subscribe({
        next: res => {
          if (res) {
            this.categoryList = res?.data?.data;
            resolve(true);
          }
        },
        error: error => {}
      });
    }).then(() => {});
  }
  static #_ = this.ɵfac = function MenuTableComponent_Factory(t) {
    return new (t || MenuTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_main_service_service__WEBPACK_IMPORTED_MODULE_0__.MainServiceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: MenuTableComponent,
    selectors: [["app-menu-table"]],
    decls: 7,
    vars: 5,
    consts: [["id", "menuTable", 1, "menu-table", "section-padding"], ["title", "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0637\u0639\u0627\u0645"], ["dir", "rtl", 1, "container"], [1, "row", "justify-content-center", "align-items-start", "justify-content-md-start", "justify-content-xl-center"], ["class", "col-md-6 col-lg-6 col-xl-4", 3, "menu-border", 4, "ngFor", "ngForOf"], [1, "row", "mt-lg-3", "text-center"], [3, "buttonName", "centered", "routerLink"], [1, "col-md-6", "col-lg-6", "col-xl-4"], [1, "table", "table-borderless", "text-center"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["scope", "row"]],
    template: function MenuTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-section-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MenuTableComponent_div_4_Template, 8, 5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-border-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.categoryList.slice(0, 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("buttonName", "\u0627\u0644\u0645\u0632\u064A\u062F")("centered", true)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _shared_components_border_button_border_button_component__WEBPACK_IMPORTED_MODULE_1__.BorderButtonComponent, _shared_components_section_title_section_title_component__WEBPACK_IMPORTED_MODULE_2__.SectionTitleComponent],
    styles: ["table[_ngcontent-%COMP%], .table[_ngcontent-%COMP%], .table-borderless[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n\n.table[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(caption)    > *[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: var(--Main-Brand-Color);\n  font-weight: 800;\n}\n\n.menu-border[_ngcontent-%COMP%] {\n  border-right: 1px solid var(--Main-Brand-Color);\n  border-left: 1px solid var(--Main-Brand-Color);\n}\n\n@media (min-width: 992px) and (max-width: 1400px) {\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .menu-border[_ngcontent-%COMP%] {\n    border-left: none;\n  }\n}\n@media (max-width: 992px) {\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .menu-border[_ngcontent-%COMP%] {\n    border-left: none;\n  }\n}\n@media (max-width: 767px) {\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .menu-border[_ngcontent-%COMP%] {\n    border-top: 1px solid var(--Main-Brand-Color);\n    border-bottom: 1px solid var(--Main-Brand-Color);\n    border-right: none;\n    border-left: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvbWVudS10YWJsZS9tZW51LXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSx3Q0FBQTtBQUNGOztBQUVBO0VBQ0Usd0NBQUE7QUFDRjs7QUFFQTs7RUFFRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsK0NBQUE7RUFDQSw4Q0FBQTtBQUNGOztBQUNBO0VBQ0U7O0lBRUUsZUFBQTtFQUVGO0VBQUE7SUFDRSxpQkFBQTtFQUVGO0FBQ0Y7QUFBQTtFQUNFOztJQUVFLGVBQUE7RUFFRjtFQUNBO0lBQ0UsaUJBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRTs7SUFFRSxlQUFBO0VBQUY7RUFFQTtJQUNFLDZDQUFBO0lBQ0EsZ0RBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0VBQUY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLFxyXG4udGFibGUsXHJcbi50YWJsZS1ib3JkZXJsZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUgPiA6bm90KGNhcHRpb24pID4gKiA+ICoge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZSB0aCxcclxuLnRhYmxlIHRkIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6IHZhcigtLU1haW4tQnJhbmQtQ29sb3IpO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5tZW51LWJvcmRlciB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tTWFpbi1CcmFuZC1Db2xvcik7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1NYWluLUJyYW5kLUNvbG9yKTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxNDAwcHgpIHtcclxuICAudGFibGUgdGgsXHJcbiAgLnRhYmxlIHRkIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgLm1lbnUtYm9yZGVyIHtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAudGFibGUgdGgsXHJcbiAgLnRhYmxlIHRkIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcblxyXG4gIC5tZW51LWJvcmRlciB7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC50YWJsZSB0aCxcclxuICAudGFibGUgdGQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAubWVudS1ib3JkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLU1haW4tQnJhbmQtQ29sb3IpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLU1haW4tQnJhbmQtQ29sb3IpO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 92603:
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeRoutingModule: () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 98622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);




const routes = [{
  path: '',
  component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}];
class HomeRoutingModule {
  static #_ = this.ɵfac = function HomeRoutingModule_Factory(t) {
    return new (t || HomeRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: HomeRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 98622:
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _shared_components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/testimonials/testimonials.component */ 92935);
/* harmony import */ var _shared_components_custom_section_custom_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/custom-section/custom-section.component */ 61700);
/* harmony import */ var _shared_components_border_button_border_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/border-button/border-button.component */ 47480);
/* harmony import */ var _shared_components_working_hours_working_hours_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/working-hours/working-hours.component */ 59764);
/* harmony import */ var _shared_components_custom_second_section_custom_second_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/custom-second-section/custom-second-section.component */ 81211);
/* harmony import */ var _components_infinite_slider_infinite_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/infinite-slider/infinite-slider.component */ 38754);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ 84860);
/* harmony import */ var _components_menu_carousel_menu_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/menu-carousel/menu-carousel.component */ 10607);
/* harmony import */ var _components_menu_table_menu_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/menu-table/menu-table.component */ 19218);











const _c0 = function () {
  return ["menu"];
};
class HomeComponent {
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 12,
    vars: 18,
    consts: [[3, "imgsrc", "sectionTitle", "sectionDesc"], ["button", "", 1, "text-right"], [3, "buttonName", "routerLink"], [3, "sectionTitle", "imgsrc", "sectionDesc", "sectionDescColor", "sectionTitleColor", "sectionBackgroundColor", "customFontClass"], ["working", ""], [3, "sectionDescColor"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "app-header")(1, "app-infinite-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "app-custom-section", 0)(3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "app-border-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "app-custom-second-section", 3)(6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "app-working-hours", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "app-menu-carousel")(9, "app-menu-table")(10, "app-custom-section", 0)(11, "app-testimonials");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("imgsrc", "assets/home/home-photo1.webp")("sectionTitle", "\u062A\u0630\u0648\u0642 \u0627\u0644\u062A\u0631\u0627\u062B \u0627\u0644\u063A\u0646\u064A!")("sectionDesc", "\u0642\u0627\u0626\u0645\u062A\u0646\u0627 \u0645\u0644\u064A\u0626\u0629 \u0628\u0627\u0644\u0623\u0637\u0628\u0627\u0642 \u0627\u0644\u0645\u0645\u064A\u0632\u0629 \u0627\u0644\u062A\u064A \u062A\u062C\u0633\u062F \u0627\u0644\u062A\u0631\u0627\u062B \u0627\u0644\u063A\u0646\u064A \u0644\u0644\u0645\u0623\u0643\u0648\u0644\u0627\u062A \u0627\u0644\u0633\u0648\u0631\u064A\u0629. \u0633\u062A\u062C\u062F \u0644\u062F\u064A\u0646\u0627 \u062A\u0634\u0643\u064A\u0644\u0629 \u0648\u0627\u0633\u0639\u0629 \u0645\u0646 \u0627\u0644\u0645\u0642\u0628\u0644\u0627\u062A \u0627\u0644\u0644\u0630\u064A\u0630\u0629 \u0645\u062B\u0644 \u0627\u0644\u0645\u062A\u0628\u0644 \u0648\u0627\u0644\u062D\u0645\u0635 \u0648\u0627\u0644\u0641\u062A\u0648\u0634\u060C \u0648\u0623\u0637\u0628\u0627\u0642 \u0631\u0626\u064A\u0633\u064A\u0629 \u0634\u0647\u064A\u0629 \u0645\u062B\u0644 \u0627\u0644\u0634\u0627\u0648\u0631\u0645\u0627 \u0648\u0627\u0644\u0643\u0628\u0627\u0628. \u0646\u062D\u0631\u0635 \u0639\u0644\u0649 \u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062A \u0627\u0644\u0637\u0627\u0632\u062C\u0629 \u0648\u0627\u0644\u062A\u0648\u0627\u0628\u0644 \u0627\u0644\u0623\u0635\u064A\u0644\u0629 \u0644\u0646\u0642\u062F\u0645 \u0644\u0643\u0645 \u0623\u0641\u0636\u0644 \u0646\u0643\u0647\u0629 \u0648\u062C\u0648\u062F\u0629 \u0645\u0645\u0643\u0646\u0629.");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("buttonName", "\u062A\u0639\u0631\u0641 \u0639\u0644\u064A \u0623\u0637\u0628\u0627\u0642\u0646\u0627")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("sectionTitle", "\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644")("imgsrc", "assets/home/home-photo3.webp")("sectionTitle", "\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644")("sectionDesc", "\u0646\u062D\u0631\u0635 \u0639\u0644\u0649 \u062A\u0642\u062F\u064A\u0645 \u062E\u062F\u0645\u0629 \u0639\u0645\u0644\u0627\u0621 \u0645\u0645\u062A\u0627\u0632\u0629. \u064A\u0639\u0645\u0644 \u0641\u0631\u064A\u0642\u0646\u0627 \u0627\u0644\u0645\u062F\u0631\u0628 \u0639\u0644\u0649 \u0636\u0645\u0627\u0646 \u0631\u0627\u062D\u062A\u0643 \u0648\u0627\u0633\u062A\u0645\u062A\u0627\u0639\u0643 \u0628\u062A\u062C\u0631\u0628\u0629 \u062A\u0646\u0627\u0648\u0644 \u0627\u0644\u0637\u0639\u0627\u0645 \u0644\u062F\u064A\u0646\u0627.")("sectionDescColor", "#fff")("sectionTitleColor", "#fff")("sectionBackgroundColor", "#E65E25")("customFontClass", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("sectionDescColor", "#fff");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("imgsrc", "assets/home/home-photo2.webp")("sectionTitle", "\u062E\u0628\u0631\u0627\u0626\u0646\u0627")("sectionDesc", "\u0641\u0631\u064A\u0642\u0646\u0627 \u0627\u0644\u0645\u062D\u062A\u0631\u0641 \u0645\u0646 \u0627\u0644\u0637\u0647\u0627\u0629 \u0627\u0644\u0645\u0627\u0647\u0631\u064A\u0646 \u064A\u0639\u0645\u0644 \u0628\u0643\u0644 \u0627\u0647\u062A\u0645\u0627\u0645 \u0648\u062D\u0631\u0641\u064A\u0629 \u0644\u0625\u0639\u062F\u0627\u062F \u0627\u0644\u0623\u0637\u0628\u0627\u0642 \u0628\u0623\u0639\u0644\u0649 \u0645\u0633\u062A\u0648\u064A\u0627\u062A \u0627\u0644\u062C\u0648\u062F\u0629. \u0646\u062D\u0646 \u0646\u0647\u062A\u0645 \u0628\u062A\u0642\u062F\u064A\u0645 \u062A\u062C\u0631\u0628\u0629 \u0637\u0639\u0627\u0645 \u0627\u0633\u062A\u062B\u0646\u0627\u0626\u064A\u0629\u060C \u062D\u064A\u062B \u064A\u0645\u0643\u0646\u0643\u0645 \u0627\u0644\u062A\u0645\u062A\u0639 \u0628\u0627\u0644\u0623\u0637\u0628\u0627\u0642 \u0627\u0644\u0644\u0630\u064A\u0630\u0629 \u0641\u064A \u0623\u062C\u0648\u0627\u0621 \u0645\u0631\u064A\u062D\u0629 \u0648\u0648\u062F\u064A\u0629.\u0628\u0627\u0644\u0625\u0636\u0627\u0641\u0629 \u0625\u0644\u0649 \u0630\u0644\u0643\u060C \u0646\u062D\u0631\u0635 \u0639\u0644\u0649 \u062A\u0642\u062F\u064A\u0645 \u062E\u062F\u0645\u0629 \u0639\u0645\u0644\u0627\u0621 \u0645\u0645\u062A\u0627\u0632\u0629. \u064A\u0639\u0645\u0644 \u0641\u0631\u064A\u0642\u0646\u0627 \u0627\u0644\u0645\u062F\u0631\u0628 \u0639\u0644\u0649 \u0636\u0645\u0627\u0646 \u0631\u0627\u062D\u062A\u0643 \u0648\u0627\u0633\u062A\u0645\u062A\u0627\u0639\u0643 \u0628\u062A\u062C\u0631\u0628\u0629 \u062A\u0646\u0627\u0648\u0644 \u0627\u0644\u0637\u0639\u0627\u0645 \u0644\u062F\u064A\u0646\u0627. \u0646\u062D\u0646 \u0646\u0647\u062F\u0641 \u0625\u0644\u0649 \u062A\u0644\u0628\u064A\u0629 \u062C\u0645\u064A\u0639 \u062A\u0648\u0642\u0639\u0627\u062A\u0643 \u0648\u062A\u0642\u062F\u064A\u0645 \u062A\u062C\u0631\u0628\u0629 \u0644\u0627 \u062A\u064F\u0646\u0633\u0649 \u0648\u062A\u0633\u062A\u062D\u0642 \u0627\u0644\u0639\u0648\u062F\u0629 \u0645\u0631\u0627\u0631\u064B\u0627 \u0648\u062A\u0643\u0631\u0627\u0631\u064B\u0627.");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _shared_components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_0__.TestimonialsComponent, _shared_components_custom_section_custom_section_component__WEBPACK_IMPORTED_MODULE_1__.CustomSectionComponent, _shared_components_border_button_border_button_component__WEBPACK_IMPORTED_MODULE_2__.BorderButtonComponent, _shared_components_working_hours_working_hours_component__WEBPACK_IMPORTED_MODULE_3__.WorkingHoursComponent, _shared_components_custom_second_section_custom_second_section_component__WEBPACK_IMPORTED_MODULE_4__.CustomSecondSectionComponent, _components_infinite_slider_infinite_slider_component__WEBPACK_IMPORTED_MODULE_5__.InfiniteSliderComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _components_menu_carousel_menu_carousel_component__WEBPACK_IMPORTED_MODULE_7__.MenuCarouselComponent, _components_menu_table_menu_table_component__WEBPACK_IMPORTED_MODULE_8__.MenuTableComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 13495:
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 92603);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 98622);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 84752);
/* harmony import */ var _components_infinite_slider_infinite_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/infinite-slider/infinite-slider.component */ 38754);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ 84860);
/* harmony import */ var _components_menu_carousel_menu_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu-carousel/menu-carousel.component */ 10607);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-owl-carousel-o */ 48249);
/* harmony import */ var _components_menu_table_menu_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menu-table/menu-table.component */ 19218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 59936);










class HomeModule {
  static #_ = this.ɵfac = function HomeModule_Factory(t) {
    return new (t || HomeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: HomeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__.CarouselModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](HomeModule, {
    declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _components_infinite_slider_infinite_slider_component__WEBPACK_IMPORTED_MODULE_3__.InfiniteSliderComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _components_menu_carousel_menu_carousel_component__WEBPACK_IMPORTED_MODULE_5__.MenuCarouselComponent, _components_menu_table_menu_table_component__WEBPACK_IMPORTED_MODULE_6__.MenuTableComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__.CarouselModule]
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
//# sourceMappingURL=495.js.map