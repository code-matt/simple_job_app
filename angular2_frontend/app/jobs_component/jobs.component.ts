import {Component} from '@angular/core'
import {JobsService} from '../common/jobs.service'
import {HTTP_PROVIDERS} from '@angular/http'

@Component({
  selector: 'jobs',
  templateUrl: 'app/jobs_component/jobs.component.html',
  styleUrls: ['app/jobs_component/jobs.component.css'],
  providers: [JobsService, HTTP_PROVIDERS]

})
export class JobsComponent{
  jobs;
  constructor(private _jobsService: JobsService){
    this._jobsService.getJobs()
      .subscribe(jobs => this.jobs = jobs.jobs)
  }
}
