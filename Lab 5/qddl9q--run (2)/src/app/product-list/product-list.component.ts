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
  deleted: number[]=[];

  share(product: Product) {
    const url=product.link;
    window.open("https://api.whatsapp.com/send?text=" + url);
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  filteredProducts(){ 
    return this.products.filter(p => p.categoryId === categoryId && !this.deleted.find(deletedId=> deletedId === p.id)); 
  } 
  pressLike(product: Product){ 
    product.likecnt++;
  } 
  deleteProduct(id: number){
    this.deleted.push(id);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/