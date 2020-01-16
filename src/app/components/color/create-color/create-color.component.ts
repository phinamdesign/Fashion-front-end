import { Component, OnInit } from '@angular/core';
import {Color} from '../../../models/color';
import {ColorService} from '../../../services/color.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-color',
  templateUrl: './create-color.component.html',
  styleUrls: ['./create-color.component.css']
})
export class CreateColorComponent implements OnInit {
  color: Color = new Color();
  submitted = false;
  constructor(private colorService: ColorService, private router: Router) { }

  ngOnInit() {
  }
  newColor(): void {
    this.submitted = false;
    this.color = new Color();
  }
  save() {
    this.colorService.createColor(this.color).subscribe(data => console.log(data), error => console.log(error));
    this.color = new Color();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['colors']);
  }

}
