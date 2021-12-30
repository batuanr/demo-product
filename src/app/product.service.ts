import { Injectable } from '@angular/core';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'iphone8',
      description: '64g'
    },
    {
      id: 2,
      name: 'iphone7',
      description: '55g'
    }
  ];

  constructor() { }
  getAllProduct(): Product[]{
    return this.products;
  }
  createProduct(product: Product): void{
    this.products.push(product);
  }
  findById(id: number): any{
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id ===  id) { return this.products[i]; }
      return null;
    }
  }
  delete(id: number): void{
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id){
        // @ts-ignore
        this.products.splice(i, 1);
      }
    }
  }
  editProduct(id: number, product: Product): void{
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id){
        // @ts-ignore
        this.products[i] = product;
      }
    }
  }

}
