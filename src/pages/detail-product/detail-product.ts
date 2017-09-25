import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-detail-product',
  templateUrl: 'detail-product.html',
})
export class DetailProductPage {

	product :any={};

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.product=navParams.get("product");
		this.product.thumbnail = this.convertImageSize(this.product.thumbnail,"big");
	}

	convertImageSize(imageURL:string, type:string):string{
		var newImageURL;
		if(type=="small"){
			newImageURL = imageURL.replace("-E.jpg","-I.jpg");
		}else if(type="big"){
			newImageURL = imageURL.replace("-I.jpg","-E.jpg");
			console.log(newImageURL);
		}
		return newImageURL;
	}

}
