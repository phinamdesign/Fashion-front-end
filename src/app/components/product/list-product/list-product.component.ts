import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Category} from '../../../models/category';
import {Supplier} from '../../../models/supplier';
import {CartComponent} from '../../public/cart/cart.component';
import {SearchProductByName} from '../../../models/SearchProductByName';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  // products: Product[] = [];
  content: string;
  p = 1;
  private nameProduct = '';
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
    private router: Router,
    private cart: CartComponent
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

  detailsProduct(id: number) {
    this.router.navigate(['details', id]);
  }
  addCart(idBook) {
    this.cart.addCart(idBook);
  }

  searchProductByName() {
    const nameForm: SearchProductByName = {
      nameProduct: this.nameProduct
    };
    this.productService.searchProductByName(nameForm).subscribe(
      result => {
        this.listProduct = result;
      }, error => {
        console.log(error);
      }
    );
  }

}
