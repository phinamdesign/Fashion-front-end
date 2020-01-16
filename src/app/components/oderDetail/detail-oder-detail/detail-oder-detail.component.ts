import { Component, OnInit } from '@angular/core';
import {OderDetail} from '../../../models/oderdetail';
import {ActivatedRoute, Router} from '@angular/router';
import {OderdetailService} from '../../../services/oderdetail.service';

@Component({
  selector: 'app-detail-oder-detail',
  templateUrl: './detail-oder-detail.component.html',
  styleUrls: ['./detail-oder-detail.component.css']
})
export class DetailOderDetailComponent implements OnInit {
  id: number;
  oderdetail: OderDetail;
  constructor(private route: ActivatedRoute, private router: Router, private oderdetailService: OderdetailService) { }

  ngOnInit() {
    this.oderdetail = new OderDetail();
    this.id = this.route.snapshot.params.id;
    // tslint:disable-next-line:max-line-length
    this.oderdetailService.getOderdetail(this.id).subscribe(data => {console.log(data); this.oderdetail = data; }, error => console.log(error));
  }
  list() {
    this.router.navigate(['oderdetails']);
  }

}
