import {Component} from '@angular/core';
import {Route, ROUTER_DIRECTIVES} from '@angular/router';

import {AddJobComponent} from './addjob_component/addjob.component';
import {JobsComponent} from './jobs_component/jobs.component'

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/app.component.html'
})
export class AppComponent { }
