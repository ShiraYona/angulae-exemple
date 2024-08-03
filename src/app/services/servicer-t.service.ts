import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ServicerTService {

  constructor(private httpclient: HttpClient) { }


  getf(): Observable<product[]> {
    debugger
    var t = this.httpclient.get<product[]>("https://localhost:44323/api/Values");
    debugger
    return t
  }
  SaveProduct(product: product): Observable<product> {
    return this.httpclient.post<product>("https://localhost:44323/api/Values", product)
  }
  deleteproduct(productId:number):Observable<boolean>{
    return this.httpclient.delete<boolean>(`https://localhost:44323/api/Values/${productId}`)

  }
}
