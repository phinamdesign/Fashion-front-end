import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {ProductDetail} from '../models/productDetail';
import {Order} from '../models/order';
import {StorageService} from '../services/storage.service';
import {ProductDetailService} from '../services/product-detail.service';
import {OrderService} from '../services/order.service';
import {SizeService} from '../services/size.service';
import {Size} from '../models/size';
import {ColorService} from '../services/color.service';
import {Color} from '../models/color';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  order: Order;
  cartList: ProductDetail[];
  totalPrice = 0;
  sizes: Size[] = [];
  colors: Color[] = [];

  constructor(private productDetailService: ProductDetailService,
              private token: TokenStorageService,
              private orderService: OrderService,
              private storage: StorageService,
              private sizeService: SizeService,
              private colorService: ColorService
  ) {
  }

  ngOnInit() {
    this.sizeService.getSizeList().subscribe(next => {
      this.sizes = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });

    this.colorService.getColorList().subscribe(next => {
      this.colors = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
    if (this.token.getToken()) {
      this.totalPrice = 0;
      this.orderService.getCart(this.token.getUserId()).subscribe(next => {
        this.order = next;
        this.productDetailService.findByOrderId(this.order.id).subscribe(next2 => {
          this.cartList = next2;
          console.log(next2);
          this.order.phone = this.order.user.phone;
          this.order.deliveryAddress = this.order.user.address;
          for (const cart of this.cartList) {
            this.totalPrice += cart.quantity * cart.product.price;
          }
          const total = this.totalPrice;
          document.getElementById('totalPrice').innerHTML = total.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
        });
      }, error => {
        console.log(error);
      });
    } else {
      console.log(this.storage.getCart());
      this.totalPrice = 0;
      this.orderService.getItem(this.storage.getCart()).subscribe(nextCart => {
        this.order = nextCart;
        this.productDetailService.findByOrderId(this.storage.getCart()).subscribe(next6 => {
          this.cartList = next6;
          this.order.phone = '';
          this.order.deliveryAddress = '';
          for (const cart of this.cartList) {
            this.totalPrice += cart.quantity * cart.product.price;
          }
          const total = this.totalPrice;
          document.getElementById('totalPrice').innerHTML = total.toLocaleString('it-IT', {style: 'currency', currency: 'VND'});
        });
      }, error => {
        console.log(error);
      });
    }
  }

  onChangeQuantity(event, cart) {
    // if (this.token.getToken()) {
    console.log(event.target.value);
    cart.quantity = event.target.value;
    this.productDetailService.updateProductDetail({
      id: cart.id,
      quantity: cart.quantity,
      size: {id: cart.size},
      color: {id: cart.color},
      product: {id: cart.product.id},
      order: {id: cart.order.id},
    }).subscribe(next => {
      console.log(next);
      // this.ngOnInit();
    });
    // }
  }

  onChangeSize(event, cart) {
    // if (this.token.getToken()) {
    cart.size = event.target.value;
    console.log(event.target.value);
    this.productDetailService.updateProductDetail({
      id: cart.id,
      quantity: cart.quantity,
      size: {id: cart.size},
      color: {id: cart.color},
      product: {id: cart.product.id},
      order: {id: cart.order.id},
    }).subscribe(next => {
      console.log(next);
      // this.ngOnInit();
    });
    // }
  }

  onChangeColor(event, cart) {
    // if (this.token.getToken()) {
    cart.color = event.target.value;
    console.log(event.target.value);
    this.productDetailService.updateProductDetail({
      id: cart.id,
      quantity: cart.quantity,
      size: {id: cart.size},
      color: {id: cart.color},
      product: {id: cart.product.id},
      order: {id: cart.order.id},
    }).subscribe(next => {
      console.log(next);
      // this.ngOnInit();
    });
    // }
  }

  createOrder() {
    this.order.total = this.totalPrice;
    this.orderService.toOrder(this.order).subscribe(next => {
      console.log(next);
      this.storage.remove();
      window.location.reload();
    });
  }

  onChangePhone(event) {
    this.order.phone = event.target.value;
  }

  onChangeAddress(event) {
    this.order.deliveryAddress = event.target.value;
  }
}
