import { Component, OnInit } from '@angular/core';
import {Size} from '../../../../models/size';
import {ActivatedRoute, Router} from '@angular/router';
import {SizeService} from '../../../../services/size.service';

@Component({
  selector: 'app-update-size',
  templateUrl: './update-size.component.html',
  styleUrls: ['./update-size.component.css']
})
export class UpdateSizeComponent implements OnInit {
  id: number;
  size: Size;
  constructor(private route: ActivatedRoute, private router: Router, private sizeService: SizeService) { }

  ngOnInit() {
    this.size = new Size();
    this.id = this.route.snapshot.params.id;
    this.sizeService.getSize(this.id).subscribe(data => {console.log(data); this.size = data; }, error => console.log(error));
  }
  updateSize() {
    this.sizeService.updateSize(this.id, this.size).subscribe(data => console.log(data), error => console.log(error));
    this.size = new Size();
    this.gotoList();
  }
  onSubmit() {
    this.updateSize();
  }
  gotoList() {
    this.router.navigate(['sizes']);
}

}
