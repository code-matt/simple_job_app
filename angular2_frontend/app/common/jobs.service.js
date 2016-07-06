System.register(['@angular/http', '@angular/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var JobsService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            JobsService = (function () {
                function JobsService(_http) {
                    this._http = _http;
                }
                JobsService.prototype.getJobs = function () {
                    return this._http.get("http://localhost:8000/jobs")
                        .map(function (res) { return res.json(); });
                };
                JobsService.prototype.postJob = function (data) {
                    var body = JSON.stringify(data);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers, method: "post" });
                    return this._http.post("http://localhost:8000/jobs", body, options)
                        .map(function (res) { return res.json(); });
                };
                JobsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], JobsService);
                return JobsService;
            }());
            exports_1("JobsService", JobsService);
        }
    }
});
//# sourceMappingURL=jobs.service.js.map