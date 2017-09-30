import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MercadoLibreProvider } from "../../providers/mercado-libre/mercado-libre";
import { DetailProductPage } from "../detail-product/detail-product";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MercadoLibreProvider]
})
export class HomePage {

	productName:string = "";
	products:any=[];
	detailProductPage = DetailProductPage ;

	constructor(public navCtrl: NavController, public _mercadoLibreSerice: MercadoLibreProvider) {
		
	}

	/* Find the products by the name typed in the search box.
	*/
	findProducts(){
		this._mercadoLibreSerice.searchProductsByName(this.productName).then( (response) => {
     		this.products = response;
     		this.products = this.products.results;
    	})
	}

}
