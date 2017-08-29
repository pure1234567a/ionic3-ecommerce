import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { SearchModel } from "./search.model";

/*
  Generated class for the SearchServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SearchServiceProvider {

  constructor(public http: Http) {
    console.log('Hello SearchServiceProvider Provider');
  }
  getSearch():Promise<SearchModel>{
    return this.http.get('../../assets/example_data/search.json')
    .toPromise()
    .then(resp => resp.json() as SearchModel)
    .catch(this.handleError);
   }
   handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error)
  }

}
