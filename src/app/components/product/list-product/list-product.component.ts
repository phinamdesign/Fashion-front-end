import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../../models/category';
import {Supplier} from '../../../models/supplier';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  // products: Product[] = [];
  content: string;
  p = 1;
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
  }

  // reloadData() {
  //   this.products = this.productService.getListProduct();
  // }

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

}
