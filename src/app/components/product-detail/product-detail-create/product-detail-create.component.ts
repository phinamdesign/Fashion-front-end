import { Component, OnInit } from '@angular/core';
import {Color} from '../../../models/color';
import {Size} from '../../../models/size';
import {Product} from '../../../models/product';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ProductDetailService} from '../../../services/product-detail.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ColorService} from '../../../services/color.service';
import {SizeService} from '../../../services/size.service';
import {ProductService} from '../../../services/product.service';
import {ProductDetail} from '../../../models/productDetail';
// import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-detail-create',
  templateUrl: './product-detail-create.component.html',
  styleUrls: ['./product-detail-create.component.css']
})
export class ProductDetailCreateComponent implements OnInit {
  colors: Color[] = [];
  sizes: Size[] = [];
  // products: Product[] = [];
  productDetail: ProductDetail;
  product1: Product;
  createForm = new FormGroup({
    selectColor: new FormControl(''),
    selectSize: new FormControl(''),
    // price: new FormControl(''),
    quantity: new FormControl('')
  });

  constructor(private productDetailService: ProductDetailService,
              private productService: ProductService,
              private router: Router,
              private colorService: ColorService,
              private sizeService: SizeService,
              private fb: FormBuilder,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.productService.getProduct(id).subscribe(
      next => {
        this.product1 = next;
        this.createForm.patchValue(this.product1);
      },
      error => {
        // console.log(error);
        // this.product1 = null;
      }
    );
    this.colorService.getColorList().subscribe(next => {
      this.colors = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
    this.sizeService.getSizeList().subscribe(next => {
      this.sizes = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }

  create() {
    const {selectColor, selectSize, quantity, id} = this.createForm.value;
    // if (selectProduct === '' || selectColor === '' || selectSize === '') {
    //   return alert('Fill Data Fields !');
    // }
    const iProductDetail: ProductDetail = {
      id,
      quantity,
      product: {
        id: this.product1.id
      },
      size: {
        id: selectSize
      },
      color: {
        id: selectColor
      }
    };
    this.productDetailService.createProductDetail(iProductDetail).subscribe(next => {
      this.productDetailService;
      console.log(iProductDetail);
      alert('Tạo mới học sinh thành công!');
      this.createForm.reset({
      });
    });
  }
  // orderDetail(id: number) {
  //   this.router.navigate(['order', id]);
  // }
}
