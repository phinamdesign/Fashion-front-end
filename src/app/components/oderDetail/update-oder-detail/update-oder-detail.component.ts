import { Component, OnInit } from '@angular/core';
import {OderDetail} from '../../../models/oderdetail';
import {ActivatedRoute, Router} from '@angular/router';
import {OderdetailService} from '../../../services/oderdetail.service';

@Component({
  selector: 'app-update-oder-detail',
  templateUrl: './update-oder-detail.component.html',
  styleUrls: ['./update-oder-detail.component.css']
})
export class UpdateOderDetailComponent implements OnInit {
  id: number;
  oderdetail: OderDetail;
  constructor(private route: ActivatedRoute, private router: Router, private oderdetailService: OderdetailService) { }

  ngOnInit() {
  this.oderdetail = new OderDetail();
  this.id = this.route.snapshot.params.id;
    // tslint:disable-next-line:max-line-length
  this.oderdetailService.getOderdetail(this.id).subscribe(data => {console.log(data); this.oderdetail = data; } , error => console.log(error));
  }
  updateOderdetail() {
    this.oderdetailService.updateOderdetail(this.id, this.oderdetail)
      .subscribe(data => console.log(data), error => console.log(error));
    this.oderdetail = new OderDetail();
    this.gotoList();
  }
  onSubmit() {
    this.updateOderdetail();
  }
  gotoList() {
    this.router.navigate(['oderdetails']);
  }
}
