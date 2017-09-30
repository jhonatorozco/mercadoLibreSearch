import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MercadoLibreProvider provider. Used to consume the Mercado Libre API
*/
@Injectable()
export class MercadoLibreProvider {
	link:any ="https://api.mercadolibre.com/sites/MCO/search?q=";

	constructor(public http: Http) {
  	}

    /*Consume the Mercado Libre API to search a product with the name passed as parameter*/
  	searchProductsByName(nameProduct:string){
  		return new Promise((resolve, reject)=> {
          var link:string = this.link + nameProduct 
          this.http.get(link).map(res=>res.json()).subscribe(
            (data) => {
              resolve(data)
            },
            (error) => {
              reject("Error: "+ error)
            })
    })

  	}

}
