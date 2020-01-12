import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Category} from '../../../models/Category';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Observable<Category[]>;
  constructor(private categoryService: CategoryService) { }

  reloadData() {
    this.categories = this.categoryService.getCategory();
  }
  ngOnInit() {
    this.reloadData();
  }
  deleteCategory(id: number) {
    const choice = (confirm('Are you sure to delete this catagory?'));
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
