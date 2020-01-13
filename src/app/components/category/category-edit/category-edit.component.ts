import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../../services/category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../../models/Category";
import {TokenStorageService} from "../../../auth/token-storage.service";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  private editForm: FormGroup;
  category: Category;
  info: any;
  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private tokenService: TokenStorageService
  ) { }

  ngOnInit() {
    this.editForm = this.fb.group({
      categoryId: [''],
      categoryName: ['', [Validators.required, Validators.minLength(3)]],
    });
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.categoryService.getCategoryById(id).subscribe(
      next => {
        this.category = next;
        this.editForm.patchValue(this.category);
      },
      error => {
        console.log(error);
        this.category = null;
      }
    );
    this.info = {
      token: this.tokenService.getToken(),
      username: this
    };
  }
  editCategory() {
    const { value } = this.editForm;
    console.log(this.editForm)
    this.categoryService.updateCategory(value).subscribe(
      next => {
        alert('Edit this category is successful!');
        this.router.navigate(['categories']);
      },
      error => console.log(error)
    );
  }

}
