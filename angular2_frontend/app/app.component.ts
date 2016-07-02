import {Component} from '@angular/core';
import {RouteConfig, RouterOutlet, RouterLink} from '@angular/router-deprecated'

import {NavbarComponent} from './navbar_component/navbar.component';
import {AddJobComponent} from './addjob_component/addjob.component';
import {JobsComponent} from './jobs_component/jobs.component'

@RouteConfig([
  {path: '/jobs', name: 'Jobs', component: JobsComponent, useAsDefault: true},
  {path: '/new', name: 'Add', component: AddJobComponent},
  {path: '/*other', name: 'Other', redirectTo: ['Jobs']}
])
@Component({
    selector: 'my-app',
    directives: [NavbarComponent, RouterOutlet, RouterLink],
    templateUrl: 'app/app.component.html'
})
export class AppComponent { }
