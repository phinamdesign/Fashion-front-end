import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../auth/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  info: any;
  constructor(private token: TokenStorageService,
              private router: Router) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }
  logout() {
    this.token.signOut();
    alert('Logout is successful!');
    this.router.navigateByUrl('/login');
  }

}
