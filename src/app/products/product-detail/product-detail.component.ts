import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {

   }

  ngOnInit(): void {
    // Get the id parameter from the url
    let id = this.activatedRoute.snapshot.params.id;

    // Get the product from the service
    this
      .productService
      .getProductById(id)
      .subscribe(
        result => this.product = result
      )

  }

}
