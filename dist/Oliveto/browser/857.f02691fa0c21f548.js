"use strict";(self.webpackChunkOliveto=self.webpackChunkOliveto||[]).push([[857],{857:(T,l,c)=>{c.r(l),c.d(l,{MenuModule:()=>S});var u=c(6814),r=c(5290),n=c(9468),p=c(1520),a=c(9948);function m(e,o){1&e&&(n.ynx(0),n.TgZ(1,"div",16),n._uU(2," \u0627\u0644\u0646\u0641\u0631 "),n.qZA(),n.TgZ(3,"div",16),n._uU(4," \u0627\u0644\u0643\u064a\u0644\u0648 "),n.qZA(),n.BQk())}function d(e,o){1&e&&(n.ynx(0),n.TgZ(1,"div",16),n._uU(2," \u0627\u0644\u0633\u0639\u0631 "),n.qZA(),n.BQk())}function _(e,o){1&e&&n._UZ(0,"div",17)}function g(e,o){if(1&e&&(n.TgZ(0,"div",25)(1,"span",26),n._uU(2),n.qZA()()),2&e){const t=n.oxw(2).$implicit;n.xp6(2),n.Oqu(null==t?null:t.min_price)}}function f(e,o){if(1&e&&(n.TgZ(0,"div",25)(1,"span",26),n._uU(2),n.qZA()()),2&e){const t=n.oxw(2).$implicit;n.xp6(2),n.Oqu(null==t?null:t.max_price)}}function x(e,o){if(1&e&&(n.ynx(0),n.YNc(1,g,3,1,"div",24),n.YNc(2,f,3,1,"div",24),n.BQk()),2&e){const t=n.oxw().$implicit;n.xp6(1),n.Q6J("ngIf",t.min_price),n.xp6(1),n.Q6J("ngIf",t.max_price)}}function v(e,o){if(1&e&&(n.ynx(0),n.TgZ(1,"div",25)(2,"span",26),n._uU(3),n.qZA()(),n.TgZ(4,"div",25),n._UZ(5,"span",26),n.qZA(),n.BQk()),2&e){const t=n.oxw().$implicit;n.xp6(3),n.Oqu(null==t?null:t.medium_price)}}function M(e,o){if(1&e&&(n.TgZ(0,"div",18)(1,"div",19)(2,"div",20)(3,"h3",21),n._uU(4),n.qZA(),n.TgZ(5,"span",22),n._uU(6),n.qZA()()(),n.TgZ(7,"div",23),n._uU(8,".................................................... "),n.qZA(),n.YNc(9,x,3,2,"ng-container",13),n.YNc(10,v,6,1,"ng-container",13),n.qZA()),2&e){const t=o.$implicit;n.xp6(4),n.Oqu(null==t?null:t.name),n.xp6(2),n.hij("",null==t?null:t.calories," \u0633\u0639\u0631\u0629 \u062d\u0631\u0627\u0631\u064a\u0629"),n.xp6(3),n.Q6J("ngIf",(null==t?null:t.min_price)||(null==t?null:t.max_price)),n.xp6(1),n.Q6J("ngIf",!(null!=t&&t.max_price||null!=t&&t.min_price))}}function C(e,o){if(1&e&&(n.TgZ(0,"div",4)(1,"div",5)(2,"div",6)(3,"div",7)(4,"h2",8),n._uU(5),n.qZA(),n._UZ(6,"img",9),n.qZA()(),n.TgZ(7,"div",10),n._UZ(8,"div",11)(9,"div",12),n.YNc(10,m,5,0,"ng-container",13),n.YNc(11,d,3,0,"ng-container",13),n.YNc(12,_,1,0,"div",14),n.qZA(),n.YNc(13,M,11,4,"div",15),n.qZA()()),2&e){const t=o.$implicit,i=o.index;n.ekj("diff-menu-section",!(i%4==0||i%4==1)),n.xp6(5),n.hij(" ",null==t?null:t.name,""),n.xp6(1),n.Q6J("src",null==t?null:t.image,n.LSH),n.xp6(4),n.Q6J("ngIf",(null==t.products[i]?null:t.products[i].min_price)&&(null==t.products[i]?null:t.products[i].max_price)),n.xp6(1),n.Q6J("ngIf",!(null!=t.products[i]&&t.products[i].min_price||null!=t.products[i]&&t.products[i].max_price)),n.xp6(1),n.Q6J("ngIf",!(null!=t.products[i]&&t.products[i].min_price||null!=t.products[i]&&t.products[i].max_price)),n.xp6(1),n.Q6J("ngForOf",t.products)}}let O=(()=>{class e{constructor(t){this.mainService=t,this.isSandwiches=!1,this.categoryList=[]}hasKiloPrice(t){return t.some(i=>null!=i.kilo_price)}ngOnInit(){new Promise(t=>{this.mainService.getAllCategories().subscribe({next:i=>{i&&(this.categoryList=i?.data?.data,t(!0))},error:i=>{}})}).then(()=>{})}static#n=this.\u0275fac=function(i){return new(i||e)(n.Y36(a.f))};static#t=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-menu-section"]],decls:4,vars:1,consts:[["id","menuSection",1,"section-padding"],["dir","rtl",1,"container"],[1,"row","justify-content-start","align-items-start"],["class","col-lg-6 pt-4 pb-5 normal-section",3,"diff-menu-section",4,"ngFor","ngForOf"],[1,"col-lg-6","pt-4","pb-5","normal-section"],[1,"container"],[1,"row","title-row","mb-5"],[1,"menu-title","d-flex","justify-content-center","align-items-center"],[1,"text-center","ps-3"],["alt","\u0645\u0637\u0639\u0645 \u0623\u0648\u0644\u064a\u0641\u064a\u062a\u0648 \u0638\u0647\u0631\u0629 \u0644\u0628\u0646",1,"img-fluid","w-25",3,"src"],[1,"row","justify-content-around","align-items-center","mb-2","mb-md-5"],[1,"col-4"],[1,"col-3"],[4,"ngIf"],["class","col-2 person-kilo",4,"ngIf"],["class","row justify-content-around align-items-center mb-3",4,"ngFor","ngForOf"],[1,"col-2","person-kilo","text-center"],[1,"col-2","person-kilo"],[1,"row","justify-content-around","align-items-center","mb-3"],[1,"col-4","ps-0"],[1,"item-container"],[1,"mb-0"],[1,"calories"],[1,"col-3","overflow-hidden","px-0"],["class","col-2 text-center",4,"ngIf"],[1,"col-2","text-center"],[1,"person-kilo"]],template:function(i,s){1&i&&(n.TgZ(0,"section",0)(1,"div",1)(2,"div",2),n.YNc(3,C,14,8,"div",3),n.qZA()()()),2&i&&(n.xp6(3),n.Q6J("ngForOf",s.categoryList))},dependencies:[u.sg,u.O5],styles:["#menuSection[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700!important;font-size:40px}#menuSection[_ngcontent-%COMP%]   .person-kilo[_ngcontent-%COMP%], #menuSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:800!important;font-size:20px}.normal-section[_ngcontent-%COMP%]{color:var(--Main-Brand-Color)}.diff-menu-section[_ngcontent-%COMP%]{background-color:var(--Main-Sec-Brand-Color);color:var(--Text-Color)!important}.calories[_ngcontent-%COMP%]{text-decoration:underline}@media (min-width: 992px) and (max-width: 1200px){#menuSection[_ngcontent-%COMP%]   .person-kilo[_ngcontent-%COMP%], #menuSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px}}@media (max-width: 992px){#menuSection[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px}#menuSection[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]{width:15%!important}#menuSection[_ngcontent-%COMP%]   .person-kilo[_ngcontent-%COMP%], #menuSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:22px}#menuSection[_ngcontent-%COMP%]   .calories[_ngcontent-%COMP%]{font-size:15px}}@media (max-width: 767px){#menuSection[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:25px}#menuSection[_ngcontent-%COMP%]   .img-fluid[_ngcontent-%COMP%]{width:15%!important}#menuSection[_ngcontent-%COMP%]   .person-kilo[_ngcontent-%COMP%], #menuSection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:14px}#menuSection[_ngcontent-%COMP%]   .calories[_ngcontent-%COMP%]{font-size:10px}}"]})}return e})();const h=[{path:"",component:(()=>{class e{static#n=this.\u0275fac=function(i){return new(i||e)};static#t=this.\u0275cmp=n.Xpm({type:e,selectors:[["app-menu"]],decls:3,vars:2,consts:[["id","menu",1,"menu"],[3,"sectionBackgroundImg","pageTitle"]],template:function(i,s){1&i&&(n.TgZ(0,"section",0),n._UZ(1,"app-page-header",1)(2,"app-menu-section"),n.qZA()),2&i&&(n.xp6(1),n.Q6J("sectionBackgroundImg","/assets/about/about-2.webp")("pageTitle","\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0637\u0639\u0627\u0645"))},dependencies:[p.q,O]})}return e})()}];let P=(()=>{class e{static#n=this.\u0275fac=function(i){return new(i||e)};static#t=this.\u0275mod=n.oAB({type:e});static#e=this.\u0275inj=n.cJS({imports:[r.Bz.forChild(h),r.Bz]})}return e})();var Z=c(8524);let S=(()=>{class e{static#n=this.\u0275fac=function(i){return new(i||e)};static#t=this.\u0275mod=n.oAB({type:e});static#e=this.\u0275inj=n.cJS({imports:[u.ez,P,Z.m]})}return e})()}}]);