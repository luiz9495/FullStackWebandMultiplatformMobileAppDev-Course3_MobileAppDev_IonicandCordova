import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leader } from '../../shared/leader';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../../shared/baseurl';
//import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the LeaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LeaderProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LeaderProvider constructor');
  }

  getLeaders(): Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leaders');
  }

  getLeader(id: number): Observable<Leader> {
    return  this.http.get<Leader>(baseURL + 'leaders/'+ id);
  }

  getFeaturedLeader(): Observable<Leader> {
    return this.http.get<Leader>(baseURL + 'leaders?featured=true')
      .map(res => res[0]);

  }
}
