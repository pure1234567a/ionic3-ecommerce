import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { FavoriteModel } from "./favorite.model";

/*
  Generated class for the FavoriteServiceTsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FavoriteServiceProvider {

  constructor(public http: Http) {
    console.log('Hello FavoriteServiceProvider Provider');
  }
  getFavorite():Promise<FavoriteModel>{
    return this.http.get('../../assets/example_data/favorite.json')
    .toPromise()
    .then(resp => resp.json() as FavoriteModel)
    .catch(this.handleError);
   }
   handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error)
  }
}
