"use strict";(self.webpackChunkOliveto=self.webpackChunkOliveto||[]).push([[594],{7594:(b,c,s)=>{s.r(c),s.d(c,{GalleryModule:()=>v});var g=s(6814),u=s(5290),t=s(9468),n=s(7625),m=s(9948),h=s(6593),d=s(6626);function y(e,C){if(1&e){const i=t.EpF();t.TgZ(0,"div",5)(1,"div",6)(2,"img",7),t.NdJ("click",function(){const a=t.CHM(i).index,r=t.oxw();return t.KtG(r.open(a))}),t.qZA()()()}if(2&e){const i=C.$implicit;t.xp6(2),t.Q6J("src",i.image,t.LSH)}}const p=[{path:"",component:(()=>{class e{constructor(i,l,o,a,r){this._lightboxConfig=i,this._lightbox=l,this.mainService=o,this.meta=a,this.titleService=r,this.galleryList=[],this._albums=[],this._lightboxConfig.centerVertically=!0,this._lightboxConfig.disableScrolling=!0,this._lightboxConfig.alwaysShowNavOnTouchDevices=!0,this._lightboxConfig.fitImageInViewPort=!0,this._lightboxConfig.showImageNumberLabel=!0,this._lightboxConfig.wrapAround=!0}ngOnInit(){this.mainService.getAllGalleries().subscribe({next:i=>{i&&i.data&&i.data.data&&(this.galleryList=i.data.data,this.constructAlbums())},error:i=>{}}),this.meta.updateTag({name:"description",content:" \u0635\u0648\u0631 \u0627\u0644\u0645\u0637\u0639\u0645 | \u0645\u0637\u0639\u0645 \u0623\u0648\u0644\u064a\u0641\u064a\u062a\u0648 \u0641\u0649 \u0638\u0647\u0631\u0629 \u0644\u0628\u0646. \u0627\u0633\u062a\u0645\u062a\u0639 \u0628\u062a\u062c\u0631\u0628\u0629 \u062a\u0646\u0627\u0648\u0644 \u0627\u0644\u0637\u0639\u0627\u0645 \u0641\u064a \u0623\u0641\u0636\u0644 \u0645\u0637\u0639\u0645 \u0641\u064a \u0638\u0647\u0631\u0629 \u0644\u0628\u0646\u060c \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629. \u0646\u0642\u062f\u0645 \u0623\u0637\u0628\u0627\u0642 \u0634\u0647\u064a\u0629 \u0645\u0633\u062a\u0648\u062d\u0627\u0629 \u0645\u0646 \u0627\u0644\u0645\u0623\u0643\u0648\u0644\u0627\u062a \u0627\u0644\u062a\u0642\u0644\u064a\u062f\u064a\u0629\u060c \u062a\u062a\u0645\u064a\u0632 \u0628\u0627\u0644\u0646\u0643\u0647\u0627\u062a \u0627\u0644\u0641\u0631\u064a\u062f\u0629 \u0648\u0627\u0644\u0645\u0643\u0648\u0646\u0627\u062a \u0627\u0644\u0637\u0627\u0632\u062c\u0629. \u0627\u0643\u062a\u0634\u0641 \u0623\u062c\u0648\u0627\u0621 \u0631\u0627\u0642\u064a\u0629 \u0648\u062e\u062f\u0645\u0629 \u0639\u0627\u0644\u064a\u0629 \u0627\u0644\u062c\u0648\u062f\u0629. \u0632\u0648\u0631\u0648\u0646\u0627 \u0627\u0644\u064a\u0648\u0645 \u0644\u062a\u0633\u062a\u0645\u062a\u0639\u0648\u0627 \u0628\u062a\u062c\u0631\u0628\u0629 \u062a\u0646\u0627\u0648\u0644 \u0627\u0644\u0637\u0639\u0627\u0645 \u0627\u0644\u0627\u0633\u062a\u062b\u0646\u0627\u0626\u064a\u0629 \u0641\u064a \u0638\u0647\u0631\u0629 \u0644\u0628\u0646"}),this.titleService.setTitle("\u0627\u0644\u0623\u0644\u0628\u0648\u0645 | \u0645\u0637\u0639\u0645 \u0623\u0648\u0644\u064a\u0641\u064a\u062a\u0648 \u0638\u0647\u0631\u0629 \u0644\u0628\u0646")}constructAlbums(){for(let i=0;i<this.galleryList.length;i++)this.galleryList[i].image&&this.galleryList[i].title?this._albums.push({id:this.galleryList[i].id,src:this.galleryList[i].image,caption:this.galleryList[i].title,thumb:this.galleryList[i].image}):console.error("Missing image or title for gallery item:",this.galleryList[i])}open(i){this._lightbox.open(this._albums,i)}close(){this._lightbox.close()}static#t=this.\u0275fac=function(l){return new(l||e)(t.Y36(n.xm),t.Y36(n.ey),t.Y36(m.f),t.Y36(h.h_),t.Y36(h.Dx))};static#i=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-gallery"]],decls:5,vars:4,consts:[["id","gallery",1,"section-padding"],[3,"title","sectionTitleClass"],[1,"container"],[1,"row","justify-content-start","align-items-center"],["class","col-12 col-md-6 col-lg-4 col-xl-4 text-center mb-4",4,"ngFor","ngForOf"],[1,"col-12","col-md-6","col-lg-4","col-xl-4","text-center","mb-4"],[1,"img-container"],["alt","\u0645\u0637\u0639\u0645 \u0623\u0648\u0644\u064a\u0641\u064a\u062a\u0648 \u0638\u0647\u0631\u0629 \u0644\u0628\u0646","loading","lazy",1,"w-auto","img-thumb",3,"src","click"]],template:function(l,o){1&l&&(t.TgZ(0,"section",0),t._UZ(1,"app-section-title",1),t.TgZ(2,"div",2)(3,"div",3),t.YNc(4,y,3,1,"div",4),t.qZA()()()),2&l&&(t.xp6(1),t.Q6J("title","\u0627\u0644\u0623\u0644\u0628\u0648\u0645")("sectionTitleClass",!0)("sectionTitleClass",!0),t.xp6(3),t.Q6J("ngForOf",o.galleryList))},dependencies:[g.sg,d.D],styles:["#gallery[_ngcontent-%COMP%]   .img-thumb[_ngcontent-%COMP%]{max-width:100%!important;height:auto!important}#gallery[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]{margin:0 auto!important}"]})}return e})()}];let f=(()=>{class e{static#t=this.\u0275fac=function(l){return new(l||e)};static#i=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(p),u.Bz]})}return e})();var x=s(8524);let v=(()=>{class e{static#t=this.\u0275fac=function(l){return new(l||e)};static#i=this.\u0275mod=t.oAB({type:e});static#e=this.\u0275inj=t.cJS({imports:[g.ez,f,x.m,n.QM]})}return e})()}}]);