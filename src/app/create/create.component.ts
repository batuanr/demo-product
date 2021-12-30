import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    description: ''
};
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  create(){
    this.productService.createProduct(this.product);
  }
}
