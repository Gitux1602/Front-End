import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';


@Injectable({
    providedIn: 'root'
  })
  export class ProductService{ 
    private myAppUrl: string;
  private myApiUrl: string;
  constructor(private http: HttpClient ){
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/list/'
  }

    getListProducts(): Observable<Product[]> {
      //Aqui estaba el error, se usó el url equivocado
      const url = environment.endpoint + 'api/list';
      return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`,{withCredentials: true});
    }
    
    deleteProducts(id: number):Observable<void> {
      //const url = environment.endpoint + 'api/list';
      return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`,{withCredentials: true});
    }

    saveProduct(product: Product):Observable<void>{
     return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`,product)
    }

  }