import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductModel } from "../models/product.model";
import { ProductResponse } from "../models/product.response";

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    public productUrl = 'https://dummyjson.com/products'

    constructor(
        public httpClient: HttpClient
    ) { }

    getProduct(): Observable<ProductResponse> {
        return this.httpClient.get<ProductResponse>(this.productUrl)
    }
}