import { Component, OnInit } from '@angular/core';
import {OderDetail} from '../../../../models/oderdetail';
import {OderdetailService} from '../../../oderdetail.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-oder-detail',
  templateUrl: './create-oder-detail.component.html',
  styleUrls: ['./create-oder-detail.component.css']
})
export class CreateOderDetailComponent implements OnInit {
  oderdetail: OderDetail = new OderDetail();
  submitted = false;
  constructor(private oderdetailService: OderdetailService, private router: Router) { }

  ngOnInit() {
  }
  newOderdetail(): void {
    this.submitted = false;
    this.oderdetail = new OderDetail();
  }
  save() {
    this.oderdetailService.createOderdetail(this.oderdetail).subscribe(data => console.log(data), error => console.log(error));
    this.oderdetail = new OderDetail();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['oderdetails']);
  }

}
