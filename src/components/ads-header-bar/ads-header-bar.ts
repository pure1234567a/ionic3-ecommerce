import { Component, Input } from '@angular/core';

/**
 * Generated class for the AdsHeaderBarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'ads-header-bar',
  templateUrl: 'ads-header-bar.html'
})
export class AdsHeaderBarComponent {
  @Input() images: Array<string> = [];

  constructor() {
    console.log('Hello AdsHeaderBarComponent Component');
  }

}
