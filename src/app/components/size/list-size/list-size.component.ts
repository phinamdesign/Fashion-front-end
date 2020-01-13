import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Size} from '../../../models/size';
import {SizeService} from '../../../services/size.service';
import {Router} from '@angular/router';
import {compareNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-list-size',
  templateUrl: './list-size.component.html',
  styleUrls: ['./list-size.component.css']
})
export class ListSizeComponent implements OnInit {
  sizes: Observable<Size[]>;

  constructor(private sizeService: SizeService, private router: Router) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.sizes = this.sizeService.getSizeList();
  }

  deleteSize(id: number) {
    const choice = confirm('Are you sure to delete this size');
    if (choice) {
      this.sizeService.deleteSize(id).subscribe(data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
    }
  }
  sizea(id: number) {
    this.router.navigate(['sizes', id]);
  }
  updateSize(id: number) {
    this.router.navigate(['update', id]);
  }
}
