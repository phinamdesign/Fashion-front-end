import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../../models/product';
import {Category} from '../../../models/category';
import {Supplier} from '../../../models/supplier';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-action-product',
  templateUrl: './action-product.component.html',
  styleUrls: ['./action-product.component.css']
})
export class ActionProductComponent implements OnInit {

  // products: Product[] = [];
  products: Observable<Product[]>;
  content: string;
  // p = 1;
  private id: number;
  private name: string;
  private image: string;
  private price: number;
  private description: string;
  private quantity: number;
  private status = true;
  private category: Category;
  private supplier: Supplier;
  listProduct: Product[] = [];
  productForm = new FormGroup({
    name: new FormControl('')
  });

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe(
      params => {
        this.id = params.id;
      }
    );
  }

  ngOnInit() {
    this.productService.getListProduct().subscribe(next =>
      (this.listProduct = next), err =>
      (this.content = this.content = JSON.parse(err.error).message));
    this.reloadData();
  }

  searchProduct() {
    const {name} = this.productForm.value;
    const product: Product = {
      id: this.id,
      price: this.price,
      description: this.description,
      quantity: this.quantity,
      // category: this.category,
      // supplier: this.supplier,
      name
    };
    this.productService.searchByName(product).subscribe(
      result => {
        this.listProduct = result;
      }, error => {
        console.log(error);
      }
    );
    this.status = false;
  }

  detailsProduct(id: number) {
    this.router.navigate(['details', id]);
  }

  reloadData() {
    this.products = this.productService.getListProduct();
  }

  deleteProduct(id: number) {
    const choice = confirm('Bạn có chắc chắn muốn xoa ?');
    if (choice) {
      this.productService.deleteProduct(id)
        .subscribe(
          data => {
            console.log(data);
            // this.reloadData();
          },
          error => console.log(error)
        );
      this.router.navigate(['product']);
    }
  }

}
