import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductResponse } from '../../models/product.response';
import { ProductModel } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  public products: ProductModel[] = []

  constructor(
    public productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((response: ProductResponse) => {
      if (response) {
        this.products = response.products
        console.log('products: ', this.products)
      } else {
        alert('The product is empty, please try again.')
      }
    })
  }
  addToCart(): void {
    alert('Add to cart!')
  }
}
