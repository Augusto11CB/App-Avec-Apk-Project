import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myArray = [
    {
      "code": 200, "data": {
        "gallery": [
          { "id": 11677, "salao_id": 66, "foto": "vip-20171220163516.jpg", "descricao": null, "url": null, "ordem": 0, "datacad": "2017-12-20 18:35:16", "UA": "2017-12-20 19:26:07", "responsavel": "mateus.andrade@avecbrasil.com.br", "responsavel_ua": "mateus.andrade@avecbrasil.com.br" },
          { "id": 11678, "salao_id": 66, "foto": "vip-20171220172554.jpeg", "descricao": null, "url": null, "ordem": 2, "datacad": "2017-12-20 19:25:54", "UA": "2017-12-20 19:26:07", "responsavel": "mateus.andrade@avecbrasil.com.br", "responsavel_ua": "mateus.andrade@avecbrasil.com.br" },
          { "id": 11679, "salao_id": 66, "foto": "vip-20171220172603.jpg", "descricao": null, "url": null, "ordem": 2, "datacad": "2017-12-20 19:26:03", "UA": "2017-12-20 19:26:05", "responsavel": "mateus.andrade@avecbrasil.com.br", "responsavel_ua": "mateus.andrade@avecbrasil.com.br" },
          { "id": 11734, "salao_id": 66, "foto": "vip-20171227115930.jpg", "descricao": null, "url": null, "ordem": 1, "datacad": "2017-12-27 13:59:31", "UA": "2017-12-27 13:59:31", "responsavel": "victor.sorroche@avecbrasil.com.br", "responsavel_ua": "victor.sorroche@avecbrasil.com.br" }
        ]
      }
    }
  ];

  myArray2 = this.myArray[0];

  myArray3 = this.myArray2.data;

  myArray4 = this.myArray3.gallery;

  result = [];

  imgurl = "http://static.salaovip.com.br/saloes/vip/galeria/originais/";

  constructor(public navCtrl: NavController,private inAppBrowser: InAppBrowser) {
    this.toMakePhotos();

  }

  public openWebPage2(url:string) {

    const options: InAppBrowserOptions = {
      zoom: 'no'
    }

    //Opening a URL and returning an InAppBrowserObject
    const browser = this.inAppBrowser.create(url, '_system', options);


  }

  i = 0;
  myString = "";
  public toMakePhotos() {
    for (this.i = 0; this.i < this.myArray4.length; this.i++) {
      this.myString = this.myArray4[this.i].foto;
      this.result.push(
        "" + this.imgurl + this.myString
      );
    }

  }


}