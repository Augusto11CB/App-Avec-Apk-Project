import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the SitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-site',
  templateUrl: 'site.html',
})
export class SitePage {

  xurl: string = "https://avecbrasil.com.br/";


  constructor(public navCtrl: NavController, public navParams: NavParams, private inAppBrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SitePage');
  }

  public openWebPage(url:string) {

    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    //Opening a URL and returning an InAppBrowserObject
    const browser = this.inAppBrowser.create(url, '_system',options);


  }
}