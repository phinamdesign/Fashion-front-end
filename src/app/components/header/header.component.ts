import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../auth/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../auth/auth.service';
import {AuthLoginInfo} from '../../auth/login-infor';
import {User} from '../../models/User';
import {ProductService} from '../../services/product.service';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {Observable, Subscription} from 'rxjs';
import {Product} from '../../models/product';
import {ShoppingCart} from '../../models/shopping-cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public itemCount: number;
  public products: Observable<Product[]>;
  private cartSubscription: Subscription;
  public cart: Observable<ShoppingCart>;
  user: User;
  loginInfo: AuthLoginInfo;
  returnUrl: string;
  info: { name: string; avatar: string; userId: string; authorities: string[]; token: string; username: string };
  constructor(private authService: AuthService, private token: TokenStorageService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private productsService: ProductService,
              private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.productsService.getListProduct();
    this.cart = this.shoppingCartService.get();
    this.cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
    });
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
    const choice = confirm('Are you sure to logout this page?');
    if (choice) {
      this.token.signOut();
      this.router.navigateByUrl(this.returnUrl);
    }
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
