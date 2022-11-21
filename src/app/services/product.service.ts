import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';


@Injectable({
    providedIn: 'root'
  })
  export class ProductService{ 
    
  constructor(private http: HttpClient ){}

    getListProducts(): Observable<Product[]> {
      //Aqui estaba el error, se usó el url equivocado
      const url = environment.endpoint + 'api/listProducts/listProductsID'
      return this.http.get<Product[]>(url,{withCredentials: true});
    }
  }