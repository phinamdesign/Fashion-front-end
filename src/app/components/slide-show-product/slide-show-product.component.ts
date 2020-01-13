import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Product} from '../../models/product';

@Component({
  selector: 'app-slide-show-product',
  templateUrl: './slide-show-product.component.html',
  styleUrls: ['./slide-show-product.component.css']
})
export class SlideShowProductComponent implements OnInit {
  slideShows: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  reloadData() {
    this.slideShows = this.productService.getListProduct();
  }
  ngOnInit() {
    this.reloadData();
  }

}
