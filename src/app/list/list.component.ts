import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {MatDialog} from '@angular/material/dialog';
// import {DeleteComponent} from '../delete/delete.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    // public dialog: MatDialog,
    private productService: ProductService
  ) {}
  getAllProduct(): Product[]{
    return this.productService.getAllProduct();
  }
  ngOnInit(): void {
  }
  delete(id: number): void{
    this.productService.delete(id);
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DeleteComponent, {
  //     width: '250px',
      // data: {name: this.name, animal: this.animal},
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   // this.animal = result;
    // });
  // }
}
