import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

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
        // this.product = this.getProductById(this.id);
      }
    );
  }

  ngOnInit(): void {
  }
  delete(): void{
    this.productService.delete(this.id);
  }
}
