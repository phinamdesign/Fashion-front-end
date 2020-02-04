import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../../services/order.service';
import {ProductDetailService} from '../../../services/product-detail.service';
import {Order} from '../../../models/order';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.css']
})
export class OrderManagerComponent implements OnInit {

  orderList: Order[];

  constructor(private orderService: OrderService,
              private productDetailService: ProductDetailService,
              private token: TokenStorageService,
              private router: Router) {
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
  deleteOrder(id: number) {
    const choice = confirm('Are you sure to remove this order ?');
    if (choice) {
      this.orderService.deleteOrder(id)
        .subscribe(
          data => {
            console.log(data);
            // window.location.reload();
            this.router.navigate(['order/admin/manager']);
          },
          error => console.log(error)
        );
    }
    this.ngOnInit();
  }
}
