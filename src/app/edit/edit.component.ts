import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ProductService} from '../product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  sub: Subscription;
  id: any;
  product: any = {};
  constructor(
    private productService: ProductService,
    private activeRouter: ActivatedRoute
  ) {
    this.sub = this.activeRouter.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.id = Number(paramMap.get('id'));
        this.product = this.getProductById(this.id);
      }
    );
  }
  ngOnInit(): void {
  }
  editProduct(): void{
    this.productService.editProduct(this.id, this.product);
  }
  getProductById(id: number): any {
    return this.productService.findById(id);
  }
}
