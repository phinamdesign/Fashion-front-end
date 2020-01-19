import { Component, OnInit } from '@angular/core';
import {ProductDetail} from '../../../models/productDetail';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {Color} from '../../../models/color';
import {Size} from '../../../models/size';
import {ProductDetailService} from '../../../services/product-detail.service';
import {Category} from '../../../models/category';
import {CategoryService} from '../../../services/category.service';
import {TokenStorageService} from '../../../auth/token-storage.service';

@Component({
  selector: 'app-product-detail-list',
  templateUrl: './product-detail-list.component.html',
  styleUrls: ['./product-detail-list.component.css']
})
export class ProductDetailListComponent implements OnInit {


  productDetails: Observable<ProductDetail[]>;
  info: any;
  constructor(private productDetailService: ProductDetailService,
              private tokenService: TokenStorageService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  reloadData() {
    this.productDetails = this.productDetailService.getProductDetail();
  }
  ngOnInit() {
    this.reloadData();
    this.info = {
      token: this.tokenService.getToken(),
      username: this
    };
  }
  deleteProductDetail(id: number) {
    const choice = (confirm('Are you sure to delete this Product detail?'));
    if (choice) {
      this.productDetailService.deleteProductDetail(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error)
        );
    }
  }
  order(id: number) {
    this.router.navigate(['order', id]);
  }
}
