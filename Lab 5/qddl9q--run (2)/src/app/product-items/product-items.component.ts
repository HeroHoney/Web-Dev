import { Component } from '@angular/core';
import { Category,category } from '../category';
export var categoryId=0;
@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent {
  category = category;

  changeVal(id:number) {
    categoryId=id;
  }
}