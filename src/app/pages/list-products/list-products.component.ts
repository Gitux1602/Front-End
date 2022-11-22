import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  listProducts: any = []

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.getListProducts();

  }
  getListProducts() {
    this._productService.getListProducts().subscribe((data: Product[]) => {
      this.listProducts = data
      console.log(this.listProducts);
    })
  }
  deleteProducts(id: number) {
    this._productService.deleteProducts(id).subscribe(() => {
      console.log(id);
      this.getListProducts();
    })
  }
}
