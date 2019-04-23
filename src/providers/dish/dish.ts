import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dish } from '../../shared/dish';
import { Observable } from 'rxjs/Observable';
import { baseURL } from '../../shared/baseurl';
//import { ProcessHttpmsgProvider } from '../process-httpmsg/process-httpmsg';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

/*
  Generated class for the DishProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DishProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DishProvider constructor');
  }

  getDishes(): Observable<Dish[]> {
    return this.http.get<Dish[]>({baseURL} + 'dishes');
  }

  getDish(id: number): Observable<Dish> {
    return  this.http.get<Dish>({baseURL} + 'dishes/'+ id)
            .map(res => res[0]);
  }

  getFeaturedDish(): Observable<Dish> {
    return this.http.get<Dish>(baseURL + 'dishes?featured=true')
            .map(res => res[0]);
  }

}
