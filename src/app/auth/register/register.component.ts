import { Component, OnInit } from '@angular/core';
import {SignUpInfo} from '../signup-infor';
import {AuthService} from '../auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  returnUrl: string;
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3),  Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]),
    // confirmPassword: new FormControl(''),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]),
    address: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),

  });
  constructor(private authService: AuthService, private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/login';
  }

  signUp() {
    const {name , username , email , password} = this.registerForm.value;
    const signUpInfoForm = new SignUpInfo(name, username, email, password);

    this.authService.signUp(signUpInfoForm).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        alert('Register Successful !');
        this.router.navigateByUrl(this.returnUrl);
      },
      err => {
        console.log(err);
        this.isSignUpFailed = true;
        this.errorMessage = err.error.message;
      }
    );
  }
}
