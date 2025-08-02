import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductResponse } from '../../models/product.response';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-dummy-product',
  standalone: true,
  imports: [],
  templateUrl: './dummy-product.component.html',
  styleUrl: './dummy-product.component.scss'
})
export class DummyProductComponent implements OnInit {
  public products: ProductModel[] = []

  constructor(
    public productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((response: ProductResponse) => {
      if (response) {
        this.products = response.products
      } else {
        console.log('The product is empty, please try again.')
      }
    })
  }
}
