import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../../../models/Category';
import {CategoryService} from '../../../services/category.service';
import {TokenStorageService} from '../../../auth/token-storage.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Observable<Category[]>;
  info: any;
  board: string;
  errorMessage: string;

  constructor(private categoryService: CategoryService,
              private tokenService: TokenStorageService) {
  }

  reloadData() {
    this.categories = this.categoryService.getCategory();
  }

  ngOnInit() {
    this.reloadData();
    this.info = {
      token: this.tokenService.getToken(),
      username: this
    };
  }

  deleteCategory(id: number) {
    const choice = (confirm('Are you sure to delete this category?'));
    if (choice) {
      this.categoryService.deleteCategory(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error)
        );
    }
  }
}
