import { Component} from '@angular/core';

import { Product, products } from '../products';

import { categoryId } from 'src/app/product-items/product-items.component'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share(product: Product) {
    const url=product.link;
    window.open("https://api.whatsapp.com/send?text=" + url);
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  filteredProducts(){ 
    return this.products.filter(c => c.categoryId === categoryId); 
  } 
  pressLike(product: Product){ 
    product.likecnt++;
  } 
  deleteProduct(product: Product){
    
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/