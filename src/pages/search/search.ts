import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchServiceProvider } from "./search.service";
import { SearchModel } from "./search.model";

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  searchlist:SearchModel = new SearchModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, public searchServiceProvider:SearchServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    this.getSearchData();
  }
  getSearchData() {
    this.searchServiceProvider.getSearch().then((data) => {
      this.searchlist = data;
      console.log(data);
    }, (err) => {
      console.error(err);
    });

  }

}
