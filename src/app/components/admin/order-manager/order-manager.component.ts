import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../services/order.service';
import {ProductDetailService} from '../../../services/product-detail.service';
import {Order} from '../../../models/order';
import {TokenStorageService} from '../../../auth/token-storage.service';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.css']
})
export class OrderManagerComponent implements OnInit {

  orderList: Order[];

  constructor(private orderService: OrderService,
              private productDetailService: ProductDetailService,
              private token: TokenStorageService) {
  }

  ngOnInit() {
    this.orderService.getOrderList().subscribe(next => {
      this.orderList = next;
    });
  }

  changeToProcessing(idOrder) {
    this.orderService.changeOrderStatus(idOrder, 'processing').subscribe(next => {
      this.ngOnInit();
    });
  }

  changeToDone(idOrder) {
    this.orderService.changeOrderStatus(idOrder, 'Done').subscribe(next => {
      this.ngOnInit();
    });
  }
}
