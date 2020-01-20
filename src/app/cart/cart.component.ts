import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {CartItem} from '../models/cart-item';
import {ProductDetail} from '../models/productDetail';
import {Observable, Subscription} from 'rxjs';
import {ShoppingCart} from '../models/shopping-cart';
import {ProductService} from '../services/product.service';
import {ShoppingCartService} from '../services/shopping-cart.service';
import {ProductDetailService} from '../services/product-detail.service';
interface ICartItemWithProduct extends CartItem {
  product: Product;
  totalCost: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  public orderDetail: Observable<ProductDetail[]>;
  public cart: Observable<ShoppingCart>;
  public cartItems: ICartItemWithProduct[];
  public itemCount: number;

  private products: Product[];
  private cartSubscription: Subscription;

  public constructor(private productsService: ProductService,
                     private productDetailService: ProductDetailService,
                     private shoppingCartService: ShoppingCartService) {
  }

  public emptyCart(): void {
    this.shoppingCartService.empty();
  }

  public setOrderDetail(option: ProductDetail): void {
    this.shoppingCartService.setOrderDetail(option);
  }

  public ngOnInit(): void {
    this.orderDetail = this.productDetailService.getProductDetail();
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
      this.productsService.getListProduct().subscribe((products) => {
        this.products = products;
        this.cartItems = cart.items
          .map((item) => {
            const product = this.products.find((p) => p.id === item.productId);
            return {
              ...item,
              product,
              totalCost: product.price * item.quantity
            };
          });
      });
    });
  }

  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
