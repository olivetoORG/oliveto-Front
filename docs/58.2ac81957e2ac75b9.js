"use strict";(self.webpackChunkOliveto=self.webpackChunkOliveto||[]).push([[58],{58:(B,l,c)=>{c.r(l),c.d(l,{ContactUsModule:()=>N});var m=c(6814),e=c(95),s=c(5290),t=c(9468),f=c(6626),_=c(9948),C=c(2425),v=c(2243);function h(n,a){1&n&&(t.TgZ(0,"div",13),t._UZ(1,"img",14),t._uU(2," \u0627\u0644\u0625\u0633\u0645 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function x(n,a){1&n&&(t.TgZ(0,"div",13),t._UZ(1,"img",14),t._uU(2," \u0627\u0644\u0625\u0633\u0645 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 \u064a\u062c\u0628 \u0623\u0644\u0627 \u064a\u0642\u0644 \u0639\u0646 3 \u0627\u062d\u0631\u0641 "),t.qZA())}function b(n,a){if(1&n&&(t.ynx(0),t.YNc(1,h,3,0,"div",12),t.YNc(2,x,3,0,"div",12),t.BQk()),2&n){const u=t.oxw();let o,r;t.xp6(1),t.Q6J("ngIf",null==(o=u.contactForm.get("name"))||null==o.errors?null:o.errors.required),t.xp6(1),t.Q6J("ngIf",null==(r=u.contactForm.get("name"))||null==r.errors?null:r.errors.minlength)}}function F(n,a){1&n&&(t.TgZ(0,"div",13),t._UZ(1,"img",14),t._uU(2," \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u0649 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function Z(n,a){1&n&&(t.TgZ(0,"div",13),t._UZ(1,"img",14),t._uU(2," \u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 \u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0639\u0646\u0648\u0627\u0646 \u0628\u0631\u064a\u062f \u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a \u0635\u062d\u064a\u062d \u0627\u0644\u0628\u064f\u0646\u064a\u0629 "),t.qZA())}function M(n,a){if(1&n&&(t.ynx(0),t.YNc(1,F,3,0,"div",12),t.YNc(2,Z,3,0,"div",12),t.BQk()),2&n){const u=t.oxw();let o,r;t.xp6(1),t.Q6J("ngIf",null==(o=u.contactForm.get("email"))||null==o.errors?null:o.errors.required),t.xp6(1),t.Q6J("ngIf",null==(r=u.contactForm.get("email"))||null==r.errors?null:r.errors.email)}}function A(n,a){1&n&&(t.TgZ(0,"div",13),t._UZ(1,"img",14),t._uU(2," \u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function w(n,a){if(1&n&&(t.ynx(0),t.YNc(1,A,3,0,"div",12),t.BQk()),2&n){const u=t.oxw();let o;t.xp6(1),t.Q6J("ngIf",null==(o=u.contactForm.get("phone"))||null==o.errors?null:o.errors.required)}}function O(n,a){1&n&&(t.TgZ(0,"div",13),t._UZ(1,"img",14),t._uU(2," \u062d\u0642\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0645\u0637\u0644\u0648\u0628 "),t.qZA())}function T(n,a){if(1&n&&(t.ynx(0),t.YNc(1,O,3,0,"div",12),t.BQk()),2&n){const u=t.oxw();let o;t.xp6(1),t.Q6J("ngIf",null==(o=u.contactForm.get("message"))||null==o.errors?null:o.errors.required)}}let P=(()=>{class n{constructor(u,o){this.mainService=u,this.toasterService=o,this.formSubmited=!1,this.contactForm=new e.cw({name:new e.NI("",[e.kI.required,e.kI.pattern(/^[\u0621-\u064aa-zA-Z ]+$/),e.kI.minLength(3)]),email:new e.NI("",[e.kI.required,e.kI.email]),phone:new e.NI("",[e.kI.required,e.kI.pattern(/[0-9]+/),e.kI.minLength(9)]),message:new e.NI("",[e.kI.required,e.kI.pattern(/^[\u0621-\u064aa-zA-Z\d ]+$/)])})}formSubmit(u){this.formSubmited=!0,this.contactForm.valid?this.mainService.sendContactData(u.value).subscribe({next:o=>{this.toasterService.success("\u062a\u0645 \u0627\u0644\u0625\u0631\u0633\u0627\u0644 \u0628\u0646\u062c\u0627\u062d")},error:o=>{this.toasterService.error("\u062d\u062f\u062b\u062a \u0645\u0634\u0643\u0644\u0629 \u062c\u0627\u0631\u0649 \u0627\u0644\u0639\u0645\u0644 \u0639\u0644\u0649 \u062d\u0644\u0647\u0627")}}):this.toasterService.error("\u0645\u0646 \u0641\u0636\u0644\u0643 \u0642\u0645 \u0628\u0625\u062f\u062e\u0627\u0644 \u062c\u0645\u064a\u0639 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0635\u062d\u064a\u062d\u0629.","\u062e\u0637\u0627\u0654",{tapToDismiss:!1,positionClass:"toast-top-left"})}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(_.f),t.Y36(C._W))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-contact-form"]],decls:16,vars:8,consts:[["role","group","dir","rtl","id","contactForm",1,"mb-4","mb-lg-0",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-6","form-group","mb-4"],["type","text","placeholder","\u0627\u0644\u0625\u0633\u0645","name","name","id","name","aria-label","\u0627\u0644\u0625\u0633\u0645","formControlName","name",1,"form-control"],[4,"ngIf"],["type","text","placeholder","\u0627\u0644\u0625\u064a\u0645\u064a\u0644","name","email","id","email","aria-label","\u0627\u0644\u0625\u064a\u0645\u064a\u0644","formControlName","email",1,"form-control"],[1,"col-md-12","form-group","mb-4"],["type","text","placeholder","\u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644","name","number","id","number","aria-label","\u0631\u0642\u0645 \u0627\u0644\u062c\u0648\u0627\u0644","formControlName","phone",1,"form-control"],[1,"form-group","col-md-12","mb-4"],["name","message","placeholder","\u0631\u0633\u0627\u0644\u0629","name","message","id","message","aria-label","\u0631\u0633\u0627\u0644\u0629","rows","5","formControlName","message",1,"form-control"],[1,"col-md-12","mt-3","text-center","text-lg-start"],[3,"buttonName","buttonBackgroundColor","buttonType"],["class","text-danger mb-2",4,"ngIf"],[1,"text-danger","mb-2"],["loading","lazy","src","assets/invalid.svg","width","16","height","16","alt","invalid data icon",1,"ms-2","mb-1"]],template:function(o,r){if(1&o&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return r.formSubmit(r.contactForm)}),t.TgZ(1,"div",1)(2,"div",2),t._UZ(3,"input",3),t.YNc(4,b,3,2,"ng-container",4),t.qZA(),t.TgZ(5,"div",2),t._UZ(6,"input",5),t.YNc(7,M,3,2,"ng-container",4),t.qZA(),t.TgZ(8,"div",6),t._UZ(9,"input",7),t.YNc(10,w,2,1,"ng-container",4),t.qZA()(),t.TgZ(11,"div",8),t._UZ(12,"textarea",9),t.YNc(13,T,2,1,"ng-container",4),t.qZA(),t.TgZ(14,"div",10),t._UZ(15,"app-normal-button",11),t.qZA()()),2&o){let i,p,d,g;t.Q6J("formGroup",r.contactForm),t.xp6(4),t.Q6J("ngIf",(null==(i=r.contactForm.get("name"))?null:i.touched)||r.formSubmited),t.xp6(3),t.Q6J("ngIf",(null==(p=r.contactForm.get("email"))?null:p.touched)||r.formSubmited),t.xp6(3),t.Q6J("ngIf",(null==(d=r.contactForm.get("phone"))?null:d.touched)||r.formSubmited),t.xp6(3),t.Q6J("ngIf",(null==(g=r.contactForm.get("message"))?null:g.touched)||r.formSubmited),t.xp6(2),t.Q6J("buttonName","\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627")("buttonBackgroundColor","#e75e25")("buttonType","submit")}},dependencies:[m.O5,v.U,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u],styles:["#contactForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{background-color:transparent!important;border:1px solid var(--Main-Brand-Color);border-radius:0!important;color:var(--Main-Brand-Color);font-weight:700;font-size:1rem!important}#contactForm[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::placeholder{color:var(--Main-Brand-Color);font-weight:700}#contactForm[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-moz-placeholder{color:var(--Main-Brand-Color)}#contactForm[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-input-placeholder{color:var(--Main-Brand-Color)}#contactForm[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:-ms-input-placeholder{color:var(--Main-Brand-Color)}#contactForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .1rem var(--Main-Brand-Color)}#contactForm[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill, #contactForm[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill:hover, #contactForm[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill:focus, #contactForm[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill:focus-visible, #contactForm[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-webkit-autofill, #contactForm[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-webkit-autofill:hover, #contactForm[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:-webkit-autofill:focus{border:1px solid var(--Main-Brand-Color)!important;-webkit-text-fill-color:var(--Main-Brand-Color)!important;-webkit-box-shadow:0 0 0px 1000px transparent inset!important;-webkit-transition:background-color 5000s ease-in-out 0s!important;transition:background-color 5000s ease-in-out 0s!important}#contactForm[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:25px}@media (max-width: 767px){#contactForm[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:18px}#contactForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{font-size:1rem!important}}"]})}return n})(),U=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-contact-location"]],decls:7,vars:0,consts:[[1,"row","map-container"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.040596507898!2d46.53489397604142!3d24.62228565474551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1ffc0fc7498d%3A0x6bd29d19abbde846!2soliveto%20restaurant!5e0!3m2!1sen!2seg!4v1699884018065!5m2!1sen!2seg","width","800","height","500","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",1,"w-100",2,"border","0"],[1,"row","contact-location"],[1,"col-12","mt-3"],[1,"text-center","text-lg-end","main-color","fw-bold"],[1,"fa-solid","fa-location-dot","ms-1","ms-lg-2"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"iframe",1),t.qZA(),t.TgZ(2,"div",2)(3,"div",3)(4,"li",4),t._uU(5," . \u0638\u0647\u0631\u0629 \u0644\u0628\u0646 - \u0634\u0627\u0631\u0639 \u0639\u0633\u064a\u0631 - \u0627\u0644\u0631\u064a\u0627\u0636 "),t._UZ(6,"i",5),t.qZA()()())},styles:[".contact-location[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:25px}@media (max-width: 767px){.contact-location[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:18px}}"]})}return n})();const I=[{path:"",component:(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-contact"]],decls:8,vars:3,consts:[["id","contact",1,"contact-us","section-padding"],[3,"title","sectionTitleClass"],[1,"container"],[1,"row","justify-content-center","align-items-center"],[1,"col-lg-6"]],template:function(o,r){1&o&&(t.TgZ(0,"section",0),t._UZ(1,"app-section-title",1),t.TgZ(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"app-contact-form"),t.qZA(),t.TgZ(6,"div",4),t._UZ(7,"app-contact-location"),t.qZA()()()()),2&o&&(t.xp6(1),t.Q6J("title","\u062a\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627")("sectionTitleClass",!0)("sectionTitleClass",!0))},dependencies:[f.D,P,U]})}return n})()}];let y=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(I),s.Bz]})}return n})();var k=c(8524);let N=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[m.ez,y,k.m,e.u5,e.UX]})}return n})()}}]);