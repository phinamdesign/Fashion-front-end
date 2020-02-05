import { Component, OnInit } from '@angular/core';
import {Order} from '../../../models/order';
import {OrderService} from '../../../services/order.service';
import {ProductDetailService} from '../../../services/product-detail.service';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-order-user',
  templateUrl: './order-user.component.html',
  styleUrls: ['./order-user.component.css']
})
export class OrderUserComponent implements OnInit {
  orderList: Order[];

  constructor(private orderService: OrderService,
              private productDetailService: ProductDetailService,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    this.orderService.findAllByUserId(this.token.getUserId()).pipe(
      map(res => res.sort((a, b) => a.date < b.date ? 1 : -1))
    ).subscribe(next => {
      this.orderList = next;
    });
  }
  changeToCancel(idOrder) {
    this.orderService.changeOrderStatus(idOrder, 'Cancel').subscribe(next => {
      this.ngOnInit();
    });
  }

}
