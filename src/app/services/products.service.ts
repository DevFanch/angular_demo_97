import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private httpClient: HttpClient = inject(HttpClient)

  fetchProducts(): any {
    return this.httpClient.get('https://dummyjson.com/products')
  }
}
