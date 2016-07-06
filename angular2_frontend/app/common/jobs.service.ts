import {Http, Headers, RequestOptions} from '@angular/http'
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

  postJob(data){

    let body = JSON.stringify(data);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers, method: "post" });
    return this._http.post("http://localhost:8000/jobs", body, options)
      .map(res => res.json())
  }

}
