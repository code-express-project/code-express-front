"use strict";
(self["webpackChunkcode_express_ng"] = self["webpackChunkcode_express_ng"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/pages/home-one/home-one.component */ 5535);
/* harmony import */ var _components_pages_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/pages/home-two/home-two.component */ 9503);
/* harmony import */ var _components_pages_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/home-three/home-three.component */ 8952);
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/about/about.component */ 4244);
/* harmony import */ var _components_pages_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/solutions/solutions.component */ 7083);
/* harmony import */ var _components_pages_solutions_details_solutions_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/solutions-details/solutions-details.component */ 6409);
/* harmony import */ var _components_pages_case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/case-studies/case-studies.component */ 1848);
/* harmony import */ var _components_pages_case_studies_details_case_studies_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/case-studies-details/case-studies-details.component */ 5282);
/* harmony import */ var _components_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/blog/blog.component */ 9377);
/* harmony import */ var _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/blog-details/blog-details.component */ 2085);
/* harmony import */ var _components_pages_team_team_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/team/team.component */ 2813);
/* harmony import */ var _components_pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/pricing/pricing.component */ 7666);
/* harmony import */ var _components_pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/gallery/gallery.component */ 758);
/* harmony import */ var _components_pages_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/testimonials/testimonials.component */ 9117);
/* harmony import */ var _components_pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/sign-up/sign-up.component */ 2211);
/* harmony import */ var _components_pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/sign-in/sign-in.component */ 2707);
/* harmony import */ var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/error/error.component */ 4837);
/* harmony import */ var _components_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pages/faq/faq.component */ 9995);
/* harmony import */ var _components_pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pages/terms-conditions/terms-conditions.component */ 3764);
/* harmony import */ var _components_pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pages/privacy-policy/privacy-policy.component */ 4150);
/* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ 847);
/* harmony import */ var _components_pages_nossos_projetos_nossos_projetos_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/nossos-projetos/nossos-projetos.component */ 9669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 1699);

























const routes = [{
  path: '',
  component: _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_0__.HomeOneComponent
}, {
  path: 'home-two',
  component: _components_pages_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_1__.HomeTwoComponent
}, {
  path: 'home-three',
  component: _components_pages_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_2__.HomeThreeComponent
}, {
  path: 'about',
  component: _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent
}, {
  path: 'solutions',
  component: _components_pages_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_4__.SolutionsComponent
}, {
  path: 'solutions-details',
  component: _components_pages_solutions_details_solutions_details_component__WEBPACK_IMPORTED_MODULE_5__.SolutionsDetailsComponent
}, {
  path: 'case-studies',
  component: _components_pages_case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_6__.CaseStudiesComponent
}, {
  path: 'case-studies-details',
  component: _components_pages_case_studies_details_case_studies_details_component__WEBPACK_IMPORTED_MODULE_7__.CaseStudiesDetailsComponent
}, {
  path: 'blog',
  component: _components_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__.BlogComponent
}, {
  path: 'blog-details',
  component: _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_9__.BlogDetailsComponent
}, {
  path: 'team',
  component: _components_pages_team_team_component__WEBPACK_IMPORTED_MODULE_10__.TeamComponent
}, {
  path: 'pricing',
  component: _components_pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_11__.PricingComponent
}, {
  path: 'gallery',
  component: _components_pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__.GalleryComponent
}, {
  path: 'testimonials',
  component: _components_pages_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_13__.TestimonialsComponent
}, {
  path: 'sign-up',
  component: _components_pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_14__.SignUpComponent
}, {
  path: 'sign-in',
  component: _components_pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_15__.SignInComponent
}, {
  path: 'error',
  component: _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_16__.ErrorComponent
}, {
  path: 'faq',
  component: _components_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_17__.FaqComponent
}, {
  path: 'terms-condition',
  component: _components_pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_18__.TermsConditionsComponent
}, {
  path: 'privacy-policy',
  component: _components_pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_19__.PrivacyPolicyComponent
}, {
  path: 'contact',
  component: _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_20__.ContactComponent
}, {
  path: 'nossos-projetos',
  component: _components_pages_nossos_projetos_nossos_projetos_component__WEBPACK_IMPORTED_MODULE_21__.NossosProjetosComponent
},
// Here add new pages component
{
  path: '**',
  component: _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_16__.ErrorComponent
} // This line will remain down from the whole pages component list
];

class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule.forRoot(routes, {}), _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_scrolltop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-scrolltop */ 815);
/* harmony import */ var _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/common/navbar/navbar.component */ 7902);
/* harmony import */ var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/common/footer/footer.component */ 6442);








class AppComponent {
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    this.recallJsFuntions();
  }
  recallJsFuntions() {
    this.routerSubscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationCancel)).subscribe(event => {
      this.location = this.router.url;
      if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location, {
      provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__.LocationStrategy,
      useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__.PathLocationStrategy
    }])],
    decls: 4,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-navbar")(1, "router-outlet")(2, "app-footer")(3, "ngx-scrolltop");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, ngx_scrolltop__WEBPACK_IMPORTED_MODULE_6__.NgxScrollTopComponent, _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var ngx_scrolltop__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-scrolltop */ 815);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/common/navbar/navbar.component */ 7902);
/* harmony import */ var _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/common/footer/footer.component */ 6442);
/* harmony import */ var _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pages/home-one/home-one.component */ 5535);
/* harmony import */ var _components_pages_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pages/home-two/home-two.component */ 9503);
/* harmony import */ var _components_pages_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/pages/home-three/home-three.component */ 8952);
/* harmony import */ var _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/pages/about/about.component */ 4244);
/* harmony import */ var _components_pages_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/pages/solutions/solutions.component */ 7083);
/* harmony import */ var _components_pages_solutions_details_solutions_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/solutions-details/solutions-details.component */ 6409);
/* harmony import */ var _components_pages_case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pages/case-studies/case-studies.component */ 1848);
/* harmony import */ var _components_pages_case_studies_details_case_studies_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pages/case-studies-details/case-studies-details.component */ 5282);
/* harmony import */ var _components_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pages/blog/blog.component */ 9377);
/* harmony import */ var _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/pages/blog-details/blog-details.component */ 2085);
/* harmony import */ var _components_pages_team_team_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pages/team/team.component */ 2813);
/* harmony import */ var _components_pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pages/pricing/pricing.component */ 7666);
/* harmony import */ var _components_pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pages/gallery/gallery.component */ 758);
/* harmony import */ var _components_pages_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pages/testimonials/testimonials.component */ 9117);
/* harmony import */ var _components_pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pages/sign-up/sign-up.component */ 2211);
/* harmony import */ var _components_pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pages/sign-in/sign-in.component */ 2707);
/* harmony import */ var _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/pages/error/error.component */ 4837);
/* harmony import */ var _components_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/pages/faq/faq.component */ 9995);
/* harmony import */ var _components_pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/pages/terms-conditions/terms-conditions.component */ 3764);
/* harmony import */ var _components_pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pages/privacy-policy/privacy-policy.component */ 4150);
/* harmony import */ var _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pages/contact/contact.component */ 847);
/* harmony import */ var _components_pages_nossos_projetos_nossos_projetos_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/pages/nossos-projetos/nossos-projetos.component */ 9669);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 1699);
































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_28__.CarouselModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule, ngx_scrolltop__WEBPACK_IMPORTED_MODULE_30__.NgxScrollTopModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_common_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent, _components_common_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _components_pages_home_one_home_one_component__WEBPACK_IMPORTED_MODULE_4__.HomeOneComponent, _components_pages_home_two_home_two_component__WEBPACK_IMPORTED_MODULE_5__.HomeTwoComponent, _components_pages_home_three_home_three_component__WEBPACK_IMPORTED_MODULE_6__.HomeThreeComponent, _components_pages_about_about_component__WEBPACK_IMPORTED_MODULE_7__.AboutComponent, _components_pages_solutions_solutions_component__WEBPACK_IMPORTED_MODULE_8__.SolutionsComponent, _components_pages_solutions_details_solutions_details_component__WEBPACK_IMPORTED_MODULE_9__.SolutionsDetailsComponent, _components_pages_case_studies_case_studies_component__WEBPACK_IMPORTED_MODULE_10__.CaseStudiesComponent, _components_pages_case_studies_details_case_studies_details_component__WEBPACK_IMPORTED_MODULE_11__.CaseStudiesDetailsComponent, _components_pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_12__.BlogComponent, _components_pages_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_13__.BlogDetailsComponent, _components_pages_team_team_component__WEBPACK_IMPORTED_MODULE_14__.TeamComponent, _components_pages_pricing_pricing_component__WEBPACK_IMPORTED_MODULE_15__.PricingComponent, _components_pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_16__.GalleryComponent, _components_pages_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_17__.TestimonialsComponent, _components_pages_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_18__.SignUpComponent, _components_pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_19__.SignInComponent, _components_pages_error_error_component__WEBPACK_IMPORTED_MODULE_20__.ErrorComponent, _components_pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_21__.FaqComponent, _components_pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_22__.TermsConditionsComponent, _components_pages_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_23__.PrivacyPolicyComponent, _components_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_24__.ContactComponent, _components_pages_nossos_projetos_nossos_projetos_component__WEBPACK_IMPORTED_MODULE_25__.NossosProjetosComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_27__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_28__.CarouselModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule, ngx_scrolltop__WEBPACK_IMPORTED_MODULE_30__.NgxScrollTopModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule]
  });
})();

/***/ }),

/***/ 6442:
/*!**************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);



class FooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 124,
    vars: 0,
    consts: [[1, "footer-area", "pt-100"], [1, "container"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "content"], [1, "logo"], ["routerLink", "/"], ["src", "assets/images/logo2.png", "alt", "logo"], [1, "subscribe"], [1, "newsletter-form"], ["type", "email", "id", "emails", "placeholder", "Your Email", "name", "EMAIL", "required", "", "autocomplete", "off", 1, "form-control"], ["type", "submit", 1, "box-btn"], [1, "social"], ["href", "#", "target", "_blank"], [1, "bx", "bxl-facebook"], [1, "bx", "bxl-twitter"], [1, "bx", "bxl-instagram"], [1, "bx", "bxl-pinterest"], [1, "col-lg-3", "col-md-6"], [1, "content", "ml-15"], [1, "footer-list"], [1, "col-lg-2", "col-md-6"], ["routerLink", "/faq"], ["routerLink", "/solutions"], ["routerLink", "/privecy"], ["routerLink", "/terms-condition"], [1, "content", "contacts"], [1, "ml-40"], [1, "footer-list", "foot-social"], ["href", "tel:+5543999105610"], [1, "bx", "bx-mobile-alt"], ["href", "mailto:luidigastech@gmail.com"], [1, "bx", "bxs-envelope"], [1, "copy-area"], [1, "col-lg-6"], [1, "menu"], ["routerLink", "/about"], ["routerLink", "/case"], ["routerLink", "/blog"], ["routerLink", "/contact"], ["href", "https://hibootstrap.com/", "target", "_blank"], [1, "go-top"], [1, "bx", "bx-chevrons-up"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lorem ipsum dolor sit amet, mattetur adipiscing elit, sed do eiusmod.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Join Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul", 12)(18, "li")(19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li")(22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li")(25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li")(28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18)(31, "div", 19)(32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Nosso Servi\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 20)(35, "li")(36, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Design Visual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li")(39, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Desenvolvimento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li")(42, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "QA & Testing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li")(45, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Gerenciamento de TI\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li")(48, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "C\u00EDber Seguran\u00E7a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li")(51, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Wireless Connection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21)(54, "div", 4)(55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Links R\u00E1pidos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ul", 20)(58, "li")(59, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li")(62, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li")(65, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Career");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li")(68, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Privacy & Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li")(71, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Termos e Condi\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li")(74, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Data Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 18)(77, "div", 26)(78, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "ul", 28)(81, "li")(82, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " +55 (43) 9 9910 5610");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li")(86, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " luidigastech@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li")(90, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " luidigastech@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 33)(94, "div", 1)(95, "div", 2)(96, "div", 34)(97, "ul", 35)(98, "li")(99, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li")(102, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Sobre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li")(105, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Solu\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li")(108, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Estudos de Caso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li")(111, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li")(114, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Contato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 34)(117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "\u00A9 Code Express is Proudly Owned by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "HiBootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "i", 42)(123, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 7902:
/*!**************************************************************!*\
  !*** ./src/app/components/common/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);





const _c0 = function (a0) {
  return {
    "sticky": a0
  };
};
const _c1 = function () {
  return {
    exact: true
  };
};
class NavbarComponent {
  toggleClass() {
    this.classApplied = !this.classApplied;
  }
  constructor(router, location) {
    this.router = router;
    this.classApplied = false;
    // Navbar Sticky
    this.isSticky = false;
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
        this.location = this.router.url;
        if (this.location == '/home-three') {
          this.navbarClass = 'navbar-area three';
        } else {
          this.navbarClass = 'navbar-area';
        }
      }
    });
  }
  ngOnInit() {}
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= 50) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
  static #_ = this.ɵfac = function NavbarComponent_Factory(t) {
    return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: NavbarComponent,
    selectors: [["app-navbar"]],
    hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function NavbarComponent_scroll_HostBindingHandler($event) {
          return ctx.checkScroll($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location, {
      provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__.LocationStrategy,
      useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__.PathLocationStrategy
    }])],
    decls: 109,
    vars: 44,
    consts: [[1, "header-area"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-2", "col-sm-0"], [1, "logo"], ["routerLink", "/"], ["src", "assets/images/logo.png", "alt", "logo"], [1, "col-lg-8", "col-sm-6", "text-end", "pr-0"], [1, "header-content-right"], [1, "header-contact"], ["href", "tel:+5543999105610"], [1, "bx", "bxs-phone-call"], ["href", "mailto:luidigastech@gmail.com"], [1, "bx", "bxs-envelope"], [1, "col-lg-2", "col-sm-6", "text-end", "pl-0"], [1, "header-social"], [1, "main-nav", 3, "ngClass"], [1, "navbar", "navbar-expand-lg", "navbar-light"], ["routerLink", "/", 1, "navbar-brand", "d-none"], ["src", "assets/images/logo2.png", "alt", "logo"], ["type", "button", 1, "navbar-toggler", 3, "click"], [1, "burger-menu"], [1, "top-bar"], [1, "middle-bar"], [1, "bottom-bar"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse", "mean-menu"], [1, "navbar-nav", "text-left"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["href", "javascript:void(0)", 1, "nav-link", "dropdown-toggle"], [1, "dropdown-menu"], ["routerLink", "/solutions", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/solutions-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/case-studies", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/case-studies-details", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/team", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/pricing", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/gallery", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/testimonials", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/sign-up", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/sign-in", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/error", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/faq", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/terms-condition", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/privacy-policy", "cl", "", "ass", "nav-link", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/contact", 1, "nav-link"], ["routerLink", "/nossos-projetos", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "nav-right"], [1, "nav-btn"]],
    template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "ul", 9)(10, "li")(11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " +55 (43) 9 9910 5610");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " luidigastech@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14)(19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div")(22, "div", 16)(23, "div", 1)(24, "nav", 17)(25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_27_listener() {
          return ctx.toggleClass();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "span", 22)(30, "span", 23)(31, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 25)(33, "ul", 26)(34, "li", 27)(35, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li", 27)(38, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Sobre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li", 27)(41, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Solu\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ul", 31)(44, "li", 27)(45, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Solu\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "li", 27)(48, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Solu\u00E7\u00F5es Detalhes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "li", 27)(51, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Estudos de Caso");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ul", 31)(54, "li", 27)(55, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Estudos de Caso");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li", 27)(58, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Estudos de Caso Detalhes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li", 27)(61, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "P\u00E1ginas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ul", 31)(64, "li", 27)(65, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Equipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "li", 27)(68, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Pre\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "li", 27)(71, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Galeria");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "li", 27)(74, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li", 27)(77, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "li", 27)(80, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li", 27)(83, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Error 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "li", 27)(86, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "li", 27)(89, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Termos e Condi\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "li", 27)(92, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "li", 27)(95, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Contato ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "li", 27)(98, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Nossos Projetos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "ul", 31)(101, "li", 27)(102, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Calculadora PJ e CLT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li", 27)(105, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Pre\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "div", 48)(108, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.navbarClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c0, ctx.isSticky));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.classApplied);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](35, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](36, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](37, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](38, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](39, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](40, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](41, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](42, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](43, _c1));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterLinkActive],
    styles: [".logo[_ngcontent-%COMP%] {\n  max-width: 55px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jb21tb24vbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICAgIG1heC13aWR0aDogNTVweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 4244:
/*!***********************************************************!*\
  !*** ./src/app/components/pages/about/about.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);




function AboutComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45)(1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_div_58_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function AboutComponent_ng_template_103_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing Quis suspendisse typesetting ipsum dolor sit amet,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Steven Jony");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CEO of Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function AboutComponent_ng_template_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing Quis suspendisse typesetting ipsum dolor sit amet,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Omit Jacson");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Company Founder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class AboutComponent {
  constructor() {
    this.clientWrap = {
      loop: true,
      margin: 30,
      nav: false,
      mouseDrag: true,
      items: 1,
      dots: false,
      autoHeight: true,
      autoplay: true,
      smartSpeed: 800,
      autoplayHoverPause: true,
      center: false,
      responsive: {
        0: {
          items: 1,
          margin: 10
        },
        576: {
          items: 1
        },
        768: {
          items: 2,
          margin: 20
        },
        992: {
          items: 2
        },
        1200: {
          items: 2
        }
      }
    };
    // Video Popup
    this.isOpen = false;
  }
  ngOnInit() {}
  openPopup() {
    this.isOpen = true;
  }
  closePopup() {
    this.isOpen = false;
  }
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    decls: 105,
    vars: 2,
    consts: [[1, "page-title-area"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "active"], [1, "page-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "home-company-area"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-12"], [1, "company-content"], [1, "company-tittle"], [1, "company-img"], ["src", "assets/images/company/company-img.jpg", "alt", "company"], [1, "technology-area", "ptb-100", "bg-color"], [1, "row", "align-items-center", "choose-c"], [1, "col-lg-6"], [1, "choose-img"], ["src", "assets/images/choose-img1.jpg", "alt", "choose"], [1, "technology-video"], ["type", "button", 1, "video-btn", "p-0", "border-0", 3, "click"], [1, "bx", "bx-play"], [1, "technology-content"], ["routerLink", "/contact", 1, "box-btn"], ["class", "video-popup", 4, "ngIf"], [1, "feature-area", "ptb-100"], [1, "contnet"], [1, "feature-tittle"], [1, "flaticon-correct"], [1, "feature-img"], ["src", "assets/images/feature-img.png", "alt", "feature"], [1, "client-area", "ptb-100", "bg-color"], [1, "section-title"], [1, "client-wrap"], [3, "options"], ["carouselSlide", ""], [1, "video-popup"], [1, "popup-inner"], ["src", "https://www.youtube.com/embed/XNQk1qt__Vw", "title", "Setup and Local Installation - React Nextjs Online Yoga Coaching & Training Courses System", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "allowfullscreen", ""], ["type", "button", 1, "close-btn", 3, "click"], [1, "bx", "bx-x"], [1, "single-client"], ["src", "assets/images/client/1.jpg", "alt", "img"], ["src", "assets/images/client/2.jpg", "alt", "img"]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sobre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sobre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16)(23, "div", 1)(24, "div", 17)(25, "div", 18)(26, "div", 19)(27, "div", 20)(28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Nossa empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Servi\u00E7o Inovador de Ajuda em Todo o Mundo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18)(37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section", 23)(40, "div", 1)(41, "div", 24)(42, "div", 25)(43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 28)(46, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_button_click_46_listener() {
          return ctx.openPopup();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25)(49, "div", 31)(50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Updated Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going There are many variations of passages of Lorem Ipsum available, but the.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Contato Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, AboutComponent_div_58_Template, 5, 0, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "section", 34)(60, "div", 1)(61, "div", 17)(62, "div", 25)(63, "div", 35)(64, "div", 36)(65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "We Have Also Some Features That Provided by Code Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consectetur, beatae quod eaque reprehenderit non ab quibusdam doloribus voluptatibus! Voluptatum aspernatur quasi id dolore doloremque quo vero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul")(72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Freelancing Traning Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Technological Consultation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Monthly Paid Workspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " IT Learning Institute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Digital Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Lets Talk!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 25)(90, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "section", 40)(93, "div", 1)(94, "div", 41)(95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Depoimentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "O que Nossos Clientes Dizem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 42)(102, "owl-carousel-o", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, AboutComponent_ng_template_103_Template, 8, 0, "ng-template", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, AboutComponent_ng_template_104_Template, 8, 0, "ng-template", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.clientWrap);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective],
    styles: [".video-popup[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 5;\n  display: flex;\n  position: fixed;\n  text-align: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%] {\n  width: 720px;\n  padding: 20px;\n  position: relative;\n  border-radius: 5px;\n  background-color: var(--whiteColor);\n  margin-left: auto;\n  margin-right: auto;\n}\n.video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 426px;\n  border-radius: 5px;\n}\n.video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  top: -15px;\n  width: 35px;\n  right: -10px;\n  border: none;\n  height: 35px;\n  font-size: 20px;\n  line-height: 37px;\n  border-radius: 50%;\n  position: absolute;\n  transition: var(--transition);\n  background-color: var(--whiteColor);\n}\n.video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: var(--whiteColor);\n}\n\n\n\n@media only screen and (max-width: 767px) {\n  .video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%] {\n    width: 300px;\n    padding: 10px;\n  }\n  .video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 177px;\n  }\n  .video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n    width: 30px;\n    right: -5px;\n    height: 30px;\n    font-size: 18px;\n    line-height: 31px;\n  }\n  .video-box[_ngcontent-%COMP%] {\n    padding-top: 150px;\n    padding-bottom: 150px;\n  }\n  .video-box[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%] {\n    width: 65px;\n    height: 65px;\n    font-size: 40px;\n  }\n  .video-box[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-top: 1px;\n  }\n}\n\n\n@media only screen and (min-width: 576px) and (max-width: 767px) {\n  .video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n  .video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 238px;\n  }\n  .video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n    right: -10px;\n  }\n}\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUFDSjtBQUNJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFFSSxpQkFBQTtFQUNBLGtCQUFBO0FBQVo7QUFFUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFBWjtBQUVRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtBQUFaO0FBRVk7RUFDSSxxQkFBQTtFQUNBLHdCQUFBO0FBQWhCOztBQU1BLG9CQUFBO0FBQ0E7RUFHUTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VBTFY7RUFPVTtJQUNJLFdBQUE7SUFDQSxhQUFBO0VBTGQ7RUFPVTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQUxkO0VBU0U7SUFFUSxrQkFBQTtJQUNBLHFCQUFBO0VBUlY7RUFVTTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQVJWO0VBVVU7SUFDSSxlQUFBO0VBUmQ7QUFDRjtBQWNBLHVDQUFBO0FBQ0E7RUFHUTtJQUNJLFlBQUE7RUFkVjtFQWdCVTtJQUNJLFdBQUE7SUFDQSxhQUFBO0VBZGQ7RUFnQlU7SUFDSSxZQUFBO0VBZGQ7QUFDRjtBQW9CQSx1Q0FBQTtBQUdBLHdDQUFBO0FBR0EseUNBQUE7QUFHQSxxQkFBQSIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlby1wb3B1cCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblxyXG4gICAgLnBvcHVwLWlubmVyIHtcclxuICAgICAgICB3aWR0aDogNzIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xyXG4gICAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQyNnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbG9zZS1idG4ge1xyXG4gICAgICAgICAgICB0b3A6IC0xNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiBNYXggd2lkdGggNzY3cHggKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY3cHgpIHtcclxuXHJcbiAgICAudmlkZW8tcG9wdXAge1xyXG4gICAgICAgIC5wb3B1cC1pbm5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTc3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNsb3NlLWJ0biB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudmlkZW8tYm94IHtcclxuICAgICAgICBwYWRkaW5nOiB7XHJcbiAgICAgICAgICAgIHRvcDogMTUwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTUwcHg7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAudmlkZW8tYnRuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKiBNaW4gd2lkdGggNTc2cHggdG8gTWF4IHdpZHRoIDc2N3B4ICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDU3NnB4KSBhbmQgKG1heC13aWR0aCA6IDc2N3B4KSB7XHJcblxyXG4gICAgLnZpZGVvLXBvcHVwIHtcclxuICAgICAgICAucG9wdXAtaW5uZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZnJhbWUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIzOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jbG9zZS1idG4ge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyogTWluIHdpZHRoIDc2OHB4IHRvIE1heCB3aWR0aCA5OTFweCAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA3NjhweCkgYW5kIChtYXgtd2lkdGggOiA5OTFweCkge31cclxuXHJcbi8qIE1pbiB3aWR0aCA5OTJweCB0byBNYXggd2lkdGggMTE5OXB4ICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDk5MnB4KSBhbmQgKG1heC13aWR0aCA6IDExOTlweCkge31cclxuXHJcbi8qIE1pbiB3aWR0aCAxMjAwcHggdG8gTWF4IHdpZHRoIDEzOTlweCAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge31cclxuXHJcbi8qIE1pbiB3aWR0aCAxNjAwcHggKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHt9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 2085:
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/blog-details/blog-details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogDetailsComponent: () => (/* binding */ BlogDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);



class BlogDetailsComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function BlogDetailsComponent_Factory(t) {
    return new (t || BlogDetailsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BlogDetailsComponent,
    selectors: [["app-blog-details"]],
    decls: 358,
    vars: 0,
    consts: [[1, "page-title-area"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "active"], [1, "page-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "blog-details-area", "ptb-100"], [1, "row"], [1, "col-lg-8", "col-md-12"], [1, "blog-details-desc"], [1, "article-image"], ["src", "assets/images/blog-details/blog-details.jpg", "alt", "image"], [1, "article-content"], [1, "entry-meta"], ["routerLink", "/blog"], [1, "flaticon-quote"], [1, "row", "mb-3"], [1, "col-lg-4", "col-sm-6", "mt-4"], [1, "b-d-s-img"], ["src", "assets/images/blog/4.jpg", "alt", "Image"], ["src", "assets/images/blog/5.jpg", "alt", "Image"], [1, "col-lg-4", "col-sm-6", "offset-sm-3", "offset-lg-0", "mt-4"], ["src", "assets/images/blog/6.jpg", "alt", "Image"], [1, "article-footer"], [1, "article-tags"], [1, "bx", "bx-share-alt"], ["href", "#", "target", "_blank"], [1, "article-share"], [1, "social"], [1, "bx", "bxl-facebook"], [1, "bx", "bxl-twitter"], [1, "bx", "bxl-linkedin"], [1, "bx", "bxl-pinterest-alt"], [1, "post-navigation"], [1, "navigation-links"], [1, "nav-previous"], ["routerLink", "/blog-details"], [1, "bx", "bx-left-arrow-alt"], [1, "nav-next"], [1, "bx", "bx-right-arrow-alt"], [1, "comments-area"], [1, "comments-title"], [1, "comment-list"], [1, "comment"], [1, "comment-body"], [1, "comment-meta"], [1, "comment-author", "vcard"], ["src", "assets/images/blog-details/comment-img-1.jpg", "alt", "image", 1, "avatar"], [1, "fn"], [1, "says"], [1, "comment-metadata"], [1, "comment-content"], [1, "reply"], ["routerLink", "/blog-details", 1, "comment-reply-link"], [1, "children"], ["src", "assets/images/blog-details/comment-img-2.jpg", "alt", "image", 1, "avatar"], ["src", "assets/images/blog-details/comment-img-3.jpg", "alt", "image", 1, "avatar"], [1, "comment-respond"], [1, "comment-reply-title"], [1, "comment-form"], [1, "comment-notes"], ["id", "email-notes"], [1, "required"], [1, "comment-form-author"], ["type", "text", "id", "author", "name", "author", "required", "required"], [1, "comment-form-email"], ["type", "email", "id", "email", "name", "email", "required", "required"], [1, "comment-form-url"], ["type", "url", "id", "url", "name", "url"], [1, "comment-form-comment"], ["name", "comment", "id", "comment", "cols", "45", "rows", "5", "maxlength", "65525", "required", "required"], [1, "form-submit"], ["type", "submit", "name", "submit", "id", "submit", "value", "Post A Comment", 1, "submit"], [1, "col-lg-4", "col-md-12"], ["id", "secondary", 1, "widget-area"], [1, "widget", "widget_search"], [1, "widget-title"], [1, "post-wrap"], [1, "search-form"], [1, "screen-reader-text"], ["type", "search", "placeholder", "Search...", 1, "search-field"], ["type", "submit"], [1, "bx", "bx-search"], [1, "widget", "widget-peru-posts-thumb"], [1, "item"], ["routerLink", "/blog-details", 1, "thumb"], ["role", "img", 1, "fullimage", "cover", "bg1"], [1, "info"], ["datetime", "2023-06-30"], [1, "title", "usmall"], [1, "clear"], ["role", "img", 1, "fullimage", "cover", "bg2"], ["role", "img", 1, "fullimage", "cover", "bg3"], ["role", "img", 1, "fullimage", "cover", "bg4"], [1, "widget", "widget_categories"], [1, "widget", "widget_meta"], ["routerLink", "/sign-in"], ["title", "Really Simple Syndication"], [1, "widget", "widget_tag_cloud"], [1, "tagcloud"]],
    template: function BlogDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Blog Detalhes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Blog Detalhes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16)(23, "div", 1)(24, "div", 17)(25, "div", 18)(26, "div", 19)(27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22)(30, "div", 23)(31, "ul")(32, "li")(33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Posted On:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "May 19, 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li")(38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Posted By:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "John Anderson");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Temperature App UX Studies & Desenvolvimento Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit, consectetur qui ratione voluptatem sequi nesciunt magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "blockquote", 25)(49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid praesentium eveniet illum asperiores, quidem, ipsum voluptatum numquam ducimus nisi exercitationem dolorum facilis Repellendus aliquid praesentium eveniet illum asperiores.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat consectetur adipisicing onsectetur adipisicing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat ullamco laboris nisi ut aliquip ex.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26)(56, "div", 27)(57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 27)(60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 31)(63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam. consectetur adipisicing elit, sed ud exercitation ullamco laboris nisi ut aliquip commodo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 33)(70, "div", 34)(71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 37)(76, "ul", 38)(77, "li")(78, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li")(81, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li")(84, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li")(87, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 43)(90, "div", 44)(91, "div", 45)(92, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Prev Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 48)(96, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Next Post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 50)(100, "h3", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "2 Comments:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "ol", 52)(103, "li", 53)(104, "div", 54)(105, "footer", 55)(106, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "b", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "John Jones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "says:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 60)(113, "a", 46)(114, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "April 24, 2023 at 10:59 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 61)(117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Lorem Ipsum has been the industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 62)(120, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "ol", 64)(123, "li", 53)(124, "div", 54)(125, "footer", 55)(126, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "b", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Steven Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "says:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 60)(133, "a", 46)(134, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "April 24, 2023 at 10:59 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 61)(137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 62)(140, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li", 53)(143, "div", 54)(144, "footer", 55)(145, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "b", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "John Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "says:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 60)(152, "a", 46)(153, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "April 24, 2023 at 10:59 am");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 61)(156, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Lorem Ipsum has been the industry\u2019s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 62)(159, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 67)(162, "h3", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Leave a Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "form", 69)(165, "p", 70)(166, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Your email address will not be published.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Required fields are marked ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "p", 73)(172, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p", 75)(178, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p", 77)(184, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p", 79)(188, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "textarea", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "p", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "input", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 83)(194, "aside", 84)(195, "div", 85)(196, "h3", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Search Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 87)(199, "form", 88)(200, "label")(201, "span", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Search for:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "input", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "button", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "i", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "section", 93)(207, "h3", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Popular Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 87)(210, "article", 94)(211, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "span", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 97)(214, "time", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "April 20, 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "h4", 99)(217, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Restaurant Management & Web Developing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "article", 94)(221, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "span", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 97)(224, "time", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "April 21, 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "h4", 99)(227, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Ride Share App UX Studeis & Desenvolvimento Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "article", 94)(231, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 97)(234, "time", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "April 22, 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "h4", 99)(237, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Parking Management & Web Developing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "article", 94)(241, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "span", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 97)(244, "time", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "April 23, 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "h4", 99)(247, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Temperature App UX Studeis & Desenvolvimento Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "section", 104)(251, "h3", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Archives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 87)(254, "ul")(255, "li")(256, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "January ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "li")(261, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "February ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "li")(266, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, "March ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "li")(271, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "April ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "li")(276, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "May ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "li")(281, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "June ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, "2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "section", 104)(286, "h3", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 87)(289, "ul")(290, "li")(291, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Business ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, "(10)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "li")(296, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Privacy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "(20)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "li")(301, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Technology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "(10)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "li")(306, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Tips ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "(12)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "li")(311, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Uncategorized ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "(16)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "li")(316, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Code Express ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "(17)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "section", 105)(321, "h3", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Meta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 87)(324, "ul")(325, "li")(326, "a", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "li")(329, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Entries ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "abbr", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "RSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "li")(334, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Comments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "abbr", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "RSS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "li")(339, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "WordPress.org");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "section", 108)(342, "h3", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Tags");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 87)(345, "div", 109)(346, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Business (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](349, "Privacy (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "Technology (2)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "Tips (2)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "Uncategorized (1)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "Code Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 9377:
/*!*********************************************************!*\
  !*** ./src/app/components/pages/blog/blog.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlogComponent: () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class BlogComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function BlogComponent_Factory(t) {
    return new (t || BlogComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BlogComponent,
    selectors: [["app-blog"]],
    decls: 165,
    vars: 0,
    consts: [[1, "page-title-area"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "active"], [1, "page-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "home-blog-area", "ptb-100"], [1, "section-title"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "single-blog"], [1, "blog-img"], ["routerLink", "/blog-details"], ["src", "assets/images/blog/1.jpg", "alt", "blog"], [1, "content"], ["routerLink", "/blog"], ["routerLink", "/blog-details", 1, "line-bnt"], ["src", "assets/images/blog/2.jpg", "alt", "blog"], ["src", "assets/images/blog/3.jpg", "alt", "blog"], ["src", "assets/images/blog/4.jpg", "alt", "blog"], ["src", "assets/images/blog/5.jpg", "alt", "blog"], ["src", "assets/images/blog/6.jpg", "alt", "blog"], [1, "col-lg-12"], [1, "page-navigation-area"], ["aria-label", "Page navigation example text-center"], [1, "pagination"], [1, "page-item"], ["routerLink", "/blog", 1, "page-link", "page-links"], [1, "bx", "bx-chevrons-left"], [1, "page-item", "active"], ["routerLink", "/blog", 1, "page-link"], [1, "bx", "bx-chevrons-right"]],
    template: function BlogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16)(23, "div", 1)(24, "div", 17)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Blog Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Our Regular Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18)(32, "div", 19)(33, "div", 20)(34, "div", 21)(35, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24)(38, "ul")(39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "10 April 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li")(42, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 22)(45, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Joe\u2019s Company Software Desenvolvimento Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19)(52, "div", 20)(53, "div", 21)(54, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24)(57, "ul")(58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "10 April 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li")(61, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 22)(64, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Temperature App UX Studeis & Desenvolvimento Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 19)(71, "div", 20)(72, "div", 21)(73, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 24)(76, "ul")(77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "10 April 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li")(80, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 22)(83, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "IT Software Company Desenvolvimento Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 19)(90, "div", 20)(91, "div", 21)(92, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 24)(95, "ul")(96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "10 April 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li")(99, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 22)(102, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Restaurant Management & Web Developing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 19)(109, "div", 20)(110, "div", 21)(111, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 24)(114, "ul")(115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "10 April 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li")(118, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 22)(121, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Ride Share App UX Studeis & Desenvolvimento Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 19)(128, "div", 20)(129, "div", 21)(130, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 24)(133, "ul")(134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "10 April 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li")(137, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 22)(140, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Parking Management & Web Developing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 32)(147, "div", 33)(148, "nav", 34)(149, "ul", 35)(150, "li", 36)(151, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li", 39)(154, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li", 36)(157, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li", 36)(160, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li", 36)(163, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 5282:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/pages/case-studies-details/case-studies-details.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaseStudiesDetailsComponent: () => (/* binding */ CaseStudiesDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class CaseStudiesDetailsComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function CaseStudiesDetailsComponent_Factory(t) {
    return new (t || CaseStudiesDetailsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CaseStudiesDetailsComponent,
    selectors: [["app-case-studies-details"]],
    decls: 70,
    vars: 0,
    consts: [[1, "page-title-area"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "active"], [1, "page-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "services-details-area", "ptb-100"], [1, "row"], [1, "col-12"], [1, "services-img", "mb"], ["src", "assets/images/case-details/1.jpg", "alt", "Image"], [1, "services-details-text"], [1, "scrives-item-2", "mt-4"], [1, "row", "align-items-center"], [1, "col-lg-4"], [1, "services-img", "mb-qc"], ["src", "assets/images/solutions-details/5.png", "alt", "Image"], [1, "col-lg-8"], [1, "scrives-item-3", "mt-4"], [1, "col-lg-6", "col-sm-6"], [1, "social"], [1, "social-link"], ["target", "_blank", "href", "#"], [1, "bx", "bxl-facebook"], [1, "bx", "bxl-twitter"], [1, "bx", "bxl-pinterest-alt"], [1, "bx", "bxl-instagram"], [1, "share"], ["href", "#", "target", "_blank"], [1, "bx", "bx-share-alt"]],
    template: function CaseStudiesDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Estudos de Caso Detalhes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Estudos de Caso Detalhes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16)(23, "div", 1)(24, "div", 17)(25, "div", 18)(26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18)(29, "div", 21)(30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Joe\u2019s Company Software Desenvolvimento Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum not only five centuries, but also the leap into.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a dictionary of over 200 Latin words, combined with a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc generators on the Internet tend to repeat predefined chunks as necessary, making this the first generator dictionary of over 200 Latin words, combined with a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22)(39, "div", 23)(40, "div", 24)(41, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 27)(44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Ride Share App UX Studies & Desenvolvimento Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition necessary, making this the first as necessary, making this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28)(49, "div", 23)(50, "div", 29)(51, "div", 30)(52, "ul", 31)(53, "li")(54, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li")(57, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li")(60, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li")(63, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29)(66, "div", 37)(67, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 1848:
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/case-studies/case-studies.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaseStudiesComponent: () => (/* binding */ CaseStudiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



function CaseStudiesComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "div", 32)(4, "div", 33)(5, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36)(8, "a", 34)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Joe\u2019s Company Software Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31)(16, "div", 32)(17, "div", 33)(18, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 36)(21, "a", 34)(22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ride Share App UX Studies & Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 31)(29, "div", 32)(30, "div", 33)(31, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 36)(34, "a", 34)(35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Restaurant Management & Web Developing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 31)(42, "div", 32)(43, "div", 33)(44, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 36)(47, "a", 34)(48, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "IT Software Company Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31)(55, "div", 32)(56, "div", 33)(57, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 36)(60, "a", 34)(61, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Parking Management & Web Developing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31)(68, "div", 32)(69, "div", 33)(70, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 36)(73, "a", 34)(74, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Temperature App UX Studies & Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function CaseStudiesComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43)(1, "div", 30)(2, "div", 31)(3, "div", 32)(4, "div", 33)(5, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36)(8, "a", 34)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "IT Software Company Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31)(16, "div", 32)(17, "div", 33)(18, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 36)(21, "a", 34)(22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Parking Management & Web Developing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 31)(29, "div", 32)(30, "div", 33)(31, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 36)(34, "a", 34)(35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Temperature App UX Studies & Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function CaseStudiesComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44)(1, "div", 30)(2, "div", 31)(3, "div", 32)(4, "div", 33)(5, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36)(8, "a", 34)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ride Share App UX Studies & Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31)(16, "div", 32)(17, "div", 33)(18, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 36)(21, "a", 34)(22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Restaurant Management & Web Developing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 31)(29, "div", 32)(30, "div", 33)(31, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 36)(34, "a", 34)(35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "IT Software Company Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function CaseStudiesComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45)(1, "div", 30)(2, "div", 31)(3, "div", 32)(4, "div", 33)(5, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36)(8, "a", 34)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Temperature App UX Studies & Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31)(16, "div", 32)(17, "div", 33)(18, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 36)(21, "a", 34)(22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "IT Software Company Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 31)(29, "div", 32)(30, "div", 33)(31, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 36)(34, "a", 34)(35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Parking Management & Web Developing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
const _c0 = function (a0) {
  return {
    "active": a0
  };
};
class CaseStudiesComponent {
  constructor() {
    // Tabs
    this.currentTab = 'tab1';
  }
  ngOnInit() {}
  switchTab(event, tab) {
    event.preventDefault();
    this.currentTab = tab;
  }
  static #_ = this.ɵfac = function CaseStudiesComponent_Factory(t) {
    return new (t || CaseStudiesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CaseStudiesComponent,
    selectors: [["app-case-studies"]],
    decls: 55,
    vars: 16,
    consts: [[1, "page-title-area"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "active"], [1, "page-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "home-case", "pt-100", "pb-70"], [1, "section-title"], [1, "case"], [1, "nav-tabset"], [1, "nav-tab", 3, "ngClass"], [3, "click"], [1, "tabs-container"], ["class", "pane", "id", "tab1", 4, "ngIf"], ["class", "pane", "id", "tab2", 4, "ngIf"], ["class", "pane", "id", "tab3", 4, "ngIf"], ["class", "pane", "id", "tab4", 4, "ngIf"], [1, "case-btn", "text-center"], ["routerLink", "/case-studies"], ["id", "tab1", 1, "pane"], [1, "row", "case-list"], [1, "col-lg-4", "col-sm-6"], [1, "single-case"], [1, "case-img"], ["routerLink", "/case-studies-details"], ["src", "assets/images/case/c1.jpg", "alt", "case"], [1, "content"], ["routerLink", "/case-studies-details", 1, "line-bnt"], ["src", "assets/images/case/c2.jpg", "alt", "case"], ["src", "assets/images/case/c3.jpg", "alt", "case"], ["src", "assets/images/case/c4.jpg", "alt", "case"], ["src", "assets/images/case/c5.jpg", "alt", "case"], ["src", "assets/images/case/c6.jpg", "alt", "case"], ["id", "tab2", 1, "pane"], ["id", "tab3", 1, "pane"], ["id", "tab4", 1, "pane"]],
    template: function CaseStudiesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Estudos de Caso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Estudos de Caso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16)(23, "div", 1)(24, "div", 17)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Estudos de Caso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "D\u00EA uma olhada em nossa vitrine de trabalho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18)(32, "ul", 19)(33, "li", 20)(34, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaseStudiesComponent_Template_span_click_34_listener($event) {
          return ctx.switchTab($event, "tab1");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 20)(37, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaseStudiesComponent_Template_span_click_37_listener($event) {
          return ctx.switchTab($event, "tab2");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 20)(40, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaseStudiesComponent_Template_span_click_40_listener($event) {
          return ctx.switchTab($event, "tab3");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Desenvolvimento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 20)(43, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CaseStudiesComponent_Template_span_click_43_listener($event) {
          return ctx.switchTab($event, "tab4");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " C\u00EDber Seguran\u00E7a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, CaseStudiesComponent_div_46_Template, 80, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, CaseStudiesComponent_div_47_Template, 41, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, CaseStudiesComponent_div_48_Template, 41, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CaseStudiesComponent_div_49_Template, 41, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27)(51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "We Have More Amazing Cases. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.currentTab === "tab1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.currentTab === "tab2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.currentTab === "tab3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.currentTab === "tab4"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === "tab1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === "tab2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === "tab3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === "tab4");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 847:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/contact/contact.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);



class ContactComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 87,
    vars: 0,
    consts: [[1, "page-title-area"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "active"], [1, "page-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "contact-area", "pt-100", "pb-70"], [1, "row"], [1, "col-lg-4", "col-sm-6"], [1, "single-contact"], [1, "icon"], [1, "bx", "bx-envelope"], [1, "content"], [1, "bx", "bx-location-plus"], [1, "col-lg-4", "col-sm-12"], [1, "bx", "bx-phone-call"], [1, "home-contact-area", "home-2-contact", "pb-100"], [1, "section-title"], [1, "col-lg-6", "col-md-6"], ["id", "contactForm"], [1, "col-lg-12", "col-sm-12"], [1, "form-group"], ["type", "text", "name", "name", "id", "name", "required", "", "placeholder", "Your Name", 1, "form-control"], ["type", "email", "name", "email", "id", "email", "required", "", "placeholder", "Your Email", 1, "form-control"], ["type", "text", "name", "phone_number", "id", "phone_number", "required", "", "placeholder", "Your Phone", 1, "form-control"], ["type", "text", "name", "msg_subject", "id", "msg_subject", "required", "", "placeholder", "Subject", 1, "form-control"], [1, "col-lg-12", "col-md-12"], ["name", "message", "id", "message", "cols", "30", "rows", "5", "required", "", "placeholder", "Your Message", 1, "form-control"], ["type", "submit", 1, "default-btn", "page-btn", "box-btn"], [1, "contact-img", "contact-img-2"], ["src", "assets/images/contact-img2.jpg", "alt", "contact"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contato Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contato Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16)(23, "div", 1)(24, "div", 17)(25, "div", 18)(26, "div", 19)(27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22)(30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "hello@code-express.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18)(35, "div", 19)(36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22)(39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "28/A Street, New York City, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24)(44, "div", 19)(45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22)(48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "+1 (321) 984 754");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "section", 26)(53, "div", 1)(54, "div", 27)(55, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Contato Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Deixe-nos saber sobre sua ideia de projeto!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 17)(62, "div", 28)(63, "div", 22)(64, "form", 29)(65, "div", 17)(66, "div", 30)(67, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 30)(70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 30)(73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 30)(76, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 36)(79, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "textarea", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 36)(82, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 28)(85, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 4837:
/*!***********************************************************!*\
  !*** ./src/app/components/pages/error/error.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorComponent: () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class ErrorComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function ErrorComponent_Factory(t) {
    return new (t || ErrorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ErrorComponent,
    selectors: [["app-error"]],
    decls: 31,
    vars: 0,
    consts: [[1, "page-title-area"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "active"], [1, "page-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "error-area", "ptb-100"], [1, "error-page"], ["src", "assets/images/404.gif", "alt", "error"], ["routerLink", "/", 1, "box-btn"]],
    template: function ErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "404 Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "404 Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16)(23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Ops! P\u00E1gina n\u00E3o encontrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "A p\u00E1gina que voc\u00EA procurava n\u00E3o foi encontrada.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Return To Home Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 9995:
/*!*******************************************************!*\
  !*** ./src/app/components/pages/faq/faq.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FaqComponent: () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);




const _c0 = function (a0, a1) {
  return {
    "bx-plus": a0,
    "bx-x": a1
  };
};
function FaqComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqComponent_div_38_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.toggleAccordionItem(item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, !item_r1.open, item_r1.open));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !item_r1.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.content);
  }
}
class FaqComponent {
  constructor() {
    this.accordionItems = [{
      title: 'Grande Compreensão',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.`,
      open: false
    }, {
      title: 'Atualizar Tecnologia',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.`,
      open: false
    }, {
      title: 'Equipe Experiente',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.`,
      open: false
    }, {
      title: 'Serviço de Melhor Qualidade',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sit amet consectetur adipiscing.`,
      open: false
    }];
    this.selectedItem = null;
  }
  ngOnInit() {}
  toggleAccordionItem(item) {
    item.open = !item.open;
    if (this.selectedItem && this.selectedItem !== item) {
      this.selectedItem.open = false;
    }
    this.selectedItem = item;
  }
  static #_ = this.ɵfac = function FaqComponent_Factory(t) {
    return new (t || FaqComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FaqComponent,
    selectors: [["app-faq"]],
    decls: 69,
    vars: 1,
    consts: [[1, "page-title-area"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "active"], [1, "page-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "choose-area", "ptb-100"], [1, "section-title"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "choose-img"], ["src", "assets/images/choose-img.png", "alt", "choose"], [1, "choose-content"], [1, "faq-accordion"], ["class", "faq-item", 4, "ngFor", "ngForOf"], [1, "home-contact-area", "home-2-contact", "pb-100"], [1, "content"], ["id", "contactForm"], [1, "row"], [1, "col-lg-6", "col-sm-6"], [1, "form-group"], ["type", "text", "name", "name", "id", "name", "required", "", "placeholder", "Your Name", 1, "form-control"], ["type", "email", "name", "email", "id", "email", "required", "", "placeholder", "Your Email", 1, "form-control"], ["type", "text", "name", "phone_number", "id", "phone_number", "required", "", "placeholder", "Your Phone", 1, "form-control"], ["type", "text", "name", "msg_subject", "id", "msg_subject", "required", "", "placeholder", "Subject", 1, "form-control"], [1, "col-lg-12"], ["name", "message", "id", "message", "cols", "30", "rows", "5", "required", "", "placeholder", "Your Message", 1, "form-control"], [1, "col-lg-12", "col-md-12"], ["type", "submit", 1, "default-btn", "page-btn", "box-btn"], [1, "faq-item"], [1, "faq-header", 3, "click"], [1, "bx", 3, "ngClass"], [1, "faq-content", 3, "hidden"]],
    template: function FaqComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16)(23, "div", 1)(24, "div", 17)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Choose Code Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Conquistamos a confian\u00E7a das pessoas atrav\u00E9s do nosso excelente servi\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18)(32, "div", 19)(33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19)(36, "div", 22)(37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, FaqComponent_div_38_Template, 7, 7, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section", 25)(40, "div", 1)(41, "div", 17)(42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Contato Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Deixe-nos saber sobre sua ideia de projeto!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 26)(49, "form", 27)(50, "div", 28)(51, "div", 29)(52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29)(55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29)(58, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 29)(61, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 35)(64, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "textarea", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 37)(67, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.accordionItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 758:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/gallery/gallery.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GalleryComponent: () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class GalleryComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function GalleryComponent_Factory(t) {
    return new (t || GalleryComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: GalleryComponent,
    selectors: [["app-gallery"]],
    decls: 54,
    vars: 0,
    consts: [[1, "page-title-area"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "active"], [1, "page-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "project-area-six", "pt-100", "pb-70"], [1, "section-title"], [1, "project-wraps"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "single-project"], [1, "project-image", "bg-1"], [1, "price-wrap"], [1, "project-image", "bg-2"], [1, "col-lg-4", "col-md-12"], [1, "project-image", "bg-3"], [1, "project-image", "bg-4"], [1, "col-lg-8", "col-md-6"], [1, "project-image", "bg-5"]],
    template: function GalleryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Galeria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Galeria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16)(23, "div", 1)(24, "div", 17)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Our Galeria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Featured Galeria have done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas non voluptatum aliquid autem minima ut culpa fugit fuga cumque, ullam minus sequi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18)(32, "div", 19)(33, "div", 20)(34, "div", 21)(35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20)(38, "div", 21)(39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25)(42, "div", 21)(43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19)(46, "div", 20)(47, "div", 21)(48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 28)(51, "div", 21)(52, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 5535:
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/home-one/home-one.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeOneComponent: () => (/* binding */ HomeOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



const _c0 = function (a0, a1) {
  return {
    "bx-plus": a0,
    "bx-x": a1
  };
};
function HomeOneComponent_div_106_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67)(1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeOneComponent_div_106_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const item_r1 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.toggleAccordionItem(item_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 70)(5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c0, !item_r1.open, item_r1.open));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !item_r1.open);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.content);
  }
}
class HomeOneComponent {
  constructor() {
    this.teamSlides = {
      loop: true,
      margin: 20,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        575: {
          items: 2
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    };
    this.clientWrap = {
      loop: true,
      margin: 30,
      nav: false,
      mouseDrag: true,
      items: 1,
      dots: false,
      autoHeight: true,
      autoplay: true,
      smartSpeed: 800,
      autoplayHoverPause: true,
      center: false,
      responsive: {
        0: {
          items: 1,
          margin: 10
        },
        576: {
          items: 1
        },
        768: {
          items: 2,
          margin: 20
        },
        992: {
          items: 2
        },
        1200: {
          items: 2
        }
      }
    };
    // Accordion
    this.accordionItems = [{
      title: 'Grande Compreensão',
      content: `Na Code Express, nossa busca pela excelência é impulsionada por uma qualidade distintiva: a Grande Compreensão. Compreendemos profundamente que cada projeto é único, assim como as metas e desafios exclusivos de cada cliente. `,
      open: false
    }, {
      title: 'Equipe Experiente',
      content: `Nossa equipe é formada por profissionais altamente qualificados e experientes que trazem consigo uma riqueza de conhecimento e perícia no universo em constante evolução da Tecnologia da Informação.`,
      open: false
    }, {
      title: 'Serviço de Melhor Qualidade',
      content: `comprometemo-nos inabalavelmente a oferecer um "Serviço de Melhor Qualidade" em todas as interações e entregas. Esta qualidade é o pilar central que define nossa reputação e impulsiona nosso compromisso com a satisfação do cliente.`,
      open: false
    }, {
      title: 'Atualizar Tecnologia',
      content: `A qualidade de "Atualizar Tecnologia" é um princípio fundamental que define a abordagem da Code Express em meio ao cenário dinâmico da Tecnologia da Informação. Reconhecemos que a evolução constante das tecnologias é essencial para impulsionar o sucesso e a relevância a longo prazo.`,
      open: false
    }];
    this.selectedItem = null;
    // Tabs
    this.currentTab = 'tab1';
  }
  ngOnInit() {}
  toggleAccordionItem(item) {
    item.open = !item.open;
    if (this.selectedItem && this.selectedItem !== item) {
      this.selectedItem.open = false;
    }
    this.selectedItem = item;
  }
  switchTab(event, tab) {
    event.preventDefault();
    this.currentTab = tab;
  }
  static #_ = this.ɵfac = function HomeOneComponent_Factory(t) {
    return new (t || HomeOneComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeOneComponent,
    selectors: [["app-home-one"]],
    decls: 184,
    vars: 1,
    consts: [[1, "banner-area"], [1, "d-table"], [1, "d-table-cell"], [1, "container-fluid"], [1, "row", "align-items-center"], [1, "col-lg-6"], [1, "banner-content"], [1, "banner-btn"], ["routerLink", "/contact", 1, "box-btn"], ["routerLink", "/about", 1, "box-btn", "border-btn"], [1, "banner-img"], ["src", "assets/images/home-bg-1-img.png", "alt", "banner-img"], [1, "home-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape2"], ["src", "assets/images/shape/2.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "home-service-area", "pt-100", "pb-70"], [1, "container"], [1, "section-title"], [1, "row"], [1, "col-lg-4", "col-sm-6"], [1, "single-service"], [1, "service-img"], ["src", "assets/images/service/s1.png", "alt", "service"], [1, "service-content"], ["routerLink", "/solutions-details", 1, "line-bnt"], ["src", "assets/images/service/s2.png", "alt", "service"], ["src", "assets/images/service/s3.png", "alt", "service"], [1, "home-company-area", "bg-color"], [1, "col-lg-6", "col-md-12"], [1, "company-content"], [1, "company-tittle"], ["routerLink", "/about", 1, "box-btn"], [1, "company-img"], ["src", "assets/images/company/company-img.jpg", "alt", "company"], [1, "choose-area", "ptb-100"], [1, "choose-img"], ["src", "assets/images/choose-img.png", "alt", "choose"], [1, "choose-content"], [1, "faq-accordion"], ["class", "faq-item", 4, "ngFor", "ngForOf"], [1, "home-process-area", "pt-100", "pb-70"], [1, "col-lg-3", "col-sm-6"], [1, "single-process"], [1, "icon"], ["src", "assets/images/process/p1.png", "alt", "process"], ["src", "assets/images/process/next.png", "alt", "shape"], [1, "content"], ["src", "assets/images/process/p2.png", "alt", "process"], [1, "pro-span"], ["src", "assets/images/process/p3.png", "alt", "process"], ["src", "assets/images/process/p4.png", "alt", "process"], [1, "feature-area", "bg-color", "ptb-100"], [1, "contnet"], [1, "feature-tittle"], [1, "flaticon-correct"], [1, "feature-img"], ["src", "assets/images/feature-img.png", "alt", "feature"], [1, "faq-item"], [1, "faq-header", 3, "click"], [1, "bx", 3, "ngClass"], [1, "faq-content", 3, "hidden"]],
    template: function HomeOneComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Servi\u00E7os e solu\u00E7\u00F5es eficazes e Confi\u00E1veis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Expressando Ideias, Codificando o Futuro: Code Express. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7)(12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contate-nos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Saber mais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5)(17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12)(20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 25)(33, "div", 26)(34, "div", 27)(35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Servi\u00E7os inteligentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Code Express fornece todos os tipos de solu\u00E7\u00F5es tecnol\u00F3gicas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 28)(40, "div", 29)(41, "div", 30)(42, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 33)(45, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Design Visual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Explore a ess\u00EAncia da inova\u00E7\u00E3o e da comunica\u00E7\u00E3o visual atrav\u00E9s dos nossos servi\u00E7os de Design Visual. Na vanguarda da express\u00E3o est\u00E9tica, oferecemos solu\u00E7\u00F5es que transcendem o convencional, transformando conceitos abstratos em experi\u00EAncias visuais memor\u00E1veis. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Ler Mais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 29)(52, "div", 30)(53, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 33)(56, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Desenvolvimento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Desenvolvimento que transcendem limites, transformando conceitos em solu\u00E7\u00F5es tang\u00EDveis. Nossa equipe altamente qualificada e dedicada est\u00E1 pronta para guiar sua empresa atrav\u00E9s de todas as etapas do processo de desenvolvimento, desde a concep\u00E7\u00E3o de projetos at\u00E9 a implementa\u00E7\u00E3o eficaz. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Ler Mais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 29)(63, "div", 30)(64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 33)(67, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Teste de Controle de Qualidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " No cerne da nossa dedica\u00E7\u00E3o \u00E0 excel\u00EAncia, oferecemos servi\u00E7os especializados em Teste de Controle de Qualidade, assegurando que cada aspecto do seu projeto atenda aos mais altos padr\u00F5es de desempenho. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Ler Mais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "section", 37)(74, "div", 26)(75, "div", 4)(76, "div", 38)(77, "div", 39)(78, "div", 40)(79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Nossa empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Servi\u00E7o Inovador de Ajuda em Todo o Mundo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Bem-vindo \u00E0 Code Express, sua parceira de confian\u00E7a no mundo din\u00E2mico da Tecnologia da Informa\u00E7\u00E3o. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " Estamos comprometidos em levar sua vis\u00E3o al\u00E9m dos limites, oferecendo servi\u00E7os abrangentes que abra\u00E7am a excel\u00EAncia em cada etapa do caminho. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Ler Mais");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 38)(90, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "section", 44)(93, "div", 26)(94, "div", 27)(95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Escolher Code Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Conquistamos a confian\u00E7a das pessoas atrav\u00E9s do nosso excelente servi\u00E7o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 4)(100, "div", 5)(101, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 5)(104, "div", 47)(105, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, HomeOneComponent_div_106_Template, 7, 7, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "section", 50)(108, "div", 26)(109, "div", 27)(110, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Processo de Trabalho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Somos populares por causa da nossa maneira de trabalhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 28)(117, "div", 51)(118, "div", 52)(119, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 56)(124, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Pesquisa de Produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Mais do que uma etapa no processo de desenvolvimento; \u00E9 a chave para abrir portas para a inova\u00E7\u00E3o e para moldar o futuro digital. Com um compromisso s\u00F3lido com a pesquisa e desenvolvimento, estamos empenhados em criar produtos que n\u00E3o apenas atendam \u00E0s necessidades presentes, mas tamb\u00E9m antecipem e superem as expectativas futuras.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 51)(129, "div", 52)(130, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 56)(135, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Teste de Usu\u00E1rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Reconhecemos que a qualidade de um produto vai al\u00E9m da funcionalidade t\u00E9cnica; reside na experi\u00EAncia do usu\u00E1rio. \u00C9 por isso que incorporamos o \"Teste de Usu\u00E1rio\" como uma etapa essencial em nosso processo de desenvolvimento de novos produtos, garantindo que cada solu\u00E7\u00E3o n\u00E3o apenas atenda, mas exceda as expectativas do usu\u00E1rio.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 51)(140, "div", 52)(141, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 56)(146, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Desenvolvimento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Vai al\u00E9m de linhas de c\u00F3digo; \u00E9 uma jornada de transforma\u00E7\u00E3o digital. Nosso compromisso \u00E9 transformar suas vis\u00F5es em solu\u00E7\u00F5es tang\u00EDveis, impulsionando sua presen\u00E7a online e alavancando seu sucesso.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 51)(151, "div", 52)(152, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 56)(155, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Entrega do Produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "A entrega do produto n\u00E3o \u00E9 apenas um marco; \u00E9 o culminar de nossa dedica\u00E7\u00E3o \u00E0 excel\u00EAncia, inova\u00E7\u00E3o e satisfa\u00E7\u00E3o do cliente. Nossa abordagem hol\u00EDstica assegura que a entrega n\u00E3o seja apenas um momento, mas sim um processo cuidadosamente gerenciado que reflete nosso compromisso com o sucesso do cliente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "section", 61)(160, "div", 26)(161, "div", 4)(162, "div", 5)(163, "div", 62)(164, "div", 63)(165, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Caracter\u00EDsticas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Temos tamb\u00E9m alguns recursos fornecidos pela Code Express ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "ul")(170, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, " Cursos e Treinamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " Consultoria Tecnol\u00F3gica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](177, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Espa\u00E7o de trabalho pago mensalmente ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Vamos conversar!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 5)(182, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.accordionItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
    styles: [".team-img[_ngcontent-%COMP%] {\n  max-width: 260px;\n  max-height: 270px;\n  margin: 0 auto;\n  border-radius: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lLW9uZS9ob21lLW9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW0taW1nIHtcclxuICAgIG1heC13aWR0aDogMjYwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNzBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 8952:
/*!*********************************************************************!*\
  !*** ./src/app/components/pages/home-three/home-three.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeThreeComponent: () => (/* binding */ HomeThreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);





function HomeThreeComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 121);
  }
}
function HomeThreeComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 122);
  }
}
function HomeThreeComponent_div_172_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 123)(1, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeThreeComponent_div_172_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function HomeThreeComponent_div_295_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 128)(1, "div", 129)(2, "div", 24)(3, "div", 130)(4, "div", 131)(5, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "a", 132)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Joe\u2019s Company Software Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 24)(16, "div", 130)(17, "div", 131)(18, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7)(21, "a", 132)(22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ride Share App UX Studies & Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24)(29, "div", 130)(30, "div", 131)(31, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7)(34, "a", 132)(35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Restaurant Management & Web Developing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24)(42, "div", 130)(43, "div", 131)(44, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7)(47, "a", 132)(48, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "IT Software Company Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24)(55, "div", 130)(56, "div", 131)(57, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7)(60, "a", 132)(61, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Parking Management & Web Developing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 24)(68, "div", 130)(69, "div", 131)(70, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 7)(73, "a", 132)(74, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Temperature App UX Studies & Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function HomeThreeComponent_div_296_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 140)(1, "div", 129)(2, "div", 24)(3, "div", 130)(4, "div", 131)(5, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "a", 132)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "IT Software Company Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 24)(16, "div", 130)(17, "div", 131)(18, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7)(21, "a", 132)(22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Parking Management & Web Developing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24)(29, "div", 130)(30, "div", 131)(31, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7)(34, "a", 132)(35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Temperature App UX Studies & Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function HomeThreeComponent_div_297_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 141)(1, "div", 129)(2, "div", 24)(3, "div", 130)(4, "div", 131)(5, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "a", 132)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ride Share App UX Studies & Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 24)(16, "div", 130)(17, "div", 131)(18, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7)(21, "a", 132)(22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Restaurant Management & Web Developing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24)(29, "div", 130)(30, "div", 131)(31, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7)(34, "a", 132)(35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "IT Software Company Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function HomeThreeComponent_div_298_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 142)(1, "div", 129)(2, "div", 24)(3, "div", 130)(4, "div", 131)(5, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "a", 132)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Temperature App UX Studies & Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 24)(16, "div", 130)(17, "div", 131)(18, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7)(21, "a", 132)(22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "IT Software Company Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24)(29, "div", 130)(30, "div", 131)(31, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7)(34, "a", 132)(35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Parking Management & Web Developing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function HomeThreeComponent_ng_template_315_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing Quis suspendisse typesetting ipsum dolor sit amet,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Steven Jony");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CEO of Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function HomeThreeComponent_ng_template_316_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing Quis suspendisse typesetting ipsum dolor sit amet,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Omit Jacson");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Company Founder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function HomeThreeComponent_ng_template_328_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 146)(1, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 149)(4, "li")(5, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 155)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Luiz Eduardo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Full Stack Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function HomeThreeComponent_ng_template_329_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 146)(1, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 149)(4, "li")(5, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 155)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Evana Doe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Web Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function HomeThreeComponent_ng_template_330_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 146)(1, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 149)(4, "li")(5, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 155)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mariana Bernardes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "IT Consulting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function HomeThreeComponent_ng_template_331_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 146)(1, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 149)(4, "li")(5, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 155)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Maria Fread");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "UI/UX Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function HomeThreeComponent_ng_template_332_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 146)(1, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 149)(4, "li")(5, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 155)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Luiz Eduardo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Full Stack Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function HomeThreeComponent_ng_template_333_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 146)(1, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 149)(4, "li")(5, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 155)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Evana Doe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Web Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function HomeThreeComponent_ng_template_334_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 146)(1, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 149)(4, "li")(5, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 155)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mariana Bernardes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "IT Consulting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function HomeThreeComponent_ng_template_335_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 146)(1, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 149)(4, "li")(5, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 155)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Maria Fread");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "UI/UX Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
const _c0 = function (a0) {
  return {
    "active": a0
  };
};
class HomeThreeComponent {
  constructor() {
    this.bannerImageSlides = {
      loop: true,
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplay: true,
      autoplayTimeout: 2500,
      autoHeight: true,
      items: 1,
      animateOut: 'fadeOut',
      margin: 0,
      navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-next-1'></i>"]
    };
    this.teamSlides = {
      loop: true,
      margin: 20,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        575: {
          items: 2
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    };
    this.clientWrap = {
      loop: true,
      margin: 30,
      nav: false,
      mouseDrag: true,
      items: 1,
      dots: false,
      autoHeight: true,
      autoplay: true,
      smartSpeed: 800,
      autoplayHoverPause: true,
      center: false,
      responsive: {
        0: {
          items: 1,
          margin: 10
        },
        576: {
          items: 1
        },
        768: {
          items: 2,
          margin: 20
        },
        992: {
          items: 2
        },
        1200: {
          items: 2
        }
      }
    };
    // Tabs
    this.currentTab = 'tab1';
    // Video Popup
    this.isOpen = false;
  }
  ngOnInit() {}
  switchTab(event, tab) {
    event.preventDefault();
    this.currentTab = tab;
  }
  openPopup() {
    this.isOpen = true;
  }
  closePopup() {
    this.isOpen = false;
  }
  static #_ = this.ɵfac = function HomeThreeComponent_Factory(t) {
    return new (t || HomeThreeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeThreeComponent,
    selectors: [["app-home-three"]],
    decls: 443,
    vars: 20,
    consts: [[1, "main-banner-three"], [1, "container-fluid"], [1, "row"], [1, "col-lg-6", "col-md-12"], [1, "main-banner-content"], [1, "d-table"], [1, "d-table-cell"], [1, "content"], [1, "slider-btn-wrap"], ["routerLink", "/contact", 1, "box-btn"], ["routerLink", "/about", 1, "box-btn", "border-btn"], [1, "col-lg-6", "pr-0", "col-md-12"], [1, "banner-image-slider"], [3, "options"], ["carouselSlide", ""], [1, "home-company-area"], [1, "container"], [1, "row", "align-items-center"], [1, "company-content"], [1, "company-tittle"], ["routerLink", "/about", 1, "box-btn"], [1, "company-img"], ["src", "assets/images/about-img-2.jpg", "alt", "company"], [1, "info-area", "pt-100", "pb-70", "bg-color"], [1, "col-lg-4", "col-sm-6"], [1, "single-info"], [1, "info-img"], ["src", "assets/images/info/i1.jpg", "alt", "info"], [1, "flaticon-info"], [1, "arrow"], ["routerLink", "/about"], [1, "flaticon-next-1"], ["src", "assets/images/info/i2.jpg", "alt", "info"], [1, "flaticon-support"], [1, "col-lg-4", "col-sm-6", "offset-sm-3", "offset-lg-0"], [1, "single-info", "si-30"], ["src", "assets/images/info/i3.jpg", "alt", "info"], [1, "flaticon-goal"], [1, "home-service-area", "pt-100", "pb-70"], [1, "section-title"], [1, "single-service"], [1, "service-img"], ["src", "assets/images/service/s1.png", "alt", "service"], [1, "service-content"], ["routerLink", "/solutions-details", 1, "line-bnt"], ["src", "assets/images/service/s2.png", "alt", "service"], ["src", "assets/images/service/s3.png", "alt", "service"], ["src", "assets/images/service/s4.png", "alt", "service"], ["src", "assets/images/service/s5.png", "alt", "service"], ["src", "assets/images/service/s6.png", "alt", "service"], [1, "technology-area", "ptb-100", "bg-color"], [1, "row", "align-items-center", "choose-c"], [1, "col-lg-6"], [1, "choose-img"], ["src", "assets/images/choose-img1.jpg", "alt", "choose"], [1, "technology-video"], ["type", "button", 1, "video-btn", "p-0", "border-0", 3, "click"], [1, "bx", "bx-play"], [1, "technology-content"], ["class", "video-popup", 4, "ngIf"], [1, "home-process-area", "pt-100", "pb-70"], [1, "col-lg-3", "col-sm-6"], [1, "single-process"], [1, "icon"], ["src", "assets/images/process/p1.png", "alt", "process"], ["src", "assets/images/process/next2.png", "alt", "shape"], ["src", "assets/images/process/p2.png", "alt", "process"], [1, "pro-span"], ["src", "assets/images/process/p3.png", "alt", "process"], ["src", "assets/images/process/p4.png", "alt", "process"], [1, "home2-choose-area", "pt-100", "pb-70"], [1, "col-lg-2", "col-sm-4"], [1, "single-choose"], [1, "flaticon-friends"], [1, "flaticon-award"], [1, "flaticon-chip"], [1, "flaticon-customer-service"], [1, "flaticon-like"], [1, "flaticon-coin"], [1, "home-case", "pb-100"], [1, "case"], [1, "nav-tabset"], [1, "nav-tab", 3, "ngClass"], [3, "click"], [1, "tabs-container"], ["class", "pane", "id", "tab1", 4, "ngIf"], ["class", "pane", "id", "tab2", 4, "ngIf"], ["class", "pane", "id", "tab3", 4, "ngIf"], ["class", "pane", "id", "tab4", 4, "ngIf"], [1, "case-btn", "text-center"], ["routerLink", "/"], [1, "client-area", "ptb-100", "bg-color"], [1, "client-wrap"], [1, "home-team-area", "ptb-100"], [1, "home-team-slider"], [1, "home-blog-area", "pt-100", "pb-100", "bg-color"], [1, "col-lg-4", "col-md-6"], [1, "single-blog"], [1, "blog-img"], ["routerLink", "/blog-details"], ["src", "assets/images/blog/1.jpg", "alt", "blog"], ["routerLink", "/blog"], ["routerLink", "/blog-details", 1, "line-bnt"], ["src", "assets/images/blog/5.jpg", "alt", "blog"], [1, "col-lg-4", "col-md-6", "offset-md-3", "offset-lg-0"], ["src", "assets/images/blog/3.jpg", "alt", "blog"], [1, "blog-btn", "text-center"], [1, "home-contact-area", "home-2-contact", "ptb-100"], [1, "col-lg-6", "col-md-6"], ["id", "contactForm"], [1, "col-lg-12", "col-sm-12"], [1, "form-group"], ["type", "text", "name", "name", "id", "name", "required", "", "placeholder", "Your Name", 1, "form-control"], ["type", "email", "name", "email", "id", "email", "required", "", "placeholder", "Your Email", 1, "form-control"], ["type", "text", "name", "phone_number", "id", "phone_number", "required", "", "placeholder", "Your Phone", 1, "form-control"], ["type", "text", "name", "msg_subject", "id", "msg_subject", "required", "", "placeholder", "Subject", 1, "form-control"], [1, "col-lg-12", "col-md-12"], ["name", "message", "id", "message", "cols", "30", "rows", "5", "required", "", "placeholder", "Your Message", 1, "form-control"], ["type", "submit", 1, "default-btn", "page-btn", "box-btn"], [1, "contact-img", "contact-img-2"], ["src", "assets/images/contact-img2.jpg", "alt", "contact"], [1, "banner-image", "banner-slider-bg-1"], [1, "banner-image", "banner-slider-bg-2"], [1, "video-popup"], [1, "popup-inner"], ["src", "https://www.youtube.com/embed/XNQk1qt__Vw", "title", "Setup and Local Installation - React Nextjs Online Yoga Coaching & Training Courses System", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "allowfullscreen", ""], ["type", "button", 1, "close-btn", 3, "click"], [1, "bx", "bx-x"], ["id", "tab1", 1, "pane"], [1, "row", "case-list"], [1, "single-case"], [1, "case-img"], ["routerLink", "/case-studies-details"], ["src", "assets/images/case/c1.jpg", "alt", "case"], ["routerLink", "/case-studies-details", 1, "line-bnt"], ["src", "assets/images/case/c2.jpg", "alt", "case"], ["src", "assets/images/case/c3.jpg", "alt", "case"], ["src", "assets/images/case/c4.jpg", "alt", "case"], ["src", "assets/images/case/c5.jpg", "alt", "case"], ["src", "assets/images/case/c6.jpg", "alt", "case"], ["id", "tab2", 1, "pane"], ["id", "tab3", 1, "pane"], ["id", "tab4", 1, "pane"], [1, "single-client"], ["src", "assets/images/client/1.jpg", "alt", "img"], ["src", "assets/images/client/2.jpg", "alt", "img"], [1, "single-team"], [1, "team-img"], ["src", "assets/images/team/t1.jpg", "alt", "team"], [1, "social"], ["href", "#", "target", "_blank"], [1, "bx", "bxl-linkedin"], [1, "bx", "bxl-facebook"], [1, "bx", "bxl-twitter"], [1, "bx", "bxs-envelope"], [1, "content", "text-center"], ["src", "assets/images/team/t2.jpg", "alt", "team"], ["src", "assets/images/team/t3.jpg", "alt", "team"], ["src", "assets/images/team/t4.jpg", "alt", "team"]],
    template: function HomeThreeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Secure IT Solu\u00E7\u00F5es For A More Secure Environment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8)(13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contato Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Know More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11)(18, "div", 12)(19, "owl-carousel-o", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HomeThreeComponent_ng_template_20_Template, 1, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeThreeComponent_ng_template_21_Template, 1, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 15)(23, "div", 16)(24, "div", 17)(25, "div", 3)(26, "div", 18)(27, "div", 19)(28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Sobre Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Innovative It Helping Service All Over the World");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using Content here,content here normal distribution looking at its.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form variations passages.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Know More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3)(39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23)(42, "div", 16)(43, "div", 2)(44, "div", 24)(45, "div", 25)(46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7)(49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Sobre Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29)(53, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24)(56, "div", 25)(57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7)(60, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Our Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 29)(64, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 34)(67, "div", 35)(68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 7)(71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Our Goal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29)(75, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "section", 38)(78, "div", 16)(79, "div", 39)(80, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Servi\u00E7os inteligentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Code Express fornece todos os tipos de solu\u00E7\u00F5es tecnol\u00F3gicas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 2)(87, "div", 24)(88, "div", 40)(89, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 43)(92, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Design Visual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 24)(99, "div", 40)(100, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 43)(103, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Desenvolvimento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 24)(110, "div", 40)(111, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 43)(114, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Teste de Controle de Qualidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 24)(121, "div", 40)(122, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 43)(125, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Gerenciamento de TI\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 24)(132, "div", 40)(133, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 43)(136, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " C\u00EDber Seguran\u00E7a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 24)(143, "div", 40)(144, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 43)(147, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Wireless Connectivity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "section", 50)(154, "div", 16)(155, "div", 51)(156, "div", 52)(157, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 55)(160, "button", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeThreeComponent_Template_button_click_160_listener() {
          return ctx.openPopup();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 52)(163, "div", 58)(164, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Updated Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going There are many variations of passages of Lorem Ipsum available, but the.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Contato Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](172, HomeThreeComponent_div_172_Template, 5, 0, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "section", 60)(174, "div", 16)(175, "div", 39)(176, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Processo de Trabalho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Somos populares por causa da nossa maneira de trabalhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 2)(183, "div", 61)(184, "div", 62)(185, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 7)(190, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Pesquisa de Produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 61)(195, "div", 62)(196, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 7)(201, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Teste de Usu\u00E1rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 61)(206, "div", 62)(207, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 7)(212, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Desenvolvimento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 61)(217, "div", 62)(218, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 7)(221, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Entrega do Produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "section", 70)(226, "div", 16)(227, "div", 39)(228, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Escolha Code Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, "Conquistamos a confian\u00E7a das pessoas atrav\u00E9s do nosso excelente servi\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 2)(235, "div", 71)(236, "div", 72)(237, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Understanding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 71)(242, "div", 72)(243, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "i", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Best Quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 71)(248, "div", 72)(249, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 71)(254, "div", 72)(255, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Support 24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 71)(260, "div", 72)(261, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "i", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Expert Equipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 71)(266, "div", 72)(267, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, "Price Oriented");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "section", 79)(272, "div", 16)(273, "div", 39)(274, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Estudos de Caso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "D\u00EA uma olhada em nossa vitrine de trabalho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 80)(281, "ul", 81)(282, "li", 82)(283, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeThreeComponent_Template_span_click_283_listener($event) {
          return ctx.switchTab($event, "tab1");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "li", 82)(286, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeThreeComponent_Template_span_click_286_listener($event) {
          return ctx.switchTab($event, "tab2");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, " Design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "li", 82)(289, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeThreeComponent_Template_span_click_289_listener($event) {
          return ctx.switchTab($event, "tab3");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, " Desenvolvimento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "li", 82)(292, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeThreeComponent_Template_span_click_292_listener($event) {
          return ctx.switchTab($event, "tab4");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " C\u00EDber Seguran\u00E7a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](295, HomeThreeComponent_div_295_Template, 80, 0, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](296, HomeThreeComponent_div_296_Template, 41, 0, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](297, HomeThreeComponent_div_297_Template, 41, 0, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](298, HomeThreeComponent_div_298_Template, 41, 0, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 89)(300, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "We Have More Amazing Cases. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "section", 91)(305, "div", 16)(306, "div", 39)(307, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Depoimentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "O que Nossos Clientes Dizem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 92)(314, "owl-carousel-o", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](315, HomeThreeComponent_ng_template_315_Template, 8, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](316, HomeThreeComponent_ng_template_316_Template, 8, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "section", 93)(318, "div", 16)(319, "div", 39)(320, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Equipe Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Pessoas Que Est\u00E3o por Tr\u00E1s das Conquistas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 94)(327, "owl-carousel-o", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](328, HomeThreeComponent_ng_template_328_Template, 21, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](329, HomeThreeComponent_ng_template_329_Template, 21, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](330, HomeThreeComponent_ng_template_330_Template, 21, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](331, HomeThreeComponent_ng_template_331_Template, 21, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](332, HomeThreeComponent_ng_template_332_Template, 21, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](333, HomeThreeComponent_ng_template_333_Template, 21, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](334, HomeThreeComponent_ng_template_334_Template, 21, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](335, HomeThreeComponent_ng_template_335_Template, 21, 0, "ng-template", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "section", 95)(337, "div", 16)(338, "div", 39)(339, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](340, "Blog Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Our Regular Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 2)(346, "div", 96)(347, "div", 97)(348, "div", 98)(349, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "img", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "div", 7)(352, "ul")(353, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "10 April 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "li")(356, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "a", 99)(359, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "Joe\u2019s Company Software Desenvolvimento Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "div", 96)(366, "div", 97)(367, "div", 98)(368, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](369, "img", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 7)(371, "ul")(372, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "10 April 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "li")(375, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "a", 99)(378, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Temperature App UX Studies & Desenvolvimento Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "div", 104)(385, "div", 97)(386, "div", 98)(387, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "img", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 7)(390, "ul")(391, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "10 April 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "li")(394, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "a", 99)(397, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](398, "IT Software Company Desenvolvimento Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div", 106)(404, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "We Have More Usefull Blogs For You. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "a", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "section", 107)(409, "div", 16)(410, "div", 39)(411, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "Contato Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](414, "Deixe-nos saber sobre sua ideia de projeto!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div", 2)(418, "div", 108)(419, "div", 7)(420, "form", 109)(421, "div", 2)(422, "div", 110)(423, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](424, "input", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "div", 110)(426, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](427, "input", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "div", 110)(429, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "input", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "div", 110)(432, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "input", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "div", 116)(435, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](436, "textarea", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "div", 116)(438, "button", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "div", 108)(441, "div", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](442, "img", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.bannerImageSlides);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.currentTab === "tab1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.currentTab === "tab2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.currentTab === "tab3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.currentTab === "tab4"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === "tab1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === "tab2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === "tab3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === "tab4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.clientWrap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.teamSlides);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
    styles: [".video-popup[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 5;\n  display: flex;\n  position: fixed;\n  text-align: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%] {\n  width: 720px;\n  padding: 20px;\n  position: relative;\n  border-radius: 5px;\n  background-color: var(--whiteColor);\n  margin-left: auto;\n  margin-right: auto;\n}\n.video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 426px;\n  border-radius: 5px;\n}\n.video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  top: -15px;\n  width: 35px;\n  right: -10px;\n  border: none;\n  height: 35px;\n  font-size: 20px;\n  line-height: 37px;\n  border-radius: 50%;\n  position: absolute;\n  transition: var(--transition);\n  background-color: var(--whiteColor);\n}\n.video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: var(--whiteColor);\n}\n\n\n\n@media only screen and (max-width: 767px) {\n  .video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%] {\n    width: 300px;\n    padding: 10px;\n  }\n  .video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 177px;\n  }\n  .video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n    width: 30px;\n    right: -5px;\n    height: 30px;\n    font-size: 18px;\n    line-height: 31px;\n  }\n  .video-box[_ngcontent-%COMP%] {\n    padding-top: 150px;\n    padding-bottom: 150px;\n  }\n  .video-box[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%] {\n    width: 65px;\n    height: 65px;\n    font-size: 40px;\n  }\n  .video-box[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-top: 1px;\n  }\n}\n\n\n@media only screen and (min-width: 576px) and (max-width: 767px) {\n  .video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n  .video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 238px;\n  }\n  .video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n    right: -10px;\n  }\n}\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lLXRocmVlL2hvbWUtdGhyZWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBRUksaUJBQUE7RUFDQSxrQkFBQTtBQUFaO0FBRVE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQVo7QUFFUTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUNBQUE7QUFBWjtBQUVZO0VBQ0kscUJBQUE7RUFDQSx3QkFBQTtBQUFoQjs7QUFNQSxvQkFBQTtBQUNBO0VBR1E7SUFDSSxZQUFBO0lBQ0EsYUFBQTtFQUxWO0VBT1U7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQUxkO0VBT1U7SUFDSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUFMZDtFQVNFO0lBRVEsa0JBQUE7SUFDQSxxQkFBQTtFQVJWO0VBVU07SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUFSVjtFQVVVO0lBQ0ksZUFBQTtFQVJkO0FBQ0Y7QUFjQSx1Q0FBQTtBQUNBO0VBR1E7SUFDSSxZQUFBO0VBZFY7RUFnQlU7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQWRkO0VBZ0JVO0lBQ0ksWUFBQTtFQWRkO0FBQ0Y7QUFvQkEsdUNBQUE7QUFHQSx3Q0FBQTtBQUdBLHlDQUFBO0FBR0EscUJBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW8tcG9wdXAge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cclxuICAgIC5wb3B1cC1pbm5lciB7XHJcbiAgICAgICAgd2lkdGg6IDcyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcclxuICAgICAgICBtYXJnaW46IHtcclxuICAgICAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZnJhbWUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MjZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xvc2UtYnRuIHtcclxuICAgICAgICAgICAgdG9wOiAtMTVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGVDb2xvcik7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyogTWF4IHdpZHRoIDc2N3B4ICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDc2N3B4KSB7XHJcblxyXG4gICAgLnZpZGVvLXBvcHVwIHtcclxuICAgICAgICAucG9wdXAtaW5uZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZnJhbWUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3N3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jbG9zZS1idG4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICByaWdodDogLTVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnZpZGVvLWJveCB7XHJcbiAgICAgICAgcGFkZGluZzoge1xyXG4gICAgICAgICAgICB0b3A6IDE1MHB4O1xyXG4gICAgICAgICAgICBib3R0b206IDE1MHB4O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLnZpZGVvLWJ0biB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyogTWluIHdpZHRoIDU3NnB4IHRvIE1heCB3aWR0aCA3NjdweCAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA1NzZweCkgYW5kIChtYXgtd2lkdGggOiA3NjdweCkge1xyXG5cclxuICAgIC52aWRlby1wb3B1cCB7XHJcbiAgICAgICAgLnBvcHVwLWlubmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWZyYW1lIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMzhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2xvc2UtYnRuIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qIE1pbiB3aWR0aCA3NjhweCB0byBNYXggd2lkdGggOTkxcHggKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogNzY4cHgpIGFuZCAobWF4LXdpZHRoIDogOTkxcHgpIHt9XHJcblxyXG4vKiBNaW4gd2lkdGggOTkycHggdG8gTWF4IHdpZHRoIDExOTlweCAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA5OTJweCkgYW5kIChtYXgtd2lkdGggOiAxMTk5cHgpIHt9XHJcblxyXG4vKiBNaW4gd2lkdGggMTIwMHB4IHRvIE1heCB3aWR0aCAxMzk5cHggKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMzk5cHgpIHt9XHJcblxyXG4vKiBNaW4gd2lkdGggMTYwMHB4ICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7fSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 9503:
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/home-two/home-two.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeTwoComponent: () => (/* binding */ HomeTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-owl-carousel-o */ 9436);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);





function HomeTwoComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 106)(1, "div", 107)(2, "div", 108)(3, "div", 5)(4, "div", 109)(5, "div", 110)(6, "div", 111)(7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Awesome App For Your Modern Lifestyle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida incididunt ut.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 112)(12, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Let\u2019s Talk!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Know More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
  }
}
function HomeTwoComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 114)(1, "div", 107)(2, "div", 108)(3, "div", 5)(4, "div", 109)(5, "div", 110)(6, "div", 111)(7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Digital Agency & Marketing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida incididunt ut.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 112)(12, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Let\u2019s Talk!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Know More!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
  }
}
function HomeTwoComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 115)(1, "div", 107)(2, "div", 108)(3, "div", 5)(4, "div", 109)(5, "div", 110)(6, "div", 111)(7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Make Real-Life Connections With IT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida incididunt ut.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 112)(12, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Let\u2019s Talk!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Know More");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
  }
}
function HomeTwoComponent_div_235_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 116)(1, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeTwoComponent_div_235_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.closePopup());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function HomeTwoComponent_div_260_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 121)(1, "div", 122)(2, "div", 7)(3, "div", 123)(4, "div", 124)(5, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11)(8, "a", 125)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Joe\u2019s Company Software Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7)(16, "div", 123)(17, "div", 124)(18, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11)(21, "a", 125)(22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ride Share App UX Studies & Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7)(29, "div", 123)(30, "div", 124)(31, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11)(34, "a", 125)(35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Restaurant Management & Web Developing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7)(42, "div", 123)(43, "div", 124)(44, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 11)(47, "a", 125)(48, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "IT Software Company Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7)(55, "div", 123)(56, "div", 124)(57, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 11)(60, "a", 125)(61, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Parking Management & Web Developing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 7)(68, "div", 123)(69, "div", 124)(70, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 11)(73, "a", 125)(74, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Temperature App UX Studies & Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function HomeTwoComponent_div_261_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 133)(1, "div", 122)(2, "div", 7)(3, "div", 123)(4, "div", 124)(5, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11)(8, "a", 125)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "IT Software Company Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7)(16, "div", 123)(17, "div", 124)(18, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11)(21, "a", 125)(22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Parking Management & Web Developing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7)(29, "div", 123)(30, "div", 124)(31, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11)(34, "a", 125)(35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Temperature App UX Studies & Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function HomeTwoComponent_div_262_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 134)(1, "div", 122)(2, "div", 7)(3, "div", 123)(4, "div", 124)(5, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11)(8, "a", 125)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ride Share App UX Studies & Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7)(16, "div", 123)(17, "div", 124)(18, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11)(21, "a", 125)(22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Restaurant Management & Web Developing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7)(29, "div", 123)(30, "div", 124)(31, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11)(34, "a", 125)(35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "IT Software Company Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function HomeTwoComponent_div_263_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 135)(1, "div", 122)(2, "div", 7)(3, "div", 123)(4, "div", 124)(5, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11)(8, "a", 125)(9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Temperature App UX Studies & Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7)(16, "div", 123)(17, "div", 124)(18, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11)(21, "a", 125)(22, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "IT Software Company Desenvolvimento Case");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7)(29, "div", 123)(30, "div", 124)(31, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11)(34, "a", 125)(35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Parking Management & Web Developing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Lorem ipsum dolor sit amet, coloni is to nsectetur adipiscing elit, sed do eiudvi smod tempor incididunt ipsum dolor.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "View Project Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
}
function HomeTwoComponent_ng_template_280_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing Quis suspendisse typesetting ipsum dolor sit amet,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Steven Jony");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CEO of Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function HomeTwoComponent_ng_template_281_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem Ipsum is simply dummy text of the printing Quis suspendisse typesetting ipsum dolor sit amet,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Omit Jacson");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Company Founder");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function HomeTwoComponent_ng_template_293_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 139)(1, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 142)(4, "li")(5, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 148)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Luiz Eduardo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Full Stack Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function HomeTwoComponent_ng_template_294_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 139)(1, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 142)(4, "li")(5, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 148)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Evana Doe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Web Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function HomeTwoComponent_ng_template_295_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 139)(1, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 142)(4, "li")(5, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 148)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mariana Bernardes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "IT Consulting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function HomeTwoComponent_ng_template_296_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 139)(1, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 142)(4, "li")(5, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 148)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Maria Fread");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "UI/UX Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function HomeTwoComponent_ng_template_297_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 139)(1, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 142)(4, "li")(5, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 148)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Luiz Eduardo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Full Stack Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function HomeTwoComponent_ng_template_298_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 139)(1, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 142)(4, "li")(5, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 148)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Evana Doe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Web Developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function HomeTwoComponent_ng_template_299_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 139)(1, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 142)(4, "li")(5, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 148)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Mariana Bernardes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "IT Consulting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function HomeTwoComponent_ng_template_300_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 139)(1, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 142)(4, "li")(5, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li")(8, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li")(11, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li")(14, "a", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 148)(17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Maria Fread");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "UI/UX Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
const _c0 = function (a0) {
  return {
    "active": a0
  };
};
class HomeTwoComponent {
  constructor() {
    this.homeSlides = {
      animateOut: 'slideOutDown',
      animateIn: 'slideInDown',
      items: 1,
      loop: true,
      autoplay: true,
      dots: false,
      nav: true,
      autoHeight: true,
      autoplaySpeed: 800,
      mouseDrag: false,
      autoplayHoverPause: true,
      navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-next-1'></i>"],
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1
        },
        768: {
          items: 1
        },
        1200: {
          items: 1
        }
      }
    };
    this.teamSlides = {
      loop: true,
      margin: 20,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        575: {
          items: 2
        },
        576: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    };
    this.clientWrap = {
      loop: true,
      margin: 30,
      nav: false,
      mouseDrag: true,
      items: 1,
      dots: false,
      autoHeight: true,
      autoplay: true,
      smartSpeed: 800,
      autoplayHoverPause: true,
      center: false,
      responsive: {
        0: {
          items: 1,
          margin: 10
        },
        576: {
          items: 1
        },
        768: {
          items: 2,
          margin: 20
        },
        992: {
          items: 2
        },
        1200: {
          items: 2
        }
      }
    };
    // Tabs
    this.currentTab = 'tab1';
    // Video Popup
    this.isOpen = false;
  }
  ngOnInit() {}
  switchTab(event, tab) {
    event.preventDefault();
    this.currentTab = tab;
  }
  openPopup() {
    this.isOpen = true;
  }
  closePopup() {
    this.isOpen = false;
  }
  static #_ = this.ɵfac = function HomeTwoComponent_Factory(t) {
    return new (t || HomeTwoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeTwoComponent,
    selectors: [["app-home-two"]],
    decls: 408,
    vars: 20,
    consts: [[1, "slider-area-2"], [1, "home-slider"], [3, "options"], ["carouselSlide", ""], [1, "info-area", "pt-100", "pb-70"], [1, "container"], [1, "row"], [1, "col-lg-4", "col-sm-6"], [1, "single-info"], [1, "info-img"], ["src", "assets/images/info/i1.jpg", "alt", "info"], [1, "content"], [1, "flaticon-info"], [1, "arrow"], ["routerLink", "/about"], [1, "flaticon-next-1"], ["src", "assets/images/info/i2.jpg", "alt", "info"], [1, "flaticon-support"], [1, "col-lg-4", "col-sm-6", "offset-sm-3", "offset-lg-0"], [1, "single-info", "si-30"], ["src", "assets/images/info/i3.jpg", "alt", "info"], [1, "flaticon-goal"], [1, "home-service-area", "pb-70"], [1, "section-title"], [1, "single-service"], [1, "service-img"], ["src", "assets/images/service/s1.png", "alt", "service"], [1, "service-content"], ["routerLink", "/solutions-details", 1, "line-bnt"], ["src", "assets/images/service/s2.png", "alt", "service"], ["src", "assets/images/service/s3.png", "alt", "service"], ["src", "assets/images/service/s4.png", "alt", "service"], ["src", "assets/images/service/s5.png", "alt", "service"], ["src", "assets/images/service/s6.png", "alt", "service"], [1, "home-process-area", "pt-100", "pb-70"], [1, "col-lg-3", "col-sm-6"], [1, "single-process"], [1, "icon"], ["src", "assets/images/process/p1.png", "alt", "process"], ["src", "assets/images/process/next.png", "alt", "shape"], ["src", "assets/images/process/p2.png", "alt", "process"], [1, "pro-span"], ["src", "assets/images/process/p3.png", "alt", "process"], ["src", "assets/images/process/p4.png", "alt", "process"], [1, "home2-choose-area", "pt-100", "pb-70"], [1, "col-lg-2", "col-sm-4"], [1, "single-choose"], [1, "flaticon-friends"], [1, "flaticon-award"], [1, "flaticon-chip"], [1, "flaticon-customer-service"], [1, "flaticon-like"], [1, "flaticon-coin"], [1, "technology-area", "ptb-100", "bg-color"], [1, "row", "align-items-center", "choose-c"], [1, "col-lg-6"], [1, "choose-img"], ["src", "assets/images/choose-img1.jpg", "alt", "choose"], [1, "technology-video"], ["type", "button", 1, "video-btn", "p-0", "border-0", 3, "click"], [1, "bx", "bx-play"], [1, "technology-content"], ["routerLink", "/contact", 1, "box-btn"], ["class", "video-popup", 4, "ngIf"], [1, "home-case", "ptb-100"], [1, "case"], [1, "nav-tabset"], [1, "nav-tab", 3, "ngClass"], [3, "click"], [1, "tabs-container"], ["class", "pane", "id", "tab1", 4, "ngIf"], ["class", "pane", "id", "tab2", 4, "ngIf"], ["class", "pane", "id", "tab3", 4, "ngIf"], ["class", "pane", "id", "tab4", 4, "ngIf"], [1, "case-btn", "text-center"], ["routerLink", "/"], [1, "client-area", "ptb-100", "bg-color"], [1, "client-wrap"], [1, "home-team-area", "ptb-100"], [1, "home-team-slider"], [1, "home-blog-area", "pt-100", "pb-100", "bg-color"], [1, "col-lg-4", "col-md-6"], [1, "single-blog"], [1, "blog-img"], ["routerLink", "/blog-details"], ["src", "assets/images/blog/1.jpg", "alt", "blog"], ["routerLink", "/blog"], ["routerLink", "/blog-details", 1, "line-bnt"], ["src", "assets/images/blog/5.jpg", "alt", "blog"], [1, "col-lg-4", "col-md-6", "offset-md-3", "offset-lg-0"], ["src", "assets/images/blog/3.jpg", "alt", "blog"], [1, "blog-btn", "text-center"], [1, "home-contact-area", "home-2-contact", "ptb-100"], [1, "col-lg-6", "col-md-6"], ["id", "contactForm"], [1, "col-lg-12", "col-sm-12"], [1, "form-group"], ["type", "text", "name", "name", "id", "name", "required", "", "placeholder", "Your Name", 1, "form-control"], ["type", "email", "name", "email", "id", "email", "required", "", "placeholder", "Your Email", 1, "form-control"], ["type", "text", "name", "phone_number", "id", "phone_number", "required", "", "placeholder", "Your Phone", 1, "form-control"], ["type", "text", "name", "msg_subject", "id", "msg_subject", "required", "", "placeholder", "Subject", 1, "form-control"], [1, "col-lg-12", "col-md-12"], ["name", "message", "id", "message", "cols", "30", "rows", "5", "required", "", "placeholder", "Your Message", 1, "form-control"], ["type", "submit", 1, "default-btn", "page-btn", "box-btn"], [1, "contact-img", "contact-img-2"], ["src", "assets/images/contact-img2.jpg", "alt", "contact"], [1, "single-slider", "single-slider-bg-1"], [1, "d-table"], [1, "d-table-cell"], [1, "row", "align-items-center"], [1, "col-lg-12", "text-center"], [1, "slider-content", "one"], [1, "slider-btn", "text-center"], ["routerLink", "/about", 1, "box-btn", "border-btn"], [1, "single-slider", "single-slider-bg-2"], [1, "single-slider", "single-slider-bg-3"], [1, "video-popup"], [1, "popup-inner"], ["src", "https://www.youtube.com/embed/XNQk1qt__Vw", "title", "Setup and Local Installation - React Nextjs Online Yoga Coaching & Training Courses System", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "allowfullscreen", ""], ["type", "button", 1, "close-btn", 3, "click"], [1, "bx", "bx-x"], ["id", "tab1", 1, "pane"], [1, "row", "case-list"], [1, "single-case"], [1, "case-img"], ["routerLink", "/case-studies-details"], ["src", "assets/images/case/c1.jpg", "alt", "case"], ["routerLink", "/case-studies-details", 1, "line-bnt"], ["src", "assets/images/case/c2.jpg", "alt", "case"], ["src", "assets/images/case/c3.jpg", "alt", "case"], ["src", "assets/images/case/c4.jpg", "alt", "case"], ["src", "assets/images/case/c5.jpg", "alt", "case"], ["src", "assets/images/case/c6.jpg", "alt", "case"], ["id", "tab2", 1, "pane"], ["id", "tab3", 1, "pane"], ["id", "tab4", 1, "pane"], [1, "single-client"], ["src", "assets/images/client/1.jpg", "alt", "img"], ["src", "assets/images/client/2.jpg", "alt", "img"], [1, "single-team"], [1, "team-img"], ["src", "assets/images/team/t1.jpg", "alt", "team"], [1, "social"], ["href", "#", "target", "_blank"], [1, "bx", "bxl-linkedin"], [1, "bx", "bxl-facebook"], [1, "bx", "bxl-twitter"], [1, "bx", "bxs-envelope"], [1, "content", "text-center"], ["src", "assets/images/team/t2.jpg", "alt", "team"], ["src", "assets/images/team/t3.jpg", "alt", "team"], ["src", "assets/images/team/t4.jpg", "alt", "team"]],
    template: function HomeTwoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "owl-carousel-o", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeTwoComponent_ng_template_3_Template, 16, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeTwoComponent_ng_template_4_Template, 16, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeTwoComponent_ng_template_5_Template, 16, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11)(14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Sobre Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13)(18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7)(21, "div", 8)(22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11)(25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Our Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13)(29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18)(32, "div", 19)(33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11)(36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Our Goal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13)(40, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 22)(43, "div", 5)(44, "div", 23)(45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Servi\u00E7os inteligentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Code Express fornece todos os tipos de solu\u00E7\u00F5es tecnol\u00F3gicas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 6)(52, "div", 7)(53, "div", 24)(54, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 27)(57, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Design Visual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 7)(64, "div", 24)(65, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 27)(68, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Desenvolvimento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 7)(75, "div", 24)(76, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 27)(79, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Teste de Controle de Qualidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 7)(86, "div", 24)(87, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 27)(90, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Gerenciamento de TI\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 7)(97, "div", 24)(98, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 27)(101, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " C\u00EDber Seguran\u00E7a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 7)(108, "div", 24)(109, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 27)(112, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Wireless Connectivity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "section", 34)(119, "div", 5)(120, "div", 23)(121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Processo de Trabalho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Somos populares por causa da nossa maneira de trabalhar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 6)(128, "div", 35)(129, "div", 36)(130, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 11)(135, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Pesquisa de Produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 35)(140, "div", 36)(141, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 11)(146, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Teste de Usu\u00E1rio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 35)(151, "div", 36)(152, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 11)(157, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Desenvolvimento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 35)(162, "div", 36)(163, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 11)(166, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Entrega do Produto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Lorem ipsum dolor sit amet, co nsectetur adipiscing elit, sed do eiusmod tempor incididunt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "section", 44)(171, "div", 5)(172, "div", 23)(173, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Escolha Code Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Conquistamos a confian\u00E7a das pessoas atrav\u00E9s do nosso excelente servi\u00E7o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 6)(180, "div", 45)(181, "div", 46)(182, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Understanding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 45)(187, "div", 46)(188, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Best Quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 45)(193, "div", 46)(194, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 45)(199, "div", 46)(200, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](201, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, "Support 24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 45)(205, "div", 46)(206, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Expert Equipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 45)(211, "div", 46)(212, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Price Oriented");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "section", 53)(217, "div", 5)(218, "div", 54)(219, "div", 55)(220, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 58)(223, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeTwoComponent_Template_button_click_223_listener() {
          return ctx.openPopup();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 55)(226, "div", 61)(227, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, "Updated Technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going There are many variations of passages of Lorem Ipsum available, but the.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "a", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "Contato Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](235, HomeTwoComponent_div_235_Template, 5, 0, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "section", 64)(237, "div", 5)(238, "div", 23)(239, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Estudos de Caso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "D\u00EA uma olhada em nossa vitrine de trabalho");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 65)(246, "ul", 66)(247, "li", 67)(248, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeTwoComponent_Template_span_click_248_listener($event) {
          return ctx.switchTab($event, "tab1");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "li", 67)(251, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeTwoComponent_Template_span_click_251_listener($event) {
          return ctx.switchTab($event, "tab2");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " Design ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "li", 67)(254, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeTwoComponent_Template_span_click_254_listener($event) {
          return ctx.switchTab($event, "tab3");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, " Desenvolvimento ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "li", 67)(257, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeTwoComponent_Template_span_click_257_listener($event) {
          return ctx.switchTab($event, "tab4");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " C\u00EDber Seguran\u00E7a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](260, HomeTwoComponent_div_260_Template, 80, 0, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](261, HomeTwoComponent_div_261_Template, 41, 0, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](262, HomeTwoComponent_div_262_Template, 41, 0, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](263, HomeTwoComponent_div_263_Template, 41, 0, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 74)(265, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "We Have More Amazing Cases. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "section", 76)(270, "div", 5)(271, "div", 23)(272, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Depoimentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "O que Nossos Clientes Dizem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 77)(279, "owl-carousel-o", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](280, HomeTwoComponent_ng_template_280_Template, 8, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](281, HomeTwoComponent_ng_template_281_Template, 8, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "section", 78)(283, "div", 5)(284, "div", 23)(285, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Equipe Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Pessoas Que Est\u00E3o por Tr\u00E1s das Conquistas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 79)(292, "owl-carousel-o", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](293, HomeTwoComponent_ng_template_293_Template, 21, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](294, HomeTwoComponent_ng_template_294_Template, 21, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](295, HomeTwoComponent_ng_template_295_Template, 21, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](296, HomeTwoComponent_ng_template_296_Template, 21, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](297, HomeTwoComponent_ng_template_297_Template, 21, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](298, HomeTwoComponent_ng_template_298_Template, 21, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](299, HomeTwoComponent_ng_template_299_Template, 21, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](300, HomeTwoComponent_ng_template_300_Template, 21, 0, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "section", 80)(302, "div", 5)(303, "div", 23)(304, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Blog Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Our Regular Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis vel consequatur tempora atque blanditiis exercitationem incidunt, alias corporis quam assumenda dicta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 6)(311, "div", 81)(312, "div", 82)(313, "div", 83)(314, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 11)(317, "ul")(318, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "10 April 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "li")(321, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "a", 84)(324, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Joe\u2019s Company Software Desenvolvimento Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](327, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 81)(331, "div", 82)(332, "div", 83)(333, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 11)(336, "ul")(337, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](338, "10 April 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "li")(340, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "a", 84)(343, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "Temperature App UX Studies & Desenvolvimento Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 89)(350, "div", 82)(351, "div", 83)(352, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 11)(355, "ul")(356, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](357, "10 April 2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "li")(359, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "By Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "a", 84)(362, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](363, "IT Software Company Desenvolvimento Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas in fugit minima modi perspiciatis nam aspernatur porro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "a", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 91)(369, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, "We Have More Usefull Blogs For You. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "a", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "section", 92)(374, "div", 5)(375, "div", 23)(376, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, "Contato Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](379, "Deixe-nos saber sobre sua ideia de projeto!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "It is a long established fact that a reader will be distracted by the rea dable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "div", 6)(383, "div", 93)(384, "div", 11)(385, "form", 94)(386, "div", 6)(387, "div", 95)(388, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](389, "input", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 95)(391, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](392, "input", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 95)(394, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "input", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div", 95)(397, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](398, "input", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 101)(400, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](401, "textarea", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 101)(403, "button", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](404, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "div", 93)(406, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](407, "img", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.homeSlides);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](233);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.currentTab === "tab1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.currentTab === "tab2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.currentTab === "tab3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.currentTab === "tab4"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === "tab1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === "tab2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === "tab3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentTab === "tab4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.clientWrap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.teamSlides);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_3__.CarouselSlideDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
    styles: [".video-popup[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 5;\n  display: flex;\n  position: fixed;\n  text-align: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%] {\n  width: 720px;\n  padding: 20px;\n  position: relative;\n  border-radius: 5px;\n  background-color: var(--whiteColor);\n  margin-left: auto;\n  margin-right: auto;\n}\n.video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 426px;\n  border-radius: 5px;\n}\n.video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  top: -15px;\n  width: 35px;\n  right: -10px;\n  border: none;\n  height: 35px;\n  font-size: 20px;\n  line-height: 37px;\n  border-radius: 50%;\n  position: absolute;\n  transition: var(--transition);\n  background-color: var(--whiteColor);\n}\n.video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover {\n  background-color: red;\n  color: var(--whiteColor);\n}\n\n\n\n@media only screen and (max-width: 767px) {\n  .video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%] {\n    width: 300px;\n    padding: 10px;\n  }\n  .video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 177px;\n  }\n  .video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n    width: 30px;\n    right: -5px;\n    height: 30px;\n    font-size: 18px;\n    line-height: 31px;\n  }\n  .video-box[_ngcontent-%COMP%] {\n    padding-top: 150px;\n    padding-bottom: 150px;\n  }\n  .video-box[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%] {\n    width: 65px;\n    height: 65px;\n    font-size: 40px;\n  }\n  .video-box[_ngcontent-%COMP%]   .video-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-top: 1px;\n  }\n}\n\n\n@media only screen and (min-width: 576px) and (max-width: 767px) {\n  .video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n  .video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 238px;\n  }\n  .video-popup[_ngcontent-%COMP%]   .popup-inner[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n    right: -10px;\n  }\n}\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ob21lLXR3by9ob21lLXR3by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUFDSjtBQUNJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFFSSxpQkFBQTtFQUNBLGtCQUFBO0FBQVo7QUFFUTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFBWjtBQUVRO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQ0FBQTtBQUFaO0FBRVk7RUFDSSxxQkFBQTtFQUNBLHdCQUFBO0FBQWhCOztBQU1BLG9CQUFBO0FBQ0E7RUFHUTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VBTFY7RUFPVTtJQUNJLFdBQUE7SUFDQSxhQUFBO0VBTGQ7RUFPVTtJQUNJLFdBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtFQUxkO0VBU0U7SUFFUSxrQkFBQTtJQUNBLHFCQUFBO0VBUlY7RUFVTTtJQUNJLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtFQVJWO0VBVVU7SUFDSSxlQUFBO0VBUmQ7QUFDRjtBQWNBLHVDQUFBO0FBQ0E7RUFHUTtJQUNJLFlBQUE7RUFkVjtFQWdCVTtJQUNJLFdBQUE7SUFDQSxhQUFBO0VBZGQ7RUFnQlU7SUFDSSxZQUFBO0VBZGQ7QUFDRjtBQW9CQSx1Q0FBQTtBQUdBLHdDQUFBO0FBR0EseUNBQUE7QUFHQSxxQkFBQSIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlby1wb3B1cCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblxyXG4gICAgLnBvcHVwLWlubmVyIHtcclxuICAgICAgICB3aWR0aDogNzIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xyXG4gICAgICAgIG1hcmdpbjoge1xyXG4gICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQyNnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbG9zZS1idG4ge1xyXG4gICAgICAgICAgICB0b3A6IC0xNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZUNvbG9yKTtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXdoaXRlQ29sb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiBNYXggd2lkdGggNzY3cHggKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogNzY3cHgpIHtcclxuXHJcbiAgICAudmlkZW8tcG9wdXAge1xyXG4gICAgICAgIC5wb3B1cC1pbm5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmcmFtZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTc3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNsb3NlLWJ0biB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudmlkZW8tYm94IHtcclxuICAgICAgICBwYWRkaW5nOiB7XHJcbiAgICAgICAgICAgIHRvcDogMTUwcHg7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMTUwcHg7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAudmlkZW8tYnRuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDY1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4vKiBNaW4gd2lkdGggNTc2cHggdG8gTWF4IHdpZHRoIDc2N3B4ICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDU3NnB4KSBhbmQgKG1heC13aWR0aCA6IDc2N3B4KSB7XHJcblxyXG4gICAgLnZpZGVvLXBvcHVwIHtcclxuICAgICAgICAucG9wdXAtaW5uZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZnJhbWUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIzOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jbG9zZS1idG4ge1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyogTWluIHdpZHRoIDc2OHB4IHRvIE1heCB3aWR0aCA5OTFweCAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGggOiA3NjhweCkgYW5kIChtYXgtd2lkdGggOiA5OTFweCkge31cclxuXHJcbi8qIE1pbiB3aWR0aCA5OTJweCB0byBNYXggd2lkdGggMTE5OXB4ICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDk5MnB4KSBhbmQgKG1heC13aWR0aCA6IDExOTlweCkge31cclxuXHJcbi8qIE1pbiB3aWR0aCAxMjAwcHggdG8gTWF4IHdpZHRoIDEzOTlweCAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkgYW5kIChtYXgtd2lkdGg6IDEzOTlweCkge31cclxuXHJcbi8qIE1pbiB3aWR0aCAxNjAwcHggKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHt9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 9669:
/*!*******************************************************************************!*\
  !*** ./src/app/components/pages/nossos-projetos/nossos-projetos.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NossosProjetosComponent: () => (/* binding */ NossosProjetosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);




function NossosProjetosComponent_li_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const benefit_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", benefit_r2.name, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" R$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, benefit_r2.value, "1.2-2"), " ");
  }
}
function NossosProjetosComponent_li_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const benefitPj_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", benefitPj_r3.namePj, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" R$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, benefitPj_r3.valuePj, "1.2-2"), " ");
  }
}
class NossosProjetosComponent {
  constructor() {
    this.salaryBase = 0;
    this.novocampo = 0;
    this.benefitName = ""; // Novo campo para o nome do benefício
    this.benefitValue = 0; // Novo campo para o valor do benefício
    this.benefitsList = [];
    this.totalSalary = 0;
    this.inss = 0;
    this.irrf = 0;
    this.netSalary = 0;
    //BASE PJ
    this.salaryBasePj = 0;
    this.novocampoPj = 0;
    this.benefitNamePj = ""; // Novo campo para o nome do benefício
    this.benefitValuePj = 0; // Novo campo para o valor do benefício
    this.benefitsListPj = [];
    this.totalSalaryPj = 0;
    this.inssPj = 0;
    this.irpj = 0;
    this.csll = 0;
    this.pis = 0;
    this.confins = 0;
    this.netSalaryPj = 0;
  }
  ngOnInit() {
    this.calculateSalary();
    this.calculateSalaryPj();
  }
  calculateSalary() {
    // Somar salário base, novocampo e benefícios
    this.totalSalary = this.salaryBase + this.novocampo + this.calculateTotalBenefits();
    this.calculateINSS();
    this.calculateIRRF();
    this.netSalary = this.totalSalary - this.inss - this.irrf;
  }
  calculateTotalBenefits() {
    // Somar os valores dos benefícios
    return this.benefitsList.reduce((total, benefit) => total + benefit.value, 0);
  }
  calculateINSS() {
    const inssPercentages = [0.08, 0.09, 0.11, 0.11, 0.11]; // Tabela INSS 2024
    const inssBase = this.totalSalary;
    if (inssBase <= 1100) {
      this.inss = inssBase * inssPercentages[0];
    } else if (inssBase <= 2203.48) {
      this.inss = inssBase * inssPercentages[1];
    } else if (inssBase <= 3305.22) {
      this.inss = inssBase * inssPercentages[2];
    } else if (inssBase <= 6433.57) {
      this.inss = inssBase * inssPercentages[3];
    } else {
      this.inss = inssBase * inssPercentages[4];
    }
  }
  calculateIRRF() {
    const irrfPercentages = [0, 0.075, 0.15, 0.225, 0.275]; // Tabela IRRF 2024
    const irrfDeductions = [0, 142.8, 354.8, 636.13, 869.36];
    let irrfBase = this.totalSalary - this.inss;
    let accumulatedTax = 0;
    for (let i = irrfPercentages.length - 1; i >= 0; i--) {
      if (irrfBase > 0) {
        const range = irrfBase - irrfDeductions[i];
        const taxable = range > 0 ? range : 0;
        accumulatedTax += taxable * irrfPercentages[i];
        irrfBase -= range;
      }
    }
    this.irrf = accumulatedTax;
  }
  addBenefit() {
    if (this.benefitName && this.benefitValue) {
      this.benefitsList.push({
        name: this.benefitName,
        value: this.benefitValue
      });
      this.clearBenefitFieldsPj();
    }
  }
  clearBenefitFields() {
    this.benefitName = "";
    this.benefitValue = 0;
  }
  //-------------------------
  //Campo de Pj
  calculateSalaryPj() {
    // Somar salário base, novocampo e benefícios
    this.totalSalaryPj = this.salaryBasePj + this.novocampoPj + this.calculateTotalBenefitsPj();
    this.calculateIRPJ();
    this.calculateCSLL();
    this.calculatePis();
    this.calculateCONFINS();
    this.calculateINSSPj();
    this.netSalaryPj = this.totalSalaryPj - this.inssPj - this.irpj - this.csll - this.pis - this.confins - this.confins;
  }
  calculateTotalBenefitsPj() {
    // Somar os valores dos benefícios
    return this.benefitsListPj.reduce((total, benefitPj) => total + benefitPj.valuePj, 0);
  }
  calculateINSSPj() {
    const inssPercentages = [0.08, 0.09, 0.11, 0.11, 0.11]; // Tabela INSS 2024
    const inssBase = this.totalSalaryPj;
    if (inssBase <= 1100) {
      this.inssPj = inssBase * inssPercentages[0];
    } else if (inssBase <= 2203.48) {
      this.inssPj = inssBase * inssPercentages[1];
    } else if (inssBase <= 3305.22) {
      this.inssPj = inssBase * inssPercentages[2];
    } else if (inssBase <= 6433.57) {
      this.inssPj = inssBase * inssPercentages[3];
    } else {
      this.inssPj = inssBase * inssPercentages[4];
    }
  }
  calculateIRPJ() {
    const irpjAlquotas = [0.025, 0.15]; // 2,5% até R$ 20.000,00 e 15% acima de R$ 20.000,00
    const faixaLimiteIRPJ = 20000;
    if (this.totalSalaryPj <= faixaLimiteIRPJ) {
      this.irpj = this.totalSalaryPj * irpjAlquotas[0];
    } else {
      this.irpj = this.totalSalaryPj * irpjAlquotas[1];
    }
  }
  calculateCSLL() {
    const csllAlquotas = [0.15, 0.3]; // 15% até R$ 20.000,00 e 30% acima de R$ 20.000,00
    const faixaLimiteCSLL = 20000;
    if (this.totalSalaryPj <= faixaLimiteCSLL) {
      this.csll = this.totalSalaryPj * csllAlquotas[0];
    } else {
      this.csll = this.totalSalaryPj * csllAlquotas[1];
    }
  }
  calculatePis() {
    const pisAlquota = 0.0186; // 1,86%
    this.pis = this.totalSalaryPj * pisAlquota;
  }
  calculateCONFINS() {
    const cofinsAlquota = 0.076; // 7,6%
    this.confins = this.totalSalaryPj * cofinsAlquota;
  }
  addBenefitPj() {
    if (this.benefitNamePj && this.benefitValuePj) {
      this.benefitsListPj.push({
        namePj: this.benefitNamePj,
        valuePj: this.benefitValuePj
      });
      this.clearBenefitFieldsPj();
    }
  }
  clearBenefitFieldsPj() {
    this.benefitNamePj = "";
    this.benefitValuePj = 0;
  }
  static #_ = this.ɵfac = function NossosProjetosComponent_Factory(t) {
    return new (t || NossosProjetosComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NossosProjetosComponent,
    selectors: [["app-nossos-projetos"]],
    decls: 118,
    vars: 52,
    consts: [[1, "page-title-area"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "active"], [1, "page-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "home-contact-area", "home-2-contact", "pb-100"], [1, "section-title"], [1, "calculator-results-container"], [1, "calculator-container"], [1, "form-container"], [2, "display", "flex", "gap", "10px"], [2, "flex", "1"], ["for", "salaryBase"], ["type", "number", "id", "salaryBase", 3, "ngModel", "ngModelChange"], ["for", "benefitName"], ["type", "text", "id", "benefitName", 3, "ngModel", "ngModelChange"], ["for", "benefitValue"], ["type", "number", "id", "benefitValue", 3, "ngModel", "ngModelChange"], [3, "click"], [4, "ngFor", "ngForOf"], [1, "results-container"], ["for", "salaryBasePj"], ["type", "number", "id", "salaryBasePj", 3, "ngModel", "ngModelChange"], ["for", "benefitNamePj"], ["type", "text", "id", "benefitNamePj", 3, "ngModel", "ngModelChange"], ["for", "benefitValuePj"], ["type", "number", "id", "benefitValuePj", 3, "ngModel", "ngModelChange"]],
    template: function NossosProjetosComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nossos Projetos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nossos Projetos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16)(23, "div", 1)(24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Caculadora de Sal\u00E1rio CLT E PJ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "cCom essa calculadora voc\u00EA vai ter uma base de melhor escolha entre uma contrata\u00E7\u00E3o CLT ou PJ vamos ter ajudar a fazer a melhor escolha na hora de escolher a modalidade de contrata\u00E7\u00E3o.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18)(31, "div", 19)(32, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Calculadora de Sal\u00E1rio CLT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20)(35, "div", 21)(36, "div", 22)(37, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Sal\u00E1rio Base Fixo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NossosProjetosComponent_Template_input_ngModelChange_39_listener($event) {
          return ctx.salaryBase = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22)(41, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Nome do Benef\u00EDcio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NossosProjetosComponent_Template_input_ngModelChange_43_listener($event) {
          return ctx.benefitName = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22)(45, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Valor do Benef\u00EDcio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NossosProjetosComponent_Template_input_ngModelChange_47_listener($event) {
          return ctx.benefitValue = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NossosProjetosComponent_Template_button_click_48_listener() {
          return ctx.addBenefit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Adicionar Benef\u00EDcio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, NossosProjetosComponent_li_51_Template, 5, 5, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NossosProjetosComponent_Template_button_click_52_listener() {
          return ctx.calculateSalary();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Calcular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31)(55, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Resultados:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 18)(71, "div", 19)(72, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Calculadora de Sal\u00E1rio PJ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 20)(75, "div", 21)(76, "div", 22)(77, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Sal\u00E1rio Base Fixo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NossosProjetosComponent_Template_input_ngModelChange_79_listener($event) {
          return ctx.salaryBasePj = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 22)(81, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Nome do Benef\u00EDcio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NossosProjetosComponent_Template_input_ngModelChange_83_listener($event) {
          return ctx.benefitNamePj = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 22)(85, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Valor do Benef\u00EDcio:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NossosProjetosComponent_Template_input_ngModelChange_87_listener($event) {
          return ctx.benefitValuePj = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NossosProjetosComponent_Template_button_click_88_listener() {
          return ctx.addBenefitPj();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Adicionar Benef\u00EDcio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, NossosProjetosComponent_li_91_Template, 5, 5, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NossosProjetosComponent_Template_button_click_92_listener() {
          return ctx.calculateSalaryPj();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Calcular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 31)(95, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Resultados:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](99, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](102, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](105, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](108, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](111, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](114, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](117, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.salaryBase);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.benefitName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.benefitValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.benefitsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sal\u00E1rio Total: R$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](59, 19, ctx.totalSalary, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Desconto INSS: R$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](62, 22, ctx.inss, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Desconto IRRF: R$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](65, 25, ctx.irrf, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sal\u00E1rio L\u00EDquido: R$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](68, 28, ctx.netSalary, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.salaryBasePj);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.benefitNamePj);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.benefitValuePj);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.benefitsListPj);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sal\u00E1rio Total: R$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](99, 31, ctx.totalSalaryPj, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Desconto Imposto de Renda : R$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](102, 34, ctx.irpj, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Desconto Contribui\u00E7\u00E3o Social sobre o Lucro Liquido: R$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](105, 37, ctx.csll, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Desconto PIS: R$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](108, 40, ctx.pis, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Desconto CONFINS: R$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](111, 43, ctx.confins, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Desconto INSS: R$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](114, 46, ctx.inssPj, "1.2-2"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sal\u00E1rio L\u00EDquido: R$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](117, 49, ctx.netSalaryPj, "1.2-2"), "");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DecimalPipe],
    styles: ["@charset \"UTF-8\";\n.calculator-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n}\n\ninput[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 8px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n\n.results-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 10px;\n  background-color: #f4f4f4;\n  border-radius: 8px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n.calculator-results-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px; \n\n}\n\n.calculator-container[_ngcontent-%COMP%], .results-container[_ngcontent-%COMP%] {\n  flex: 1 1 45%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wYWdlcy9ub3Nzb3MtcHJvamV0b3Mvbm9zc29zLXByb2pldG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQ0U7RUFDRSxtQkFBQTtBQUVKOztBQUNFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQ0U7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDRTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0U7RUFDRSx5QkFBQTtBQUVKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0FBRUo7O0FBQUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUEsRUFBQSwrQkFBQTtBQUdKOztBQUFFOztFQUVFLGFBQUE7QUFHSiIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxjdWxhdG9yLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG4gIH1cclxuICBcclxuICAucmVzdWx0cy1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIC5jYWxjdWxhdG9yLXJlc3VsdHMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDEwcHg7IC8qIEFqdXN0ZSBjb25mb3JtZSBuZWNlc3PDg8KhcmlvICovXHJcbiAgfVxyXG4gIFxyXG4gIC5jYWxjdWxhdG9yLWNvbnRhaW5lcixcclxuICAucmVzdWx0cy1jb250YWluZXIge1xyXG4gICAgZmxleDogMSAxIDQ1JTtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 7666:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/pricing/pricing.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PricingComponent: () => (/* binding */ PricingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class PricingComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function PricingComponent_Factory(t) {
    return new (t || PricingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PricingComponent,
    selectors: [["app-pricing"]],
    decls: 130,
    vars: 0,
    consts: [[1, "page-title-area"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "active"], [1, "page-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "pricing-area", "pt-100", "pb-70"], [1, "section-title"], [1, "row"], [1, "col-lg-4", "col-sm-6"], [1, "single-pricing"], [1, "pricing-top-heading"], [1, "bx", "bx-badge-check"], ["routerLink", "/", 1, "box-btn"], [1, "popular"], [1, "col-lg-4", "col-sm-6", "offset-sm-3", "offset-lg-0"]],
    template: function PricingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pre\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pre\u00E7os");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16)(23, "div", 1)(24, "div", 17)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "What We Offer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Our Pre\u00E7os Plan For You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum suspendisse.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18)(32, "div", 19)(33, "div", 20)(34, "div", 21)(35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Basic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Build A Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "$29");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "/M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul")(44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " 10GB Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " 50GB Bandwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " 10 Free Sub-Domains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " 10GB Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " 50GB Bandwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " 10 Free Sub-Domains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 19)(65, "div", 20)(66, "div", 21)(67, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Standard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Build A Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "$59 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "/M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul")(76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " 80GB Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " 90GB Bandwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " 10 Free Sub-Domains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " 70GB Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " 50GB Bandwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " Unlimited Sub-Domains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "strong", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 25)(99, "div", 20)(100, "div", 21)(101, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Premium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Build A Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "$79 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "sub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "/M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "ul")(110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Unlimited Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Unlimited Bandwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " Unlimited Sub-Domains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Unlimited Storage Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Unlimited Bandwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Unlimited Domains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Get Started");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 4150:
/*!*****************************************************************************!*\
  !*** ./src/app/components/pages/privacy-policy/privacy-policy.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrivacyPolicyComponent: () => (/* binding */ PrivacyPolicyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class PrivacyPolicyComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function PrivacyPolicyComponent_Factory(t) {
    return new (t || PrivacyPolicyComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PrivacyPolicyComponent,
    selectors: [["app-privacy-policy"]],
    decls: 36,
    vars: 0,
    consts: [[1, "page-title-area"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "active"], [1, "page-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "privecy-area", "ptb-100"]],
    template: function PrivacyPolicyComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Termos e Condi\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Termos e Condi\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16)(23, "div", 1)(24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Bem-vindo \u00E0 Pol\u00EDtica de Privacidade da Code Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Pol\u00EDtica de Privacidade da Code Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 2707:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/sign-in/sign-in.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignInComponent: () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);



class SignInComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function SignInComponent_Factory(t) {
    return new (t || SignInComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SignInComponent,
    selectors: [["app-sign-in"]],
    decls: 66,
    vars: 0,
    consts: [[1, "page-title-area"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "active"], [1, "page-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "signup-area", "ptb-100"], [1, "signup-form"], [1, "section-tittle", "text-center"], [1, "row"], [1, "col-lg-4", "col-md-4", "col-sm-12"], ["href", "#", "target", "_blank", 1, "box-btn", "google"], [1, "bx", "bxl-google"], ["href", "#", "target", "_blank", 1, "box-btn", "facebook"], [1, "bx", "bxl-facebook"], ["href", "#", "target", "_blank", 1, "box-btn", "twitter"], [1, "bx", "bxl-twitter"], [1, "col-md-12", "col-sm-12"], [1, "form-group"], ["type", "text", "name", "name", "placeholder", "User Name", 1, "form-control"], ["type", "email", "name", "email", "placeholder", "Email", 1, "form-control"], ["type", "text", "name", "password", "placeholder", "Password", 1, "form-control"], [1, "col-md-12", "col-sm-12", "col-xs-12"], [1, "privecy-txt"], ["type", "checkbox", "id", "chb1"], [1, "col-12", "text-center"], ["type", "submit", 1, "box-btn", "signup-btn"], [1, "al-acc"], ["routerLink", "/sign-up"]],
    template: function SignInComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16)(23, "div", 1)(24, "div", 17)(25, "div", 18)(26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "With your social network");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form")(31, "div", 19)(32, "div", 20)(33, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20)(37, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20)(41, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27)(45, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27)(48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27)(51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 32)(54, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 35)(59, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 35)(62, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Not a Member ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Inscrever-se");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 2211:
/*!***************************************************************!*\
  !*** ./src/app/components/pages/sign-up/sign-up.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignUpComponent: () => (/* binding */ SignUpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);



class SignUpComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function SignUpComponent_Factory(t) {
    return new (t || SignUpComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SignUpComponent,
    selectors: [["app-sign-up"]],
    decls: 74,
    vars: 0,
    consts: [[1, "page-title-area"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "active"], [1, "page-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "signup-area", "ptb-100"], [1, "signup-form"], [1, "section-tittle", "text-center"], [1, "row"], [1, "col-lg-4", "col-md-4", "col-sm-12"], ["href", "#", "target", "_blank", 1, "box-btn", "google"], [1, "bx", "bxl-google-plus"], ["href", "#", "target", "_blank", 1, "box-btn", "facebook"], [1, "bx", "bxl-facebook"], ["href", "#", "target", "_blank", 1, "box-btn", "twitter"], [1, "bx", "bxl-twitter"], [1, "col-md-12", "col-sm-12"], [1, "form-group"], ["type", "text", "name", "name", "placeholder", "First Name", 1, "form-control"], ["type", "text", "name", "name", "placeholder", "Last Name", 1, "form-control"], ["type", "text", "name", "name", "placeholder", "User Name", 1, "form-control"], ["type", "email", "name", "email", "placeholder", "Email", 1, "form-control"], ["type", "text", "name", "password", "placeholder", "Password", 1, "form-control"], [1, "col-md-12", "col-sm-12", "col-xs-12"], [1, "privecy-txt"], ["type", "checkbox", "id", "chb1"], ["routerLink", "/privacy-policy"], [1, "col-12", "text-center"], ["type", "submit", 1, "box-btn", "signup-btn"], [1, "al-acc"], ["routerLink", "/sign-in"]],
    template: function SignUpComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Inscrever-se");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inscrever-se");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16)(23, "div", 1)(24, "div", 17)(25, "div", 18)(26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Inscrever-se");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "With your social network");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "form")(31, "div", 19)(32, "div", 20)(33, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20)(37, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20)(41, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27)(45, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 27)(48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27)(51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27)(54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 27)(57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 34)(60, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Eu concordo com Code Express ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Pol\u00EDtica de Privacidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 38)(67, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Inscrever-se");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 38)(70, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Entrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 6409:
/*!***********************************************************************************!*\
  !*** ./src/app/components/pages/solutions-details/solutions-details.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SolutionsDetailsComponent: () => (/* binding */ SolutionsDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class SolutionsDetailsComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function SolutionsDetailsComponent_Factory(t) {
    return new (t || SolutionsDetailsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SolutionsDetailsComponent,
    selectors: [["app-solutions-details"]],
    decls: 73,
    vars: 0,
    consts: [[1, "page-title-area"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "active"], [1, "page-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "services-details-area", "ptb-100"], [1, "row"], [1, "col-lg-6"], [1, "services-img", "mb"], ["src", "assets/images/solutions-details/1.png", "alt", "Image"], ["src", "assets/images/solutions-details/2.png", "alt", "Image"], [1, "col-12"], [1, "services-details-text"], [1, "scrives-item-2", "mt-4"], [1, "row", "align-items-center"], [1, "col-lg-4"], [1, "services-img", "mb-qc"], ["src", "assets/images/solutions-details/5.png", "alt", "Image"], [1, "col-lg-8"], [1, "scrives-item-3", "mt-4"], [1, "col-lg-6", "col-sm-6"], [1, "social"], [1, "social-link"], ["target", "_blank", "href", "#"], [1, "bx", "bxl-facebook"], [1, "bx", "bxl-twitter"], [1, "bx", "bxl-pinterest-alt"], [1, "bx", "bxl-instagram"], [1, "share"], ["href", "#", "target", "_blank"], [1, "bx", "bx-share-alt"]],
    template: function SolutionsDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Solu\u00E7\u00F5es Detalhes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Solu\u00E7\u00F5es Detalhes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16)(23, "div", 1)(24, "div", 17)(25, "div", 18)(26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18)(29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22)(32, "div", 23)(33, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Gerenciamento de TI\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum not only five centuries, but also the leap into.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a dictionary of over 200 Latin words, combined with a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc generators on the Internet tend to repeat predefined chunks as necessary, making this the first generator dictionary of over 200 Latin words, combined with a.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24)(42, "div", 25)(43, "div", 26)(44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29)(47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Teste de Controle de Qualidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition necessary, making this the first as necessary, making this");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 30)(52, "div", 25)(53, "div", 31)(54, "div", 32)(55, "ul", 33)(56, "li")(57, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li")(60, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li")(63, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li")(66, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 31)(69, "div", 39)(70, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 7083:
/*!*******************************************************************!*\
  !*** ./src/app/components/pages/solutions/solutions.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SolutionsComponent: () => (/* binding */ SolutionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class SolutionsComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function SolutionsComponent_Factory(t) {
    return new (t || SolutionsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SolutionsComponent,
    selectors: [["app-solutions"]],
    decls: 117,
    vars: 0,
    consts: [[1, "page-title-area"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "active"], [1, "page-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "home-service-area", "ptb-100"], [1, "section-title"], [1, "row"], [1, "col-lg-4", "col-sm-6"], [1, "single-service"], [1, "service-img"], ["src", "assets/images/service/s1.png", "alt", "service"], [1, "service-content"], ["routerLink", "/solutions-details", 1, "line-bnt"], ["src", "assets/images/service/s2.png", "alt", "service"], ["src", "assets/images/service/s3.png", "alt", "service"], ["src", "assets/images/service/s4.png", "alt", "service"], ["src", "assets/images/service/s5.png", "alt", "service"], ["src", "assets/images/service/s6.png", "alt", "service"], [1, "col-lg-12"], [1, "page-navigation-area"], ["aria-label", "Page navigation example text-center"], [1, "pagination"], [1, "page-item"], ["routerLink", "/solutions", 1, "page-link", "page-links"], [1, "bx", "bx-chevrons-left"], [1, "page-item", "active"], ["routerLink", "/solutions", 1, "page-link"], [1, "bx", "bx-chevrons-right"]],
    template: function SolutionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Solu\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Solu\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16)(23, "div", 1)(24, "div", 17)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Servi\u00E7os inteligentes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Code Express fornece todos os tipos de solu\u00E7\u00F5es tecnol\u00F3gicas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18)(32, "div", 19)(33, "div", 20)(34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23)(37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Design Visual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19)(44, "div", 20)(45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23)(48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Desenvolvimento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 19)(55, "div", 20)(56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 23)(59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Teste de Controle de Qualidade");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19)(66, "div", 20)(67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 23)(70, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Gerenciamento de TI\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 19)(77, "div", 20)(78, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 23)(81, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "C\u00EDber Seguran\u00E7a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 19)(88, "div", 20)(89, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 23)(92, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Wireless Connectivity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vel sit maxime assumenda. maiores, magnam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 30)(99, "div", 31)(100, "nav", 32)(101, "ul", 33)(102, "li", 34)(103, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "li", 37)(106, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li", 34)(109, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li", 34)(112, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li", 34)(115, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 2813:
/*!*********************************************************!*\
  !*** ./src/app/components/pages/team/team.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeamComponent: () => (/* binding */ TeamComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class TeamComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function TeamComponent_Factory(t) {
    return new (t || TeamComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TeamComponent,
    selectors: [["app-team"]],
    decls: 162,
    vars: 0,
    consts: [[1, "page-title-area"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "active"], [1, "page-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "team-area", "pt-100", "pb-70"], [1, "section-title"], [1, "row"], [1, "col-lg-4", "col-md-6"], [1, "single-team"], [1, "team-img"], ["src", "assets/images/team/g1.jpg", "alt", "team"], [1, "team-content"], [1, "social"], ["href", "#", "target", "_blank"], [1, "bx", "bxl-facebook"], [1, "bx", "bxl-twitter"], [1, "bx", "bxs-envelope"], [1, "bx", "bxl-google-plus"], ["src", "assets/images/team/g3.jpg", "alt", "team"], ["src", "assets/images/team/g2.jpg", "alt", "team"], ["src", "assets/images/team/g5.jpg", "alt", "team"], ["src", "assets/images/team/g4.jpg", "alt", "team"], ["src", "assets/images/team/g6.jpg", "alt", "team"]],
    template: function TeamComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Equipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Equipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16)(23, "div", 1)(24, "div", 17)(25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Pessoas Que Est\u00E3o por Tr\u00E1s das Conquistas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18)(30, "div", 19)(31, "div", 20)(32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23)(35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Evana Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Founder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 24)(40, "li")(41, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li")(44, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li")(47, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li")(50, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19)(53, "div", 20)(54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 23)(57, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Maria Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul", 24)(62, "li")(63, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li")(66, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li")(69, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li")(72, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 19)(75, "div", 20)(76, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 23)(79, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Smith Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "CEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ul", 24)(84, "li")(85, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li")(88, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li")(91, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li")(94, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 19)(97, "div", 20)(98, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 23)(101, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Leo Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Project Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "ul", 24)(106, "li")(107, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li")(110, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li")(113, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li")(116, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 19)(119, "div", 20)(120, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 23)(123, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Jhon Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Marketing Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "ul", 24)(128, "li")(129, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li")(132, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li")(135, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li")(138, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 19)(141, "div", 20)(142, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 23)(145, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Brian Cox");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Agent Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "ul", 24)(150, "li")(151, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li")(154, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "li")(157, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "li")(160, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 3764:
/*!*********************************************************************************!*\
  !*** ./src/app/components/pages/terms-conditions/terms-conditions.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermsConditionsComponent: () => (/* binding */ TermsConditionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class TermsConditionsComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function TermsConditionsComponent_Factory(t) {
    return new (t || TermsConditionsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TermsConditionsComponent,
    selectors: [["app-terms-conditions"]],
    decls: 36,
    vars: 0,
    consts: [[1, "page-title-area"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "active"], [1, "page-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "privecy-area", "ptb-100"]],
    template: function TermsConditionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Termos e Condi\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Termos e Condi\u00E7\u00F5es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 16)(23, "div", 1)(24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Bem-vindo aos Termos e Condi\u00E7\u00F5es da Code Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Termos e Condi\u00E7\u00F5es da Code Express");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 9117:
/*!*************************************************************************!*\
  !*** ./src/app/components/pages/testimonials/testimonials.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestimonialsComponent: () => (/* binding */ TestimonialsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class TestimonialsComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function TestimonialsComponent_Factory(t) {
    return new (t || TestimonialsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TestimonialsComponent,
    selectors: [["app-testimonials"]],
    decls: 198,
    vars: 0,
    consts: [[1, "page-title-area"], [1, "container"], [1, "page-title-content"], ["routerLink", "/"], [1, "active"], [1, "page-shape"], [1, "shape1"], ["src", "assets/images/shape/1.png", "alt", "shape"], [1, "shape3"], ["src", "assets/images/shape/3.png", "alt", "shape"], [1, "shape4"], ["src", "assets/images/shape/4.png", "alt", "shape"], [1, "shape5"], ["src", "assets/images/shape/5.png", "alt", "shape"], [1, "shape6"], ["src", "assets/images/shape/6.png", "alt", "shape"], [1, "testimonials-area", "pt-100", "pb-70"], [1, "section-title"], [1, "row"], [1, "col-lg-6"], [1, "single-testimonials"], [1, "testimonials-head"], [1, "row", "align-items-center"], [1, "col-lg-3", "col-md-3", "col-5"], [1, "testimonials-img"], ["src", "assets/images/testimonilas/t1.jpg", "alt", "testimonials"], [1, "col-lg-9", "col-md-9", "col-7"], [1, "content"], [1, "rate"], [1, "bx", "bxs-star"], [1, "testimonials-foot"], ["src", "assets/images/testimonilas/t2.jpg", "alt", "testimonials"], ["src", "assets/images/testimonilas/t3.jpg", "alt", "testimonials"], ["src", "assets/images/testimonilas/t4.jpg", "alt", "testimonials"], ["src", "assets/images/testimonilas/t5.jpg", "alt", "testimonials"], ["src", "assets/images/testimonilas/t6.jpg", "alt", "testimonials"]],
    template: function TestimonialsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Depoimentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Depoimentos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5)(12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16)(23, "div", 1)(24, "div", 17)(25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "What Our Clients Say");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18)(30, "div", 19)(31, "div", 20)(32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26)(38, "div", 27)(39, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Denial Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Marketer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul", 28)(44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30)(56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 19)(59, "div", 20)(60, "div", 21)(61, "div", 22)(62, "div", 23)(63, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26)(66, "div", 27)(67, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Evana Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Founder");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul", 28)(72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 30)(84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 19)(87, "div", 20)(88, "div", 21)(89, "div", 22)(90, "div", 23)(91, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 26)(94, "div", 27)(95, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Smith Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Web Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "ul", 28)(100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 30)(112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 19)(115, "div", 20)(116, "div", 21)(117, "div", 22)(118, "div", 23)(119, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 26)(122, "div", 27)(123, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Maria Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Founder CEO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "ul", 28)(128, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 30)(140, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 19)(143, "div", 20)(144, "div", 21)(145, "div", 22)(146, "div", 23)(147, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 26)(150, "div", 27)(151, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Dew Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Graphic Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "ul", 28)(156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 30)(168, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 19)(171, "div", 20)(172, "div", 21)(173, "div", 22)(174, "div", 23)(175, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 26)(178, "div", 27)(179, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Keat Smith");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "ul", 28)(184, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 30)(196, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map