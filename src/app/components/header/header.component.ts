import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../auth/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../auth/auth.service';
import {AuthLoginInfo} from '../../auth/login-infor';
import {User} from '../../models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;
  loginInfo: AuthLoginInfo;
  returnUrl: string;
  info: { name: string; avatar: string; userId: string; authorities: string[]; token: string; username: string };
  constructor(private authService: AuthService, private token: TokenStorageService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
  ) { }

  ngOnInit() {
    this.info = {
      name: this.token.getName(),
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities(),
      userId: this.token.getUserId(),
      avatar: this.token.getAvatar()
    };
    console.log(this.info);
    if (this.info.userId) {
      this.gerUserByUserID();
    }
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/login';
  }

  logout() {
    this.token.signOut();
    this.router.navigateByUrl(this.returnUrl);
  }

  gerUserByUserID() {
    this.userService.getUserById(this.info.userId).subscribe(
      result => {
        this.user = result;
      }, error => {
        console.log(error);
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }
}
