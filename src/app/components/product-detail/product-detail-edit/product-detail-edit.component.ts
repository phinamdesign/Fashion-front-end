// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {Category} from '../../../models/category';
// import {CategoryService} from '../../../services/category.service';
// import {ActivatedRoute, Router} from '@angular/router';
// import {TokenStorageService} from '../../../auth/token-storage.service';
// import {ProductDetail} from '../../../models/productDetail';
// import {ProductDetailService} from '../../../services/product-detail.service';
// import {ColorService} from '../../../services/color.service';
// import {SizeService} from '../../../services/size.service';
// import {Color} from '../../../models/color';
// import {Size} from '../../../models/size';
//
// @Component({
//   selector: 'app-product-detail-edit',
//   templateUrl: './product-detail-edit.component.html',
//   styleUrls: ['./product-detail-edit.component.css']
// })
// export class ProductDetailEditComponent implements OnInit {
//
//   private editForm: FormGroup;
//   colors: Color[] = [];
//   sizes: Size[] = [];
//   productDetail: ProductDetail;
//   info: any;
//   constructor(
//     private productDetailService: ProductDetailService,
//     private fb: FormBuilder,
//     private route: ActivatedRoute,
//     private router: Router,
//     private tokenService: TokenStorageService,
//     private colorService: ColorService,
//     private sizeService: SizeService,
//   ) { }
//
//   ngOnInit() {
//     this.editForm = this.fb.group({
//       id: [''],
//       size: ['', [Validators.required, Validators.minLength(3)]],
//       color: ['', [Validators.required, Validators.minLength(3)]],
//       product: ['', [Validators.required, Validators.minLength(3)]],
//       quantity: ['', [Validators.required, Validators.minLength(3)]],
//     });
//     const id = +this.route.snapshot.paramMap.get('id');
//     console.log(id);
//     this.productDetailService.getProductDetailById(id).subscribe(
//       next => {
//         this.productDetail = next;
//         this.editForm.patchValue(this.productDetail);
//       },
//       error => {
//         console.log(error);
//         this.productDetail = null;
//       }
//     );
//     this.info = {
//       token: this.tokenService.getToken(),
//       username: this
//     };
//
//     // this.colorService.getColorList().subscribe(next => {
//     //   this.colors = next;
//     // }, error => {
//     //   console.log(error);
//     // }, () => {
//     //   console.log('complete');
//     // });
//     this.sizeService.getSizeList().subscribe(next => {
//       this.sizes = next;
//     }, error => {
//       console.log(error);
//     }, () => {
//       console.log('complete');
//     });
//   }
//   update() {
//     const { value } = this.editForm;
//     console.log(this.editForm);
//     this.productDetailService.updateProductDetail(value).subscribe(
//       next => {
//         alert('Edit this product detail is successful!');
//         this.router.navigate(['productDetail']);
//       },
//       error => console.log(error)
//     );
//   }
// }
