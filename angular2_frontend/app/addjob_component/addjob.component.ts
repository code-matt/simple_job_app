import {Component} from '@angular/core'
import {ControlGroup, Control, Validators} from '@angular/common';
import {JobsService} from '../common/jobs.service'
import {HTTP_PROVIDERS} from '@angular/http'

@Component({
  selector: 'addnew',
  templateUrl: 'app/addjob_component/addjob.component.html',
  providers: [JobsService, HTTP_PROVIDERS]
})
export class AddJobComponent {

  constructor(private _jobsService: JobsService){

  }

  form = new ControlGroup({
    name: new Control('',Validators.required),
    description: new Control('',Validators.required)
  });

  postJob(data){
    console.log(data);
    this._jobsService.postJob(data)
      .subscribe(res => console.log(res))
  }

}
