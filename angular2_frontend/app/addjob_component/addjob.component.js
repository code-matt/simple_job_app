System.register(['@angular/core', '@angular/common', '../common/jobs.service', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, common_1, jobs_service_1, http_1;
    var AddJobComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (jobs_service_1_1) {
                jobs_service_1 = jobs_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AddJobComponent = (function () {
                function AddJobComponent(_jobsService) {
                    this._jobsService = _jobsService;
                    this.errors = {};
                    this.form = new common_1.ControlGroup({
                        name: new common_1.Control('', common_1.Validators.required),
                        description: new common_1.Control('', common_1.Validators.required)
                    });
                }
                AddJobComponent.prototype.postJob = function (data) {
                    var _this = this;
                    console.log(data);
                    this._jobsService.postJob(data)
                        .subscribe(function (res) { return console.log(res); }, function (err) {
                        _this.errors = JSON.parse(err._body);
                        console.log(_this.errors);
                    });
                };
                AddJobComponent = __decorate([
                    core_1.Component({
                        selector: 'addnew',
                        templateUrl: 'app/addjob_component/addjob.component.html',
                        providers: [jobs_service_1.JobsService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [jobs_service_1.JobsService])
                ], AddJobComponent);
                return AddJobComponent;
            }());
            exports_1("AddJobComponent", AddJobComponent);
        }
    }
});
//# sourceMappingURL=addjob.component.js.map