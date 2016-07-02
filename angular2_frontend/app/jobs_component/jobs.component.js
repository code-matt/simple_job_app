System.register(['@angular/core', '../common/jobs.service', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, jobs_service_1, http_1;
    var JobsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (jobs_service_1_1) {
                jobs_service_1 = jobs_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            JobsComponent = (function () {
                function JobsComponent(_jobsService) {
                    var _this = this;
                    this._jobsService = _jobsService;
                    this._jobsService.getJobs()
                        .subscribe(function (jobs) { return _this.jobs = jobs.jobs; });
                }
                JobsComponent = __decorate([
                    core_1.Component({
                        selector: 'jobs',
                        template: "\n  <ul>\n  <li *ngFor=\"let job of jobs; let i = index\">\n    {{job.name}}\n    {{job.description}}\n    {{job.wage}}\n  </li>\n  </ul>\n  ",
                        providers: [jobs_service_1.JobsService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [jobs_service_1.JobsService])
                ], JobsComponent);
                return JobsComponent;
            }());
            exports_1("JobsComponent", JobsComponent);
        }
    }
});
//# sourceMappingURL=jobs.component.js.map