"use strict";
exports.id = 443;
exports.ids = [443];
exports.modules = {

/***/ 64600:
/*!********************************************************************************!*\
  !*** ./src/app/modules/menu/components/menu-section/menu-section.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuSectionComponent: () => (/* binding */ MenuSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var src_app_services_main_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/main-service.service */ 26923);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 34228);



function MenuSectionComponent_div_3_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0627\u0644\u0646\u0641\u0631 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u0627\u0644\u0643\u064A\u0644\u0648 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function MenuSectionComponent_div_3_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " \u0627\u0644\u0633\u0639\u0631 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
function MenuSectionComponent_div_3_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 17);
  }
}
function MenuSectionComponent_div_3_div_13_ng_container_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25)(1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r7 == null ? null : product_r7.min_price);
  }
}
function MenuSectionComponent_div_3_div_13_ng_container_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25)(1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r7 == null ? null : product_r7.max_price);
  }
}
function MenuSectionComponent_div_3_div_13_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MenuSectionComponent_div_3_div_13_ng_container_9_div_1_Template, 3, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MenuSectionComponent_div_3_div_13_ng_container_9_div_2_Template, 3, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r7.min_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", product_r7.max_price);
  }
}
function MenuSectionComponent_div_3_div_13_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25)(2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const product_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r7 == null ? null : product_r7.medium_price);
  }
}
function MenuSectionComponent_div_3_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "div", 20)(3, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, ".................................................... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MenuSectionComponent_div_3_div_13_ng_container_9_Template, 3, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MenuSectionComponent_div_3_div_13_ng_container_10_Template, 6, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r7 == null ? null : product_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", product_r7 == null ? null : product_r7.calories, " \u0633\u0639\u0631\u0629 \u062D\u0631\u0627\u0631\u064A\u0629");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (product_r7 == null ? null : product_r7.min_price) || (product_r7 == null ? null : product_r7.max_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(product_r7 == null ? null : product_r7.max_price) && !(product_r7 == null ? null : product_r7.min_price));
  }
}
function MenuSectionComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 11)(9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, MenuSectionComponent_div_3_ng_container_10_Template, 5, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, MenuSectionComponent_div_3_ng_container_11_Template, 3, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, MenuSectionComponent_div_3_div_12_Template, 1, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MenuSectionComponent_div_3_div_13_Template, 11, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("diff-menu-section", !(i_r2 % 4 == 0 || i_r2 % 4 == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", category_r1 == null ? null : category_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", category_r1 == null ? null : category_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (category_r1.products[i_r2] == null ? null : category_r1.products[i_r2].min_price) && (category_r1.products[i_r2] == null ? null : category_r1.products[i_r2].max_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(category_r1.products[i_r2] == null ? null : category_r1.products[i_r2].min_price) && !(category_r1.products[i_r2] == null ? null : category_r1.products[i_r2].max_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(category_r1.products[i_r2] == null ? null : category_r1.products[i_r2].min_price) && !(category_r1.products[i_r2] == null ? null : category_r1.products[i_r2].max_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", category_r1.products);
  }
}
class MenuSectionComponent {
  constructor(mainService) {
    this.mainService = mainService;
    this.isSandwiches = false;
    this.categoryList = [];
  }
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
  hasKiloPrice(products) {
    return products.some(p => p.kilo_price !== undefined && p.kilo_price !== null);
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
  static #_ = this.ɵfac = function MenuSectionComponent_Factory(t) {
    return new (t || MenuSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_main_service_service__WEBPACK_IMPORTED_MODULE_0__.MainServiceService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: MenuSectionComponent,
    selectors: [["app-menu-section"]],
    decls: 4,
    vars: 1,
    consts: [["id", "menuSection", 1, "section-padding"], ["dir", "rtl", 1, "container"], [1, "row", "justify-content-start", "align-items-start"], ["class", "col-lg-6 pt-4 pb-5 normal-section", 3, "diff-menu-section", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "pt-4", "pb-5", "normal-section"], [1, "container"], [1, "row", "title-row", "mb-5"], [1, "menu-title", "d-flex", "justify-content-center", "align-items-center"], [1, "text-center", "ps-3"], ["alt", "\u0645\u0637\u0639\u0645 \u0623\u0648\u0644\u064A\u0641\u064A\u062A\u0648 \u0638\u0647\u0631\u0629 \u0644\u0628\u0646", 1, "img-fluid", "w-25", 3, "src"], [1, "row", "justify-content-around", "align-items-center", "mb-2", "mb-md-5"], [1, "col-4"], [1, "col-3"], [4, "ngIf"], ["class", "col-2 person-kilo", 4, "ngIf"], ["class", "row justify-content-around align-items-center mb-3", 4, "ngFor", "ngForOf"], [1, "col-2", "person-kilo", "text-center"], [1, "col-2", "person-kilo"], [1, "row", "justify-content-around", "align-items-center", "mb-3"], [1, "col-4", "ps-0"], [1, "item-container"], [1, "mb-0"], [1, "calories"], [1, "col-3", "overflow-hidden", "px-0"], ["class", "col-2 text-center", 4, "ngIf"], [1, "col-2", "text-center"], [1, "person-kilo"]],
    template: function MenuSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MenuSectionComponent_div_3_Template, 14, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categoryList);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: ["#menuSection[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700 !important;\n  font-size: 40px;\n}\n\n#menuSection[_ngcontent-%COMP%]   .person-kilo[_ngcontent-%COMP%], #menuSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 800 !important;\n  font-size: 20px;\n}\n\n.normal-section[_ngcontent-%COMP%] {\n  color: var(--Main-Brand-Color);\n}\n\n.diff-menu-section[_ngcontent-%COMP%] {\n  background-color: var(--Main-Sec-Brand-Color);\n  color: var(--Text-Color) !important;\n}\n\n.calories[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n\n@media (min-width: 992px) and (max-width: 1200px) {\n  #menuSection[_ngcontent-%COMP%]   .person-kilo[_ngcontent-%COMP%], #menuSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 992px) {\n  #menuSection[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  #menuSection[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n    width: 15% !important;\n  }\n  #menuSection[_ngcontent-%COMP%]   .person-kilo[_ngcontent-%COMP%], #menuSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  #menuSection[_ngcontent-%COMP%]   .calories[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n@media (max-width: 767px) {\n  #menuSection[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n  #menuSection[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%] {\n    width: 15% !important;\n  }\n  #menuSection[_ngcontent-%COMP%]   .person-kilo[_ngcontent-%COMP%], #menuSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  #menuSection[_ngcontent-%COMP%]   .calories[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9tZW51L2NvbXBvbmVudHMvbWVudS1zZWN0aW9uL21lbnUtc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUdBOztFQUdFLDJCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUdBO0VBQ0UsOEJBQUE7QUFBRjs7QUFFQTtFQUNFLDZDQUFBO0VBQ0EsbUNBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRTs7SUFFRSxlQUFBO0VBQ0Y7QUFDRjtBQUVBO0VBQ0U7SUFDRSxlQUFBO0VBQUY7RUFFQTtJQUNFLHFCQUFBO0VBQUY7RUFHQTs7SUFFRSxlQUFBO0VBREY7RUFJQTtJQUNFLGVBQUE7RUFGRjtBQUNGO0FBS0E7RUFDRTtJQUNFLGVBQUE7RUFIRjtFQUtBO0lBQ0UscUJBQUE7RUFIRjtFQU1BOztJQUVFLGVBQUE7RUFKRjtFQU9BO0lBQ0UsZUFBQTtFQUxGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVudVNlY3Rpb24gLm1lbnUtdGl0bGUgaDIge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgLy8gY29sb3I6IHZhcigtLU1haW4tQnJhbmQtQ29sb3IpO1xyXG59XHJcblxyXG4jbWVudVNlY3Rpb24gLnBlcnNvbi1raWxvLFxyXG4jbWVudVNlY3Rpb24gaDMge1xyXG4gIC8vIGNvbG9yOiB2YXIoLS1NYWluLUJyYW5kLUNvbG9yKTtcclxuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5ub3JtYWwtc2VjdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLU1haW4tQnJhbmQtQ29sb3IpO1xyXG59XHJcbi5kaWZmLW1lbnUtc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tTWFpbi1TZWMtQnJhbmQtQ29sb3IpO1xyXG4gIGNvbG9yOiB2YXIoLS1UZXh0LUNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2Fsb3JpZXMge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAjbWVudVNlY3Rpb24gLnBlcnNvbi1raWxvLFxyXG4gICNtZW51U2VjdGlvbiBoMyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAjbWVudVNlY3Rpb24gLm1lbnUtdGl0bGUgaDIge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICAjbWVudVNlY3Rpb24gLmltZy1mbHVpZCB7XHJcbiAgICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAjbWVudVNlY3Rpb24gLnBlcnNvbi1raWxvLFxyXG4gICNtZW51U2VjdGlvbiBoMyB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG5cclxuICAjbWVudVNlY3Rpb24gLmNhbG9yaWVzIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICNtZW51U2VjdGlvbiAubWVudS10aXRsZSBoMiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG4gICNtZW51U2VjdGlvbiAuaW1nLWZsdWlkIHtcclxuICAgIHdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICNtZW51U2VjdGlvbiAucGVyc29uLWtpbG8sXHJcbiAgI21lbnVTZWN0aW9uIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gICNtZW51U2VjdGlvbiAuY2Fsb3JpZXMge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 59354:
/*!*****************************************************!*\
  !*** ./src/app/modules/menu/menu-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuRoutingModule: () => (/* binding */ MenuRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 68804);
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.component */ 28682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 59936);




const routes = [{
  path: '',
  component: _menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent
}];
class MenuRoutingModule {
  static #_ = this.ɵfac = function MenuRoutingModule_Factory(t) {
    return new (t || MenuRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MenuRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MenuRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 28682:
/*!************************************************!*\
  !*** ./src/app/modules/menu/menu.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 59936);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/page-header/page-header.component */ 88283);
/* harmony import */ var _components_menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu-section/menu-section.component */ 64600);



class MenuComponent {
  static #_ = this.ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["app-menu"]],
    decls: 3,
    vars: 2,
    consts: [["id", "menu", 1, "menu"], [3, "sectionBackgroundImg", "pageTitle"]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-page-header", 1)(2, "app-menu-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("sectionBackgroundImg", "/assets/about/about-2.webp")("pageTitle", "\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0637\u0639\u0627\u0645");
      }
    },
    dependencies: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_0__.PageHeaderComponent, _components_menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_1__.MenuSectionComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 33443:
/*!*********************************************!*\
  !*** ./src/app/modules/menu/menu.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuModule: () => (/* binding */ MenuModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 34228);
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-routing.module */ 59354);
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.component */ 28682);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 84752);
/* harmony import */ var _components_menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menu-section/menu-section.component */ 64600);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 59936);






class MenuModule {
  static #_ = this.ɵfac = function MenuModule_Factory(t) {
    return new (t || MenuModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: MenuModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MenuModule, {
    declarations: [_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent, _components_menu_section_menu_section_component__WEBPACK_IMPORTED_MODULE_3__.MenuSectionComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _menu_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
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
//# sourceMappingURL=443.js.map