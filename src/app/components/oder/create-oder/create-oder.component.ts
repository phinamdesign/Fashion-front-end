import { Component, OnInit } from '@angular/core';
import {Color} from '../../../models/color';
import {Size} from '../../../models/size';
import {ProductDetail} from '../../../models/productDetail';
import {Product} from '../../../models/product';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ProductDetailService} from '../../../services/product-detail.service';
import {ProductService} from '../../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ColorService} from '../../../services/color.service';
import {SizeService} from '../../../services/size.service';
import {Order} from '../../../models/Order';
import {OderService} from '../../../services/oder.service';

@Component({
  selector: 'app-create-oder',
  templateUrl: './create-oder.component.html',
  styleUrls: ['./create-oder.component.css']
})
export class CreateOderComponent implements OnInit {
  //
  // colors: Color[] = [];
  // sizes: Size[] = [];
  // products: Product[] = [];
  productDetail: ProductDetail;
  // product1: Product;
  createForm = new FormGroup({
    deliveryTime: new FormControl(''),
    deliveryAddress: new FormControl(''),
    // price: new FormControl(''),
    // quantity: new FormControl('')
  });

  constructor(private productDetailService: ProductDetailService,
              // private productService: ProductService,
              private router: Router,
              // private colorService: ColorService,
              // private sizeService: SizeService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private orderService: OderService ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.productDetailService.getProductDetailById(id).subscribe(
      next => {
        this.productDetail = next;
        this.createForm.patchValue(this.productDetail);
      },
      error => {
        console.log(error);
        this.productDetail = null;
      }
    );
  }

  generateOrder() {
    const {deliveryTime, deliveryAddress, id, productDetails} = this.createForm.value;
    // if (selectProduct === '' || selectColor === '' || selectSize === '') {
    //   return alert('Fill Data Fields !');
    // }
    const iOrder: Order = {
      id,
      deliveryTime,
      deliveryAddress,
      productDetails: {
        id: this.productDetail.id
      }
    };
    this.orderService.createOder(iOrder).subscribe(next => {
      this.productDetailService;
      console.log(iOrder);
      alert('Tạo mới học sinh thành công!');
      this.createForm.reset({
      });
    });
  }
}
