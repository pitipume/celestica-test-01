import { ProductModel } from "./product.model";

export interface ProductResponse {
    products: ProductModel[]
    total: number
    skip: number
    limit: number
}