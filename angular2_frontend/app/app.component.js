System.register(['@angular/core', '@angular/router-deprecated', './navbar_component/navbar.component', './addjob_component/addjob.component', './jobs_component/jobs.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, navbar_component_1, addjob_component_1, jobs_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (addjob_component_1_1) {
                addjob_component_1 = addjob_component_1_1;
            },
            function (jobs_component_1_1) {
                jobs_component_1 = jobs_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_deprecated_1.RouteConfig([
                        { path: '/jobs', name: 'Jobs', component: jobs_component_1.JobsComponent, useAsDefault: true },
                        { path: '/new', name: 'Add', component: addjob_component_1.AddJobComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Jobs'] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        directives: [navbar_component_1.NavbarComponent, router_deprecated_1.RouterOutlet, router_deprecated_1.RouterLink],
                        templateUrl: 'app/app.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map