import {Component} from '@angular/core'
import {ControlGroup, Control, Validators} from '@angular/common';

@Component({
  selector: 'addnew',
  templateUrl: 'app/addjob_component/addjob.component.html'
})
export class AddJobComponent {
  form = new ControlGroup({
    name: new Control('',Validators.required),
    description: new Control('',Validators.required)
  });

}
