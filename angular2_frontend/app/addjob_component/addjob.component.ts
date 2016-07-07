import {Component} from '@angular/core'
import {ControlGroup, Control, Validators} from '@angular/common';
import {JobsService} from '../common/jobs.service'
import {HTTP_PROVIDERS} from '@angular/http'

@Component({
  selector: 'addnew',
  templateUrl: 'app/addjob_component/addjob.component.html',
  providers: [JobsService, HTTP_PROVIDERS],
  styleUrls: ['app/addjob_component/addjob.component.css']
})
export class AddJobComponent {

  errors = {}

  constructor(private _jobsService: JobsService){

  }

  form = new ControlGroup({
    name: new Control('',Validators.required),
    description: new Control('',Validators.required),
    wage: new Control('0.00',Validators.required)
  });

  postJob(data){
    console.log(data);
    this._jobsService.postJob(data)
      .subscribe(res => console.log(res),
        err => {
          this.errors = JSON.parse(err._body)
          console.log(this.errors)
        })
  }

}
