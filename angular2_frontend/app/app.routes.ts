import { provideRouter, RouterConfig } from '@angular/router';
import {JobsComponent} from './jobs_component/jobs.component';
import {AddJobComponent} from './addjob_component/addjob.component';

export const routes: RouterConfig = [
  { path: '', redirectTo: 'jobs' },
  { path: 'jobs', component: JobsComponent },
  { path: 'add', component: AddJobComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
