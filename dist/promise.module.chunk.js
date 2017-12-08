webpackJsonp(["promise.module"],{

/***/ "../../../../../src/app/promise/add-promise/add-promise.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\r\n    color:red;\r\n}\r\n.row {\r\n    margin-bottom: 10px;\r\n}\r\n.main {\r\n    display: block;\r\n    width: 80%;\r\n    margin: auto;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/promise/add-promise/add-promise.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <form [formGroup]='promise' (ngSubmit)='onSubmit()' class=\"form-horizontal\">\n  <div class=\"grid\">\n    <div class=\"row\">\n      <label for=\"name_id\"class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">Name:</label>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">          \n        <input type=\"text\" id=\"name_id\" formControlName='name' class=\"form-control\" #spy>\n      </div>\n    </div>\n    <div class=\"row\">\n      <label for=\"description_id\" class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">Description:</label>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">          \n        <input type=\"text\" id=\"description_id\" formControlName='description' class=\"form-control\" #spytwo>\n      </div>\n    </div>\n      <div class=\"row\">\n        <label for=\"promisees_id\" class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">Promisees:</label>\n      </div>\n      <div formArrayName='promisees' *ngFor=\"let item of promise.get('promisees')['controls']; let i = index\" class=\"row\">\n        <div [formGroupName] = 'i'>\n          <div class=\"col-sm-6\">\n            <input type=\"text\" id=\"promisees_id\" formControlName='name' class=\"form-control\" #spythree />\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n          <button (click)=\"addPromiseeField()\" class=\"btn btn-info btn-md\" type=\"button\">Add a promisee</button>\n          <button (click)=\"removePromiseeField()\" class=\"btn btn-danger btn-md\" type=\"button\">Remove a promisee</button>\n          <button [disabled]='!promise.valid' class=\"btn btn-success btn-md\" type='submit'>\n            Make the promise\n          </button>\n          <div *ngIf='(promise.get(\"name\").errors?.required && promise.get(\"name\").touched) || (promise.get(\"description\").errors?.required && promise.get(\"description\").touched)'>\n              <p>Please fill in all fields.</p>\n          </div>\n        </div>      \n      </div>\n  </div>\n</form>\n</div>\n<!-- \nREMOVE LATER: values:{{promise.value | json }} <br />\n<strong>is valid:</strong> {{promise.valid}}<br />\n<strong>spy:</strong> {{spy.className}} <br />\n<strong>errors:</strong> {{promise.get(\"description\").errors | json}} {{promise.get(\"promisees\").errors | json}}-->"

/***/ }),

/***/ "../../../../../src/app/promise/add-promise/add-promise.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPromiseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__promise_model__ = __webpack_require__("../../../../../src/app/promise/promise.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promisee_promisee_model__ = __webpack_require__("../../../../../src/app/promise/promisee/promisee.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__promise_data_service__ = __webpack_require__("../../../../../src/app/promise/promise-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddPromiseComponent = (function () {
    function AddPromiseComponent(fb, _promiseDataService) {
        this.fb = fb;
        this._promiseDataService = _promiseDataService;
    }
    AddPromiseComponent.prototype.ngOnInit = function () {
        this.promise = this.fb.group({
            name: this.fb.control(null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required]),
            description: this.fb.control(null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(4)]),
            promisees: this.fb.array([this.createPromisees()])
        });
    };
    AddPromiseComponent.prototype.addPromiseeField = function () {
        this.promisees.push(this.createPromisees());
    };
    AddPromiseComponent.prototype.removePromiseeField = function () {
        if (this.promisees.length != 1)
            this.promisees.removeAt(this.promisees.length - 1);
    };
    AddPromiseComponent.prototype.onSubmit = function () {
        var _this = this;
        var addedPromise = new __WEBPACK_IMPORTED_MODULE_1__promise_model__["a" /* Promise */](this.promise.value.description, this.promise.value.name);
        for (var _i = 0, _a = this.promise.value.promisees; _i < _a.length; _i++) {
            var promisee = _a[_i];
            if (promisee.name != undefined)
                addedPromise.addPromisee(new __WEBPACK_IMPORTED_MODULE_2__promisee_promisee_model__["a" /* Promisee */](promisee.name));
        }
        this._promiseDataService.addNewPromise(addedPromise).subscribe(function (item) {
            var promisee = addedPromise.promisees.map(function (p) { return _this._promiseDataService.addPromiseeToPromise(p, item); });
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].forkJoin.apply(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"], promisee).subscribe(function (promisees) {
                for (var _i = 0, promisees_1 = promisees; _i < promisees_1.length; _i++) {
                    var u = promisees_1[_i];
                    item.addPromisee(u);
                }
                //return this.promises.push(item)
                return item;
            });
        });
        alert("Promise " + this.promise.value.name + " made.");
        this.promise.reset();
    };
    AddPromiseComponent.prototype.createPromisees = function () {
        return this.fb.group({
            name: this.fb.control(null, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required)
        });
    };
    Object.defineProperty(AddPromiseComponent.prototype, "promisees", {
        get: function () {
            return this.promise.get('promisees');
        },
        enumerable: true,
        configurable: true
    });
    return AddPromiseComponent;
}());
AddPromiseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-add-promise',
        template: __webpack_require__("../../../../../src/app/promise/add-promise/add-promise.component.html"),
        styles: [__webpack_require__("../../../../../src/app/promise/add-promise/add-promise.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__promise_data_service__["a" /* PromiseDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__promise_data_service__["a" /* PromiseDataService */]) === "function" && _b || Object])
], AddPromiseComponent);

var _a, _b;
//# sourceMappingURL=add-promise.component.js.map

/***/ }),

/***/ "../../../../../src/app/promise/promise-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromiseDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__promise_model__ = __webpack_require__("../../../../../src/app/promise/promise.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promisee_promisee_model__ = __webpack_require__("../../../../../src/app/promise/promisee/promisee.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__promisebundle_model__ = __webpack_require__("../../../../../src/app/promise/promisebundle.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_authentication_service__ = __webpack_require__("../../../../../src/app/user/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PromiseDataService = (function () {
    function PromiseDataService(http, auth) {
        this.http = http;
        this.auth = auth;
        this._appUrl = '/API';
        this._promises = new Array();
    }
    Object.defineProperty(PromiseDataService.prototype, "promiseBundleID", {
        get: function () {
            return JSON.parse(localStorage.getItem('currentUser')).promiseBundle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PromiseDataService.prototype, "promises", {
        get: function () {
            return this.http.get(this._appUrl + "/promises", { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
                .map(function (response) { return response.json().map(function (item) { return __WEBPACK_IMPORTED_MODULE_1__promise_model__["a" /* Promise */].fromJSON(item); }); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PromiseDataService.prototype, "promisesByUser", {
        get: function () {
            return this.http.get(this._appUrl + "/promisebundles/" + this.promiseBundleID + "/promises", { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
                .map(function (response) {
                return response.json().map(function (item) { return __WEBPACK_IMPORTED_MODULE_3__promisebundle_model__["a" /* PromiseBundle */].fromJSON(item); });
            });
        },
        enumerable: true,
        configurable: true
    });
    PromiseDataService.prototype.getPromiseBundle = function () {
        return this.http.get(this._appUrl + "/promisebundle/" + this.promiseBundleID, { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) }).map(function (response) { return response.json(); }).map(function (item) { return __WEBPACK_IMPORTED_MODULE_3__promisebundle_model__["a" /* PromiseBundle */].fromJSON(item); });
    };
    PromiseDataService.prototype.getPromise = function (id) {
        return this.http.get(this._appUrl + "/promise/" + id, { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) }).map(function (response) { return response.json(); }).map(function (item) { return __WEBPACK_IMPORTED_MODULE_1__promise_model__["a" /* Promise */].fromJSON(item); });
    };
    PromiseDataService.prototype.addPromiseeToPromise = function (promisee, promise) {
        var theUrl = this._appUrl + "/promise/" + promise.id;
        return this.http.post(theUrl + "/promisees", promisee)
            .map(function (res) { return res.json(); })
            .map(function (item) { return __WEBPACK_IMPORTED_MODULE_2__promisee_promisee_model__["a" /* Promisee */].fromJSON(item); });
    };
    PromiseDataService.prototype.addNewPromise = function (prom) {
        var theUrl = this._appUrl + "/promisebundles/" + this.promiseBundleID + "/promises";
        return this.http.post(theUrl, prom, { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) })
            .map(function (res) { return res.json(); }).map(function (item) {
            return __WEBPACK_IMPORTED_MODULE_1__promise_model__["a" /* Promise */].fromJSON(item);
        });
    };
    PromiseDataService.prototype.removePromise = function (prom) {
        return this.http.delete(this._appUrl + "/promisebundle/" + this.promiseBundleID + "/promise/" + prom._id, { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ Authorization: "Bearer " + this.auth.token }) }).map(function (res) { return res.json(); }).map(function (item) { return __WEBPACK_IMPORTED_MODULE_3__promisebundle_model__["a" /* PromiseBundle */].fromJSON(item); });
    };
    return PromiseDataService;
}());
PromiseDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__user_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], PromiseDataService);

var _a, _b;
//# sourceMappingURL=promise-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/promise/promise-detail/promise-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\r\n    margin-bottom: 10px;\r\n}\r\n.main {\r\n    display: block;\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\ndiv {\r\n    margin-left: 10%;\r\n}\r\nh1, h5 {\r\n    text-decoration: underline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/promise/promise-detail/promise-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <h1>\n    {{promise.name}}\n  </h1>\n  <h3>\n    {{promise.description}}\n  </h3>\n  <h5>\n    Promised to: \n  </h5>\n  <div *ngFor=\"let localPromisee of promise.promisees\">\n    <app-promisee [promisee]=\"localPromisee\"></app-promisee>\n  </div>\n</div>\n<!--h1>\n  Edit promise: {{promise.name}}\n</h1>\n<div class=\"main\">\n<form [formGroup]='promiseFG' (ngSubmit)='onSubmit()' class=\"form-horizontal\">\n  <div class=\"grid\">\n    <div class=\"row\">\n      <label for=\"name_id\"class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">Name:</label>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">          \n        <input type=\"text\" id=\"name_id\" formControlName='name' class=\"form-control\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <label for=\"description_id\" class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">Description:</label>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">          \n        <input type=\"text\" id=\"description_id\" formControlName='description' class=\"form-control\">\n      </div>\n    </div>\n      <div class=\"row\">\n        <label for=\"promisees_id\" class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">Promisees:</label>\n      </div>\n      <div formArrayName='promiseesFA' *ngFor='let item of promiseFG.get(\"promiseesFA\").controls; let i = index' class=\"row\">\n        <div [formGroupName] = 'i'>\n          <div class=\"col-sm-6\">\n            <input type=\"text\" id=\"promisees_id\" formControlName='name' class=\"form-control\"/>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n          <button (click)=\"addPromiseeField()\" class=\"btn btn-info btn-md\" type=\"button\">Add a promisee</button>\n          <button (click)=\"removePromiseeField()\" class=\"btn btn-danger btn-md\" type=\"button\">Remove a promisee</button>\n          <button [disabled]='!promiseFG.valid' class=\"btn btn-success btn-md\" type='submit'>\n            Save the promise\n          </button>\n          <div *ngIf='(promiseFG.get(\"name\").errors?.required && promiseFG.get(\"name\").touched) || (promiseFG.get(\"description\").errors?.required && promiseFG.get(\"description\").touched)'>\n              <p class=\"alert\">Please fill in all fields.</p>\n          </div>\n        </div>      \n      </div>\n  </div>\n</form>\n</div>-->"

/***/ }),

/***/ "../../../../../src/app/promise/promise-detail/promise-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromiseDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promise_data_service__ = __webpack_require__("../../../../../src/app/promise/promise-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PromiseDetailComponent = (function () {
    function PromiseDetailComponent(route, fb, _promiseDataService) {
        this.route = route;
        this.fb = fb;
        this._promiseDataService = _promiseDataService;
    }
    PromiseDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (item) {
            return _this._promise = item['promise'];
        });
        this.promiseFG = this.fb.group({
            name: this.fb.control(this._promise.name, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]),
            description: this.fb.control(this._promise.description, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(4)]),
            promiseesFA: this.fb.array([])
        });
        for (var _i = 0, _a = this.promise.promisees; _i < _a.length; _i++) {
            var promisee = _a[_i];
            if (promisee.name != undefined) {
                this.promiseesFA.push(this.fb.group({
                    name: this.fb.control(promisee.name, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required)
                }));
            }
        }
    };
    Object.defineProperty(PromiseDetailComponent.prototype, "promise", {
        get: function () {
            return this._promise;
        },
        enumerable: true,
        configurable: true
    });
    PromiseDetailComponent.prototype.addPromiseeField = function () {
        if (this.promiseesFA.length < this._promise.promisees.length) {
            var promiseeName = this._promise.promisees[this.promiseesFA.length].name;
            if (promiseeName != undefined) {
                this.promiseesFA.push(this.fb.group({
                    name: this.fb.control(promiseeName, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required)
                }));
            }
        }
        else {
            this.promiseesFA.push(this.createPromiseesFA());
        }
    };
    PromiseDetailComponent.prototype.removePromiseeField = function () {
        if (this.promiseesFA.length != 1)
            this.promiseesFA.removeAt(this.promiseesFA.length - 1);
    };
    /*   onSubmit() {
        this.promise.description = this.promiseFG.value.description;
        this.promise.name = this.promiseFG.value.name;
        this.promise.promisees = this.promise.promisees.filter(promee => this.promiseesFA.value.map(item => item.name).filter(item => this.promise.promisees.map(prom => prom.name).includes(item)).includes(promee.name));
        let addedPromisees = [];
        let newPromisee : Promisee;
        for (const promiseeName of this.promiseesFA.value.map(item => item.name).filter(item => !this.promise.promisees.map(prom => prom.name).includes(item))) {
          if (promiseeName != undefined)
            newPromisee = new Promisee(promiseeName);
            addedPromisees.push(newPromisee);
            this.promise.promisees.push(newPromisee);
        }
        console.log(this.promise.toJSON());
         this._promiseDataService.savePromise(this.promise).subscribe(item => {
          const promisee = this.promise.promisees.map(p => this._promiseDataService.addPromiseeToPromise(p, item));
          Observable.forkJoin(...promisee).subscribe(
            (promisees: Promisee[]) => {
              for (const u of promisees) {
                item.addPromisee(u);
              }
              return item;
            });
          }
        );
        //alert(`Promise ${this.promiseFG.value.description} made.`);
        //this.promiseFG.reset();
      } */
    PromiseDetailComponent.prototype.createPromiseesFA = function () {
        return this.fb.group({
            name: this.fb.control(null, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required)
        });
    };
    Object.defineProperty(PromiseDetailComponent.prototype, "promiseesFA", {
        get: function () {
            return this.promiseFG.get('promiseesFA');
        },
        enumerable: true,
        configurable: true
    });
    return PromiseDetailComponent;
}());
PromiseDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-promise-detail',
        template: __webpack_require__("../../../../../src/app/promise/promise-detail/promise-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/promise/promise-detail/promise-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__promise_data_service__["a" /* PromiseDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__promise_data_service__["a" /* PromiseDataService */]) === "function" && _c || Object])
], PromiseDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=promise-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/promise/promise-list/promise-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\r\n    color:orange;\r\n}\r\nul {\r\n    display: block;\r\n    width: 80%;\r\n    margin: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/promise/promise-list/promise-list.component.html":
/***/ (function(module, exports) {

module.exports = "  <ul class=\"list-group\">\n    <li *ngFor=\"let localPromise of promises\" class=\"list-group-item\">\n      <app-promise [promise]=\"localPromise\" (toDeletePromise)='removePromise($event)'></app-promise>\n    </li>\n    <a *ngIf=\"promises?.length == 0\" routerLinkActive='active' \n    routerLink=\"/promise/add\" >You have not made any promises yet. Click here to make one.</a>\n  </ul>\n"

/***/ }),

/***/ "../../../../../src/app/promise/promise-list/promise-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromiseListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__promise_data_service__ = __webpack_require__("../../../../../src/app/promise/promise-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PromiseListComponent = (function () {
    function PromiseListComponent(_promiseDataService) {
        this._promiseDataService = _promiseDataService;
    }
    PromiseListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._promiseDataService.getPromiseBundle().subscribe(function (item) { return _this.promises = item.promises; });
    };
    PromiseListComponent.prototype.removePromise = function (promise) {
        var _this = this;
        this._promiseDataService.removePromise(promise).subscribe(function (item) { return _this.promises = item.promises; });
    };
    return PromiseListComponent;
}());
PromiseListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-promise-list',
        template: __webpack_require__("../../../../../src/app/promise/promise-list/promise-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/promise/promise-list/promise-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__promise_data_service__["a" /* PromiseDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__promise_data_service__["a" /* PromiseDataService */]) === "function" && _a || Object])
], PromiseListComponent);

var _a;
//# sourceMappingURL=promise-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/promise/promise-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromiseResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__promise_data_service__ = __webpack_require__("../../../../../src/app/promise/promise-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PromiseResolver = (function () {
    function PromiseResolver(promiseService) {
        this.promiseService = promiseService;
    }
    PromiseResolver.prototype.resolve = function (route, state) {
        return this.promiseService.getPromise(route.params['id']);
    };
    return PromiseResolver;
}());
PromiseResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__promise_data_service__["a" /* PromiseDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__promise_data_service__["a" /* PromiseDataService */]) === "function" && _a || Object])
], PromiseResolver);

var _a;
//# sourceMappingURL=promise-resolver.service.js.map

/***/ }),

/***/ "../../../../../src/app/promise/promise.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Promise; });
var Promise = (function () {
    function Promise(description, name, promisees, id) {
        this.id = id || undefined;
        this._description = description || 'default description';
        this._name = name || 'default promisename';
        this._promisees = promisees || [];
    }
    Object.defineProperty(Promise.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Promise.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (description) {
            this._description = description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Promise.prototype, "promisees", {
        get: function () {
            return this._promisees;
        },
        set: function (promisees) {
            this._promisees = promisees;
        },
        enumerable: true,
        configurable: true
    });
    Promise.prototype.addPromisee = function (promisee) {
        this._promisees.push(promisee);
    };
    Promise.prototype.toJSON = function () {
        return {
            _id: this.id,
            name: this._name,
            description: this._description,
            promisees: this._promisees
        };
    };
    Promise.fromJSON = function (json) {
        var prom = new Promise(json.description, json.name, json.promisees);
        prom.id = json._id;
        return prom;
    };
    return Promise;
}());

//# sourceMappingURL=promise.model.js.map

/***/ }),

/***/ "../../../../../src/app/promise/promise.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromiseModule", function() { return PromiseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__promise_promise_component__ = __webpack_require__("../../../../../src/app/promise/promise/promise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_promise_add_promise_component__ = __webpack_require__("../../../../../src/app/promise/add-promise/add-promise.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__promisee_promisee_component__ = __webpack_require__("../../../../../src/app/promise/promisee/promisee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__promise_data_service__ = __webpack_require__("../../../../../src/app/promise/promise-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__promise_list_promise_list_component__ = __webpack_require__("../../../../../src/app/promise/promise-list/promise-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__promise_detail_promise_detail_component__ = __webpack_require__("../../../../../src/app/promise/promise-detail/promise-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__promise_resolver_service__ = __webpack_require__("../../../../../src/app/promise/promise-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: 'list', component: __WEBPACK_IMPORTED_MODULE_8__promise_list_promise_list_component__["a" /* PromiseListComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_4__add_promise_add_promise_component__["a" /* AddPromiseComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_10__promise_detail_promise_detail_component__["a" /* PromiseDetailComponent */], resolve: { promise: __WEBPACK_IMPORTED_MODULE_11__promise_resolver_service__["a" /* PromiseResolver */] } }
];
var PromiseModule = (function () {
    function PromiseModule() {
    }
    return PromiseModule;
}());
PromiseModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__promise_promise_component__["a" /* PromiseComponent */],
            __WEBPACK_IMPORTED_MODULE_4__add_promise_add_promise_component__["a" /* AddPromiseComponent */],
            __WEBPACK_IMPORTED_MODULE_6__promisee_promisee_component__["a" /* PromiseeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__promise_list_promise_list_component__["a" /* PromiseListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__promise_detail_promise_detail_component__["a" /* PromiseDetailComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["d" /* RouterModule */].forChild(routes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__promise_data_service__["a" /* PromiseDataService */], __WEBPACK_IMPORTED_MODULE_11__promise_resolver_service__["a" /* PromiseResolver */]],
    })
], PromiseModule);

//# sourceMappingURL=promise.module.js.map

/***/ }),

/***/ "../../../../../src/app/promise/promise/promise.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span:hover {\r\n    color: gray;\r\n}\r\nspan {\r\n    color: black;\r\n}\r\nh3 {\r\n    font-weight: bold;\r\n}\r\nli {\r\n    width: 30%;\r\n    margin-left: 10%;\r\n    padding: 0.4%;\r\n    overflow: auto;\r\n    background-color: whitesmoke;\r\n    border-left: 5px solid gray;\r\n    border-radius: 0px;\r\n}\r\nh3 > a {\r\n    color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/promise/promise/promise.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid grid\">\n  <div class=\"row\">\n    <h3>\n      <a [routerLink]=\"['/promise', promise._id]\">{{promise.name}}</a>\n    </h3>\n    <!--h4>\n    {{promise.description}}\n    </h4>\n    Promised to\n    <div class=\"container\">\n      <ul class=\"list-group\">\n        <li *ngFor=\"let localPromisee of promise.promisees\" class=\"list-group-item list-group-item-secondary\">\n          <app-promisee [promisee]=\"localPromisee\"></app-promisee>\n        </li>\n      </ul>\n    </div>-->\n      <div class=\"pull-right\">\n        <a [routerLink]=\"['/promise', promise._id]\"><span class=\"\tglyphicon glyphicon-eye-open\"></span></a>\n        <span (click)=\"deletePromise()\" class=\"\tglyphicon glyphicon-trash\"></span>\n      </div>\n </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/promise/promise/promise.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromiseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__promise_model__ = __webpack_require__("../../../../../src/app/promise/promise.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promise_data_service__ = __webpack_require__("../../../../../src/app/promise/promise-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PromiseComponent = (function () {
    function PromiseComponent(_promiseDataService) {
        this._promiseDataService = _promiseDataService;
        this.toDeletePromise = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    PromiseComponent.prototype.ngOnInit = function () {
    };
    PromiseComponent.prototype.deletePromise = function () {
        if (confirm("Are you sure you wish to delete this promise?"))
            this.toDeletePromise.emit(this.promise);
    };
    return PromiseComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__promise_model__["a" /* Promise */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__promise_model__["a" /* Promise */]) === "function" && _a || Object)
], PromiseComponent.prototype, "promise", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], PromiseComponent.prototype, "toDeletePromise", void 0);
PromiseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-promise',
        template: __webpack_require__("../../../../../src/app/promise/promise/promise.component.html"),
        styles: [__webpack_require__("../../../../../src/app/promise/promise/promise.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__promise_data_service__["a" /* PromiseDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__promise_data_service__["a" /* PromiseDataService */]) === "function" && _b || Object])
], PromiseComponent);

var _a, _b;
//# sourceMappingURL=promise.component.js.map

/***/ }),

/***/ "../../../../../src/app/promise/promisebundle.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromiseBundle; });
var PromiseBundle = (function () {
    function PromiseBundle(promises) {
        this._promises = [];
        this._promises = promises;
    }
    Object.defineProperty(PromiseBundle.prototype, "promises", {
        get: function () {
            return this._promises;
        },
        enumerable: true,
        configurable: true
    });
    PromiseBundle.prototype.addPromise = function (promise) {
        this._promises.push(promise);
    };
    PromiseBundle.prototype.toJSON = function () {
        return {
            _id: this._id,
            promisees: this._promises
        };
    };
    PromiseBundle.fromJSON = function (json) {
        var prom = new PromiseBundle(json.promises);
        prom._id = json._id;
        return prom;
    };
    return PromiseBundle;
}());

//# sourceMappingURL=promisebundle.model.js.map

/***/ }),

/***/ "../../../../../src/app/promise/promisee/promisee.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/promise/promisee/promisee.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  {{promisee.name}}\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/promise/promisee/promisee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromiseeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__promisee_model__ = __webpack_require__("../../../../../src/app/promise/promisee/promisee.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PromiseeComponent = (function () {
    function PromiseeComponent() {
    }
    PromiseeComponent.prototype.ngOnInit = function () {
    };
    return PromiseeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__promisee_model__["a" /* Promisee */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__promisee_model__["a" /* Promisee */]) === "function" && _a || Object)
], PromiseeComponent.prototype, "promisee", void 0);
PromiseeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-promisee',
        template: __webpack_require__("../../../../../src/app/promise/promisee/promisee.component.html"),
        styles: [__webpack_require__("../../../../../src/app/promise/promisee/promisee.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PromiseeComponent);

var _a;
//# sourceMappingURL=promisee.component.js.map

/***/ }),

/***/ "../../../../../src/app/promise/promisee/promisee.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Promisee; });
var Promisee = (function () {
    function Promisee(name) {
        this._name = name;
    }
    Object.defineProperty(Promisee.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Promisee.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Promisee.fromJSON = function (json) {
        var u = new Promisee(json.name);
        u._id = json._id;
        return u;
    };
    Promisee.prototype.toJSON = function () {
        return {
            _id: this._id,
            name: this._name
        };
    };
    return Promisee;
}());

//# sourceMappingURL=promisee.model.js.map

/***/ })

});
//# sourceMappingURL=promise.module.chunk.js.map