import {Component} from '@angular/core'
import {JobsService} from '../common/jobs.service'
import {HTTP_PROVIDERS} from '@angular/http'

@Component({
  selector: 'jobs',
  template: `
  <ul>
  <li *ngFor="let job of jobs; let i = index">
    {{i}} {{job.name}}
  </li>
  </ul>
  `,
  providers: [JobsService, HTTP_PROVIDERS]

})
export class JobsComponent{
  jobs;
  constructor(private _jobsService: JobsService){
    this._jobsService.getJobs()
      .subscribe(jobs => this.jobs = jobs.jobs)
  }
}
