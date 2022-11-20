import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { throws } from 'assert';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  
  listProducts: Product[] = []

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.getListProducts();
    console.log(this.listProducts);
  }
  getListProducts(){
    this._productService.getListProducts().subscribe((data)=>{
      this.listProducts=data;
      console.log(data);
    })
  }

}
