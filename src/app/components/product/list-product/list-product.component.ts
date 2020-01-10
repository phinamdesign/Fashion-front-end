import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.products = this.productService.getListProduct();
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      );
  }

  detailsProduct(id: number) {
    this.router.navigate(['details', id]);
  }

}
