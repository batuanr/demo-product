import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs';
import {Product} from '../product';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
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


  getProductById(id: number): any {
    return this.productService.findById(id);
  }
}
