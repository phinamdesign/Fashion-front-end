import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  status = false;

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['login']);
    this.status = true;
  }
}
