import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import {Observable, Observer} from 'rxjs';
import {CartComponent} from '../../cart/cart.component';
// import {ShoppingCartService} from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  id: number;
  product: Product;
  public products: Observable<Product[]>;
  //
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private cart: CartComponent,
    // private shoppingCartService: ShoppingCartService
  ) { }
//
  ngOnInit() {
    this.product = new Product();
    this.id = this.route.snapshot.params.id;
    this.productService.getProduct(this.id)
      .subscribe(
        data => {
          console.log(data);
          this.product = data;
        }, error => console.log(error));
    this.products = this.productService.getListProduct();
  }

  backToList() {
    this.router.navigate(['product']);
}
//
//   listProduct() {
//     this.router.navigate(['product']);
//   }
//
//   public addProductToCart(product: Product): void {
//     this.shoppingCartService.addItem(product, 1);
//   }
//
//   public removeProductFromCart(product: Product): void {
//     this.shoppingCartService.addItem(product, -1);
//   }
//
//   public productInCart(product: Product): boolean {
//     return Observable.create((obs: Observer<boolean>) => {
//       const sub = this.shoppingCartService
//         .get()
//         .subscribe((cart) => {
//           obs.next(cart.items.some((i) => i.productId === product.id));
//           obs.complete();
//         });
//       sub.unsubscribe();
//     });
//   }
//
// }
//   product: Product[] = [];
//   content: string;

  // constructor(private productService: ProductService,
  //             private cart: CartComponent,
  //             private route: ActivatedRoute,
  //             private router: Router) {
  // }

  // ngOnInit() {
  //   this.productService.getListProduct().subscribe(next =>
  //     (this.product = next), err =>
  //     (this.content = this.content = JSON.parse(err.error).message));
  // }
  addCart(idProduct) {
    this.cart.addCart(idProduct);
  }
}
