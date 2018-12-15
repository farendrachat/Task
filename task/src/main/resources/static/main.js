(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routing, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_sell_product_sell_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-sell/product-sell.component */ "./src/app/product-sell/product-sell.component.ts");
/* harmony import */ var _message_add_message_add_message_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message/add-message/add-message.component */ "./src/app/message/add-message/add-message.component.ts");
/* harmony import */ var _message_list_message_list_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message/list-message/list-message.component */ "./src/app/message/list-message/list-message.component.ts");
/* harmony import */ var _negotiation_negotiation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./negotiation/negotiation.component */ "./src/app/negotiation/negotiation.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _self_self_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./self/self.component */ "./src/app/self/self.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/add-user/add-user.component */ "./src/app/user/add-user/add-user.component.ts");
/* harmony import */ var _user_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/list-user/list-user.component */ "./src/app/user/list-user/list-user.component.ts");
/* harmony import */ var _user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/edit-user/edit-user.component */ "./src/app/user/edit-user/edit-user.component.ts");
/* harmony import */ var _user_user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/user/user.component */ "./src/app/user/user/user.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: 'buy', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"] },
    { path: 'sell', component: _product_sell_product_sell_component__WEBPACK_IMPORTED_MODULE_3__["ProductSellComponent"] },
    { path: 'addMessage', component: _message_add_message_add_message_component__WEBPACK_IMPORTED_MODULE_4__["AddMessageComponent"] },
    { path: 'negotiate', component: _negotiation_negotiation_component__WEBPACK_IMPORTED_MODULE_6__["NegotiationComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'user', component: _user_user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"], children: [
            { path: 'add-user', component: _user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_10__["AddUserComponent"] },
            { path: 'edit-user', component: _user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__["EditUserComponent"] },
            { path: 'list-user', component: _user_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_11__["ListUserComponent"] },
        ] },
    { path: 'self', component: _self_self_component__WEBPACK_IMPORTED_MODULE_8__["SelfComponent"], children: [
            { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"] },
            { path: 'status', component: _status_status_component__WEBPACK_IMPORTED_MODULE_9__["StatusComponent"] },
            { path: 'listMessage', component: _message_list_message_list_message_component__WEBPACK_IMPORTED_MODULE_5__["ListMessageComponent"] },
        ] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_14__["NgModule"])({
            imports: [
                // RouterModule.forRoot(appRoutes, {useHash: true})
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n            <ul class=\"nav nav-tabs\">\n                <li role=\"admin\" routerLinkActive=\"active\" ><a routerLink=\"/login\">Home</a></li>\n                <!-- \n                    \n                 -->\n                <li role=\"admin\" routerLinkActive=\"active\"><a routerLink=\"/sell\">SELL</a></li>\n                <li role=\"admin\" routerLinkActive=\"active\"><a routerLink=\"/addMessage\">MESSAGE</a></li>\n                <!-- <li role=\"admin\" routerLinkActive=\"active\"><a routerLink=\"/listMessage\">MESSAGES</a></li> -->\n                <li role=\"admin\" routerLinkActive=\"active\"><a routerLink=\"/negotiate\">NEGOTIATION</a></li>\n                <li role=\"admin\" routerLinkActive=\"active\"><a routerLink=\"/login\">LOGIN</a></li>\n                <!-- <li role=\"admin\" routerLinkActive=\"active\"><a routerLink=\"/user\">USER</a></li> -->\n                <li role=\"admin\" routerLinkActive=\"active\"><a [routerLink]=\"['/user']\">USER</a></li>\n                \n                <!-- <li role=\"admin\" routerLinkActive=\"active\"><a routerLink=\"/edit-user\">Edit User</a></li>\n                <li role=\"admin\" routerLinkActive=\"active\"><a routerLink=\"/list-user\">List User</a></li> -->\n                <!-- <li role=\"admin\" routerLinkActive=\"active\"><a routerLink=\"/cart\">CART</a></li>\n                <li role=\"admin\" routerLinkActive=\"active\"><a routerLink=\"/status\">STATUS</a></li> -->\n                <li role=\"admin\" routerLinkActive=\"active\" routerLinkActiveOptions=\"{exact:true}\"><a routerLink=\"/buy\">BUY</a></li>\n                <li role=\"admin\" routerLinkActive=\"active\"><a routerLink=\"/self\">SELF</a></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/list-user/list-user.component */ "./src/app/user/list-user/list-user.component.ts");
/* harmony import */ var _user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/add-user/add-user.component */ "./src/app/user/add-user/add-user.component.ts");
/* harmony import */ var _user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/edit-user/edit-user.component */ "./src/app/user/edit-user/edit-user.component.ts");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _negotiation_negotiation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./negotiation/negotiation.component */ "./src/app/negotiation/negotiation.component.ts");
/* harmony import */ var _product_sell_product_sell_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./product-sell/product-sell.component */ "./src/app/product-sell/product-sell.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _message_add_message_add_message_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./message/add-message/add-message.component */ "./src/app/message/add-message/add-message.component.ts");
/* harmony import */ var _message_list_message_list_message_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./message/list-message/list-message.component */ "./src/app/message/list-message/list-message.component.ts");
/* harmony import */ var _user_user_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/user/user.component */ "./src/app/user/user/user.component.ts");
/* harmony import */ var _self_self_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./self/self.component */ "./src/app/self/self.component.ts");
/* harmony import */ var _service_product_sell_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service/product-sell.service */ "./src/app/service/product-sell.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { TasksComponent } from './tasks/tasks.component';
//import { TasksAddComponent } from './tasks/tasks-add/tasks-add.component';
//import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
//import { TaskService } from './tasks/task.service';




















//import { AddUserAdministrationComponent } from './add-user-administration/add-user-administration.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _user_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_7__["ListUserComponent"],
                _user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"],
                _user_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_9__["EditUserComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_13__["ProductListComponent"],
                _status_status_component__WEBPACK_IMPORTED_MODULE_14__["StatusComponent"],
                _negotiation_negotiation_component__WEBPACK_IMPORTED_MODULE_15__["NegotiationComponent"],
                _product_sell_product_sell_component__WEBPACK_IMPORTED_MODULE_16__["ProductSellComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_17__["CartComponent"],
                _message_add_message_add_message_component__WEBPACK_IMPORTED_MODULE_18__["AddMessageComponent"],
                _message_list_message_list_message_component__WEBPACK_IMPORTED_MODULE_19__["ListMessageComponent"],
                _user_user_user_component__WEBPACK_IMPORTED_MODULE_20__["UserComponent"],
                _self_self_component__WEBPACK_IMPORTED_MODULE_21__["SelfComponent"]
                //   AddUserAdministrationComponent
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]
            ],
            providers: [_service_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"], _service_product_sell_service__WEBPACK_IMPORTED_MODULE_22__["ProductSellService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  cart works!\n</p>\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <a href=\"#\" class=\"navbar-brand\">Recipe Book</a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li routerLinkActive=\"active\"><a routerLink=\"/login\">Login</a></li>\r\n        <li routerLinkActive=\"active\"><a routerLink=\"/add-user\">Add User</a></li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"dropdown\" appDropdown>\r\n          <a style=\"cursor: pointer;\" class=\"dropdown-toggle\" role=\"button\">Manage <span class=\"caret\"></span></a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a style=\"cursor: pointer;\">Save Data</a></li>\r\n            <li><a style=\"cursor: pointer;\">Fetch Data</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html")
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-6 col-md-offset-2\">\n    <h1>Login </h1>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"email\">Email address:</label>\n        <input type=\"email\" class=\"form-control\" formControlName=\"email\" id=\"email\">\n        <div *ngIf=\"submitted && loginForm.controls.email.errors\" class=\"error\">\n          <div *ngIf=\"loginForm.controls.email.errors.required\">Email is required</div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"pwd\">Password:</label>\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"pwd\">\n        <div *ngIf=\"submitted && loginForm.controls.password.errors\" class=\"error\">\n          <div *ngIf=\"loginForm.controls.password.errors.required\">Password is required</div>\n        </div>\n      </div>\n      <button class=\"btn btn-default\">Login</button>\n      <div *ngIf=\"invalidLogin\" class=\"error\">\n        <div>Invalid credentials.</div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {AuthenticationService} from "../service/auth.service";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.invalidLogin = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        if (this.loginForm.controls.email.value == 'dhiraj@gmail.com' && this.loginForm.controls.password.value == 'password') {
            this.router.navigate(['list-user']);
        }
        else {
            this.invalidLogin = true;
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/message/add-message/add-message.component.css":
/*!***************************************************************!*\
  !*** ./src/app/message/add-message/add-message.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/message/add-message/add-message.component.html":
/*!****************************************************************!*\
  !*** ./src/app/message/add-message/add-message.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  add-message works!\n</p>\n"

/***/ }),

/***/ "./src/app/message/add-message/add-message.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/message/add-message/add-message.component.ts ***!
  \**************************************************************/
/*! exports provided: AddMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMessageComponent", function() { return AddMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddMessageComponent = /** @class */ (function () {
    function AddMessageComponent() {
    }
    AddMessageComponent.prototype.ngOnInit = function () {
    };
    AddMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-message',
            template: __webpack_require__(/*! ./add-message.component.html */ "./src/app/message/add-message/add-message.component.html"),
            styles: [__webpack_require__(/*! ./add-message.component.css */ "./src/app/message/add-message/add-message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddMessageComponent);
    return AddMessageComponent;
}());



/***/ }),

/***/ "./src/app/message/list-message/list-message.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/message/list-message/list-message.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/message/list-message/list-message.component.html":
/*!******************************************************************!*\
  !*** ./src/app/message/list-message/list-message.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  list-message works!\n</p>\n"

/***/ }),

/***/ "./src/app/message/list-message/list-message.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/message/list-message/list-message.component.ts ***!
  \****************************************************************/
/*! exports provided: ListMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMessageComponent", function() { return ListMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListMessageComponent = /** @class */ (function () {
    function ListMessageComponent() {
    }
    ListMessageComponent.prototype.ngOnInit = function () {
    };
    ListMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-message',
            template: __webpack_require__(/*! ./list-message.component.html */ "./src/app/message/list-message/list-message.component.html"),
            styles: [__webpack_require__(/*! ./list-message.component.css */ "./src/app/message/list-message/list-message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListMessageComponent);
    return ListMessageComponent;
}());



/***/ }),

/***/ "./src/app/negotiation/negotiation.component.css":
/*!*******************************************************!*\
  !*** ./src/app/negotiation/negotiation.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/negotiation/negotiation.component.html":
/*!********************************************************!*\
  !*** ./src/app/negotiation/negotiation.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  negotiation works!\n</p>\n"

/***/ }),

/***/ "./src/app/negotiation/negotiation.component.ts":
/*!******************************************************!*\
  !*** ./src/app/negotiation/negotiation.component.ts ***!
  \******************************************************/
/*! exports provided: NegotiationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NegotiationComponent", function() { return NegotiationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NegotiationComponent = /** @class */ (function () {
    function NegotiationComponent() {
    }
    NegotiationComponent.prototype.ngOnInit = function () {
    };
    NegotiationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-negotiation',
            template: __webpack_require__(/*! ./negotiation.component.html */ "./src/app/negotiation/negotiation.component.html"),
            styles: [__webpack_require__(/*! ./negotiation.component.css */ "./src/app/negotiation/negotiation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NegotiationComponent);
    return NegotiationComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  product-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/product-sell/product-sell.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-sell/product-sell.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-sell/product-sell.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-sell/product-sell.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div>\n<h1>File Upload</h1>\n<table>\n  <tr>\n  <td><input type=\"file\" (change)=\"onFileSelected($event)\"></td>\n<td><button type=\"button\" (click)=\"save()\">Save</button></td>\n</tr>\n</table>\n</div>\n\n\n\n<div class=\"col-md-12\">\n  <h2 class=\"text-center\">Add Product</h2>\n  <form [formGroup]=\"addProductForm\" (ngSubmit)=\"onSubmit()\">    \n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4\" for=\"product\">Product Category:</label>\n      <input formControlName=\"product\" placeholder=\"Product Category\" name=\"product\" class=\"form-control\" class=\"col-md-8\" id=\"product\" >\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4\" for=\"name\">Name of Product:</label>\n      <input formControlName=\"name\" placeholder=\"Like coco powder\" name=\"name\" class=\"form-control\" class=\"col-sm-8\" id=\"name\">\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4\" for=\"category\">Category :</label>\n      <input formControlName=\"category\" placeholder=\"Category\" name=\"category\" class=\"form-control\" class=\"col-sm-8\" id=\"category\">\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4\" for=\"pic1\">Attach pic1 :</label>\n      <input formControlName=\"pic1\" placeholder=\"pic1 address\" name=\"pic1\" class=\"form-control\" class=\"col-sm-8\" id=\"pic1\">\n    </div>\n    \n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4\" for=\"pic2\">Attach Pic2 :</label>\n      <input formControlName=\"pic2\" placeholder=\"pic2\" name=\"pic2\" class=\"form-control\" class=\"col-sm-8\" id=\"pic2\">\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4\" for=\"pic3\">Attach Pic 3 :</label>\n      <input formControlName=\"pic3\" placeholder=\"pic3\" name=\"pic3\" class=\"form-control\" class=\"col-sm-8\" id=\"pic3\">\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4\" for=\"pic4\">Attach Pic 4 :</label>\n      <input formControlName=\"pic4\" placeholder=\"pic4\" name=\"pic4\" class=\"form-control\" class=\"col-sm-8\" id=\"pic4\">\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-12\">Product Location :</label>\n      <label class=\"col-sm-4\" for=\"state\">State :</label>\n      <input formControlName=\"state\" placeholder=\"State\" name=\"state\" class=\"form-control\" class=\"col-sm-8\" id=\"state\">\n      <label class=\"col-sm-4\" for=\"city\">City:</label>\n      <input formControlName=\"city\" placeholder=\"City\" name=\"city\" class=\"form-control\" class=\"col-sm-8\" id=\"city\">\n    </div>    \n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4\" for=\"brand\">Brand:</label>\n      <input formControlName=\"brand\" placeholder=\"brand\" name=\"brand\" class=\"form-control\" class=\"col-sm-8\" id=\"brand\">\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4\" for=\"datemanufacture\">Date of Manufacture:</label>\n      <input formControlName=\"datemanufacture\" placeholder=\"date of product manufacture\" name=\"datemanufacture\" class=\"form-control\" class=\"col-sm-8\" id=\"datemanufacture\">\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4\" for=\"dateexpire\">Product Expiry Date:</label>\n      <input formControlName=\"dateexpire\" placeholder=\"Date Expire\" name=\"dateexpire\" class=\"form-control\" class=\"col-sm-8\" id=\"dateexpire\">\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4\" for=\"packsize\">Pack Size (KG/LT/NO):</label>\n      <input formControlName=\"packsize\" placeholder=\"packsize\" name=\"packsize\" class=\"form-control\" class=\"col-sm-8\" id=\"packsize\">\n    </div>    \n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4\" for=\"availableqty\">Available Quantity :</label> \n      <input formControlName=\"availableqty\" placeholder=\"Available Quantity\" name=\"availableqty\" class=\"form-control\" class=\"col-sm-8\" id=\"availableqty\">\n    </div>\n\n    <div class=\"form-group row\">\n        <label class=\"col-sm-4\" for=\"qtyexpressed\">Quantity Expressed Unit :</label> \n        <input formControlName=\"qtyexpressed\" placeholder=\"Quantity Expressed Unit\" name=\"qtyexpressed\" class=\"form-control\" class=\"col-sm-8\" id=\"qtyexpressed\">\n      </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4\" for=\"unitprice\">Price per (KG/LT/NO) :</label>\n      <input formControlName=\"unitprice\" placeholder=\"Price Per Unit\" name=\"unitprice\" class=\"form-control\" class=\"col-sm-8\" id=\"unitprice\">\n    </div>\n    \n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4\" for=\"coa\">Attach Certificate of Analysis :</label>\n      <input formControlName=\"coa\" placeholder=\"Certificate of Analysis\" name=\"coa\" class=\"form-control\" class=\"col-sm-8\" id=\"coa\">\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4\" for=\"specificationsheet\">Attach Specification Sheet :</label>\n      <input formControlName=\"specificationsheet\" placeholder=\"Specification Sheet\" name=\"specificationsheet\" class=\"form-control\" class=\"col-sm-8\" id=\"specificationsheet\">\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-sm-4\" for=\"msds\">Attach Material Safety Data Sheet :</label>\n      <input formControlName=\"msds\" placeholder=\"msds\" name=\"msds\" class=\"form-control\" class=\"col-sm-8\" id=\"msds\">\n    </div>\n    <div class=\"form-group row\">\n        <label class=\"col-sm-4\" for=\"approved\">Product Approved for Sell :</label>\n        <input formControlName=\"approved\" placeholder=\"Certificate of Analysis\" name=\"approved\" class=\"form-control\" class=\"col-sm-8\" id=\"approved\">\n     </div>\n\n    <div class=\"form-group\">       \n        <input type=\"hidden\" formControlName=\"updateon\" name=\"updateOn\" class=\"form-control\" id=\"updateOn\">\n        <input type=\"hidden\" formControlName=\"loadedby\" name=\"loadedby\" class=\"form-control\" id=\"loadedby\">\n        <input type=\"hidden\" formControlName=\"approvedby\" name=\"approvedBy\" class=\"form-control\" id=\"approvedBy\">\n     </div>\n\n    <button class=\"btn btn-success\">Save</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/product-sell/product-sell.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-sell/product-sell.component.ts ***!
  \********************************************************/
/*! exports provided: ProductSellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSellComponent", function() { return ProductSellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_product_sell_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/product-sell.service */ "./src/app/service/product-sell.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductSellComponent = /** @class */ (function () {
    function ProductSellComponent(http, productSellService, formBuilder, router) {
        this.http = http;
        this.productSellService = productSellService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.selectedFile = null;
    }
    ProductSellComponent.prototype.ngOnInit = function () {
        this.addProductForm = this.formBuilder.group({
            offerId: [],
            sellerId: [],
            product: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            availableqty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            qtyexpressed: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            unitprice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pic1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pic2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pic3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pic4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            brand: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            datemanufacture: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dateexpire: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            packsize: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            coa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            specificationsheet: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            msds: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            approved: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            updateon: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            approvedby: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            loadedby: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    ProductSellComponent.prototype.onSubmit = function () {
        this.productSellService.saveProduct(this.addProductForm.value)
            .subscribe(function (data) {
            console.log("data from addProductForm is :" + data);
            alert("Data saved successfully");
        });
    };
    ProductSellComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        this.selectedFile = event.target.files[0];
        alert("file is noted for save");
    };
    ProductSellComponent.prototype.save = function () {
        // this.productSellService.onUpload(this.selectedFile);
    };
    ProductSellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-sell',
            template: __webpack_require__(/*! ./product-sell.component.html */ "./src/app/product-sell/product-sell.component.html"),
            styles: [__webpack_require__(/*! ./product-sell.component.css */ "./src/app/product-sell/product-sell.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _service_product_sell_service__WEBPACK_IMPORTED_MODULE_2__["ProductSellService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProductSellComponent);
    return ProductSellComponent;
}());



/***/ }),

/***/ "./src/app/self/self.component.css":
/*!*****************************************!*\
  !*** ./src/app/self/self.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/self/self.component.html":
/*!******************************************!*\
  !*** ./src/app/self/self.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  self works!\n  <li role=\"admin\" routerLinkActive=\"active\"><a routerLink=\"cart\">CART</a></li>\n  <li role=\"admin\" routerLinkActive=\"active\"><a routerLink=\"status\">STATUS</a></li>\n  <li role=\"admin\" routerLinkActive=\"active\"><a routerLink=\"listMessage\">MESSAGES</a></li>\n  <router-outlet></router-outlet>\n</p>\n"

/***/ }),

/***/ "./src/app/self/self.component.ts":
/*!****************************************!*\
  !*** ./src/app/self/self.component.ts ***!
  \****************************************/
/*! exports provided: SelfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfComponent", function() { return SelfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelfComponent = /** @class */ (function () {
    function SelfComponent() {
    }
    SelfComponent.prototype.ngOnInit = function () {
    };
    SelfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-self',
            template: __webpack_require__(/*! ./self.component.html */ "./src/app/self/self.component.html"),
            styles: [__webpack_require__(/*! ./self.component.css */ "./src/app/self/self.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SelfComponent);
    return SelfComponent;
}());



/***/ }),

/***/ "./src/app/service/product-sell.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/product-sell.service.ts ***!
  \*************************************************/
/*! exports provided: ProductSellService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSellService", function() { return ProductSellService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductSellService = /** @class */ (function () {
    function ProductSellService(http) {
        this.http = http;
    }
    // baseUrl: string = 'http://localhost:9000/api/product';
    //baseUrl: string = 'http://localhost:8080/';
    ProductSellService.prototype.saveProduct = function (product) {
        console.log(product);
        //return this.http.post(this.baseUrl+"/api/tasks/save",user).map(response=>response.json());
        //return this.http.post(this.baseUrl+"/save",product);
        return this.http.post("/api/product/save", product);
    };
    ProductSellService.prototype.savePic = function (selectedFile) {
        // const fd = new FormData();
        // fd.append("image",selectedFile,selectedFile.name);
        // this.http.post(this.baseUrl+"/save",fd)
        // .subscribe(
        //     res=>{console.log(res);}
        // )
    };
    ProductSellService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductSellService);
    return ProductSellService;
}());



/***/ }),

/***/ "./src/app/service/user.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Component } from "@angular/core";
// import {Observable} from 'rxjs';
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:9000/api/userdtls';
    }
    //baseUrl: string = 'http://localhost:8080/';
    UserService.prototype.getUsers = function () {
        return this.http.get(this.baseUrl);
    };
    UserService.prototype.getUserById = function (id) {
        return this.http.get(this.baseUrl + '/' + id);
    };
    UserService.prototype.createUser = function (user) {
        console.log(user);
        //return this.http.post(this.baseUrl+"/api/tasks/save",user).map(response=>response.json());
        return this.http.post(this.baseUrl + "/save", user);
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.put(this.baseUrl + '/' + user.id, user);
    };
    UserService.prototype.deleteUser = function (userDtlsId) {
        return this.http.delete(this.baseUrl + "/delete" + '/' + userDtlsId);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/status/status.component.css":
/*!*********************************************!*\
  !*** ./src/app/status/status.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/status/status.component.html":
/*!**********************************************!*\
  !*** ./src/app/status/status.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  status works!\n</p>\n"

/***/ }),

/***/ "./src/app/status/status.component.ts":
/*!********************************************!*\
  !*** ./src/app/status/status.component.ts ***!
  \********************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatusComponent = /** @class */ (function () {
    function StatusComponent() {
    }
    StatusComponent.prototype.ngOnInit = function () {
    };
    StatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.css */ "./src/app/status/status.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/app/user/add-user/add-user.component.css":
/*!******************************************************!*\
  !*** ./src/app/user/add-user/add-user.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/add-user/add-user.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/add-user/add-user.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h2 class=\"text-center\">Add User</h2>\n  <form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">    \n\n    <div class=\"form-group\">\n      <label for=\"fname\">First Name:</label>\n      <input formControlName=\"fname\" placeholder=\"First Name\" name=\"fname\" class=\"form-control\" id=\"fname\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"mname\">Middle Name:</label>\n      <input formControlName=\"mname\" placeholder=\"Middle Name\" name=\"mname\" class=\"form-control\" id=\"mname\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"lname\">Last Name:</label>\n      <input formControlName=\"lname\" placeholder=\"Last name\" name=\"lname\" class=\"form-control\" id=\"lname\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"designation\">Designation:</label>\n      <input formControlName=\"designation\" placeholder=\"Designation\" name=\"designation\" class=\"form-control\" id=\"designation\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"phone\">Contact No:</label>\n      <input formControlName=\"phone\" placeholder=\"Contact No\" name=\"phone\" class=\"form-control\" id=\"phone\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email address:</label>\n      <input type=\"email\" formControlName=\"email\" placeholder=\"Email address\" name=\"email\" class=\"form-control\" id=\"email\">\n    </div>\n    \n\n    <div class=\"form-group\">\n      <label for=\"company\">Company:</label>\n      <input formControlName=\"company\" placeholder=\"Company\" name=\"company\" class=\"form-control\" id=\"company\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"faxNo\">Fax No:</label>\n      <input type=\"faxNo\" formControlName=\"faxNo\" placeholder=\"faxNo\" name=\"faxNo\" class=\"form-control\" id=\"faxNo\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"address1\">Address 1:</label>\n      <input formControlName=\"address1\" placeholder=\"Address1\" name=\"address1\" class=\"form-control\" id=\"address1\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"address2\">Address 2:</label>\n      <input formControlName=\"address2\" placeholder=\"Address 2\" name=\"address2\" class=\"form-control\" id=\"address2\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"city\">City:</label>\n      <input formControlName=\"city\" placeholder=\"city\" name=\"city\" class=\"form-control\" id=\"city\">\n    </div>\n    \n\n    <div class=\"form-group\">\n      <label for=\"state\">State:</label>\n      <input formControlName=\"state\" placeholder=\"state\" name=\"state\" class=\"form-control\" id=\"state\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"pinCode\">Pin Code:</label>\n      <input formControlName=\"pinCode\" placeholder=\"pinCode\" name=\"pinCode\" class=\"form-control\" id=\"pinCode\">\n    </div>\n    <button class=\"btn btn-success\">Save</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/user/add-user/add-user.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/add-user/add-user.component.ts ***!
  \*****************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {first} from "rxjs/operators";

var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            id: [],
            fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            mname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            designation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            faxNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pinCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    AddUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.createUser(this.addForm.value)
            .subscribe(function (data) {
            console.log("data from addForm is :" + data);
            _this.router.navigateByUrl('/user/list-user');
        });
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/user/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/user/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/user/edit-user/edit-user.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/edit-user/edit-user.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/edit-user/edit-user.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/edit-user/edit-user.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h2 class=\"text-center\">Edit User</h2>\n  <form [formGroup]=\"editForm\" >\n    <div class=\"form-group\">\n      <label for=\"email\">Email address:</label>\n      <input type=\"email\" formControlName=\"email\" placeholder=\"Email\" name=\"email\" class=\"form-control\" id=\"email\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"firstName\">First Name:</label>\n      <input formControlName=\"firstName\" placeholder=\"First Name\" name=\"firstName\" class=\"form-control\" id=\"firstName\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"lastName\">Last Name:</label>\n      <input formControlName=\"lastName\" placeholder=\"Last name\" name=\"lastName\" class=\"form-control\" id=\"lastName\">\n    </div>\n\n    <button class=\"btn btn-success\">Update</button>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/user/edit-user/edit-user.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/edit-user/edit-user.component.ts ***!
  \*******************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var userId = localStorage.getItem("editUserId");
        if (!userId) {
            alert("Invalid action.");
            this.router.navigate(['list-user']);
            return;
        }
        this.editForm = this.formBuilder.group({
            id: [],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // this.userService.getUserById(+userId)
        //   .subscribe( data => {
        //     this.editForm.setValue(data);
        //   });
    };
    EditUserComponent.prototype.onSubmit = function () {
        //   this.userService.updateUser(this.editForm.value)
        //     .pipe(first())
        //     .subscribe(
        //       data => {
        //         this.router.navigate(['list-user']);
        //       },
        //       error => {
        //         alert(error);
        //       });
    };
    EditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/user/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.css */ "./src/app/user/edit-user/edit-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/user/list-user/list-user.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/list-user/list-user.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/list-user/list-user.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/list-user/list-user.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col-md-6\"> -->   \n <div class=\"row\" align=\"left\">\n  <h2> User Details</h2>\n  <button class=\"btn btn-danger\" (click)=\"addUser()\"> Add User</button>\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th class=\"hidden\">Id</th>\n      <th>First Name</th>\n      <th>Middle Name</th>\n      <th>Last Name</th>\n      <th>Designation</th>\n      <th>Phone Number</th>\n      <th>E-Mail</th>\n      <th>Company</th>\n      <th>Fax No</th>\n      <th>Address1</th>\n      <th>Address2</th>\n      <th>City</th>\n      <th>State</th>\n      <th>Pincode</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let user of users\">\n      <td class=\"hidden\">{{user.userDtlId}}</td>\n      <td>{{user.username}}</td>\n      <td>{{user.password}}</td>\n      <td>{{user.fname}}</td>\n      <td>{{user.mname}}</td>\n      <td>{{user.lname}}</td>\n      <td>{{user.designation}}</td>\n      <td>{{user.phone}}</td>\n      <td>{{user.email}}</td>\n      <td>{{user.company}}</td>\n      <td>{{user.faxNo}}</td>\n      <td>{{user.address1}}</td>\n      <td>{{user.address2}}</td>\n      <td>{{user.city}}</td>\n      <td>{{user.state}}</td>\n      <td>{{user.pinCode}}</td>\n      <td><button class=\"btn btn-danger\" (click)=\"deleteUser(user)\"> Delete</button>\n        <!-- <button class=\"btn btn-danger\" (click)=\"editUser(user)\" style=\"margin-left: 20px;\"> Edit</button> -->\n      </td>\n    </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/user/list-user/list-user.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/list-user/list-user.component.ts ***!
  \*******************************************************/
/*! exports provided: ListUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUserComponent", function() { return ListUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/user.service */ "./src/app/service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListUserComponent = /** @class */ (function () {
    function ListUserComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    ListUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (data) {
            _this.users = data;
        });
    };
    ListUserComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.userService.deleteUser(user.userDtlId)
            .subscribe(function (data) {
            _this.users = _this.users.filter(function (u) { return u !== user; });
        });
    };
    ;
    ListUserComponent.prototype.editUser = function (user) {
        localStorage.removeItem("editUserId");
        localStorage.setItem("editUserId", user.id.toString());
        this.router.navigate(['edit-user']);
    };
    ;
    ListUserComponent.prototype.addUser = function () {
        this.router.navigate(['add-user']);
    };
    ;
    ListUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'list-user',
            template: __webpack_require__(/*! ./list-user.component.html */ "./src/app/user/list-user/list-user.component.html"),
            styles: [__webpack_require__(/*! ./list-user.component.css */ "./src/app/user/list-user/list-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ListUserComponent);
    return ListUserComponent;
}());



/***/ }),

/***/ "./src/app/user/user/user.component.css":
/*!**********************************************!*\
  !*** ./src/app/user/user/user.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user/user.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/user/user.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <label>hello</label>\n  <li role=\"admin\" routerLinkActive=\"active\"><a routerLink=\"/user/edit-user\">Edit User</a></li>\n  <li role=\"admin\" routerLinkActive=\"active\"><a routerLink=\"/user/list-user\">List User</a></li>\n  <li role=\"admin\" routerLinkActive=\"active\"><a routerLink=\"/user/add-user\">Add User</a></li>\n  <router-outlet></router-outlet>\n</p>\n"

/***/ }),

/***/ "./src/app/user/user/user.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/user/user.component.ts ***!
  \*********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\sourceCode\TODOApplication\Task\src\main\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map