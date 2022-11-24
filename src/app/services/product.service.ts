import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';


@Injectable({
    providedIn: 'root'
  })
  export class ProductService{ 

    constructor(private http: HttpClient ){
    }
    url = environment.endpoint + 'api/list/';

    getListProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(`${this.url}`,{withCredentials: true});
    }
    
    deleteProducts(id: number):Observable<void> {
      return this.http.delete<void>(`${this.url}${id}`,{withCredentials: true});
    }

    saveProduct(product: Product):Observable<void>{
     return this.http.post<void>(`${this.url}`,product,{withCredentials: true})
    }
    
    getProduct(id: number): Observable<Product> {
      return this.http.get<Product>(`${this.url}${id}`,{withCredentials: true});
    }

    updateProduct(id: number, product: Product): Observable<void> {
      return this.http.put<void>(`${this.url}${id}`, product,{withCredentials: true});
    }

  }