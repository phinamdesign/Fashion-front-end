import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {error} from 'util';
import {OderDetail} from '../../../../models/oderdetail';
import {OderdetailService} from '../../../oderdetail.service';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-list-oder-detail',
  templateUrl: './list-oder-detail.component.html',
  styleUrls: ['./list-oder-detail.component.css']
})
export class ListOderDetailComponent implements OnInit {
  oderdetails: Observable<any>;
  // items = [];
  // pageOfItems: Array<any>;
  constructor(private oderdetailService: OderdetailService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.oderdetails = this.oderdetailService.getOderdetailList();
  }
  deleteOderdetail(id: number) {
    const choice = confirm('Are you sure to delete this order detail?');
    if (choice) {
      this.oderdetailService.deleteOderdetail(id).subscribe(data => {console.log(data); this.reloadData(); },
        // tslint:disable-next-line:no-shadowed-variable
        error => console.log(error));
    }
  }
  Oderdetail(id: number) {
    this.router.navigate(['details', id]);
  }
  updateOderdetail(id: number) {
    this.router.navigate(['update', id]);
  }
}
