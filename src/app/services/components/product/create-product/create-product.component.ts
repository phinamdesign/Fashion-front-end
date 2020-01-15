import {Component, OnInit} from '@angular/core';
import {Product} from '../../../../models/product';
import {ProductService} from '../../../product.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../category.service';
import {SupplierService} from '../../../supplier.service';
import {PictureService} from '../../../picture.service';
import {AppComponent} from '../../../../app.component';
import {TokenStorageService} from '../../../../auth/token-storage.service';
import {Picture} from '../../../../models/Picture';
import {Category} from "../../../../models/category";
import {Supplier} from "../../../../models/supplier";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: Product;
  categories: Category[] = [];
  suppliers: Supplier[] = [];


  productForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    categorySelect: new FormControl(''),
    quantity: new FormControl(''),
    supplierSelect: new FormControl('')
  });

  constructor(
    private categoryService: CategoryService,
    private supplierService: SupplierService,
    private pictureService: PictureService,
    private fb: FormBuilder,
    private router: Router,
    private productService: ProductService,
    private app: AppComponent,
    private token: TokenStorageService,
  ) {
  }

  ngOnInit() {
    this.categoryService.getCategory().subscribe(next => {
      this.categories = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log(this.categories);
    });
    this.supplierService.getAllSupplier().subscribe(next => {
      this.suppliers = next;
    }, error => {
      console.log(error);
    }, () => {
      console.log('complete');
    });
  }

  create() {
    const {name, description, quantity, supplierSelect, categorySelect} = this.productForm.value;
    if (name === '' || description === '' || quantity === '' || supplierSelect === '' || categorySelect === '') {
      return alert('Fill Data Fields !');
    }
    const iProduct: Product = {
      name,
      description,
      quantity,
      category: {
        categoryId: categorySelect
      },
      supplier: {
        supplierId: supplierSelect
      }
    };
    this.productService.createProduct(iProduct).subscribe(next => {
      this.productService;
      console.log(iProduct);
      alert('Created a new product!')
      this.productForm.reset({});
    });
  }
}
