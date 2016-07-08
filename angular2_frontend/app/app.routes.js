System.register(['@angular/router', './jobs_component/jobs.component', './addjob_component/addjob.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, jobs_component_1, addjob_component_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (jobs_component_1_1) {
                jobs_component_1 = jobs_component_1_1;
            },
            function (addjob_component_1_1) {
                addjob_component_1 = addjob_component_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: '', redirectTo: 'jobs' },
                { path: 'jobs', component: jobs_component_1.JobsComponent },
                { path: 'add', component: addjob_component_1.AddJobComponent }
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map