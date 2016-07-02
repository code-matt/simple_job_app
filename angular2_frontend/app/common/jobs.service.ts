import {Http} from '@angular/http'
import {Injectable} from '@angular/core'
import 'rxjs/add/operator/map'

@Injectable()
export class JobsService {
  constructor(private _http: Http){

  }

  getJobs(){
    return this._http.get("http://localhost:8000/jobs")
      .map(res => res.json())
  }

}
