import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  SocialAuthService,
  FacebookLoginProvider,
  SocialUser,
} from 'angularx-social-login';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin?: boolean = undefined;
  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService
  ) {
    console.log(this.isLoggedin);
  }
//  EAAJ6FRbAvBkBAET2kpLeZA7vg5TIv12weZC9CSsLVYHRZCOyX7WmMv89XX6Ifx8AZAsAFlZCQAXXWc9GmRRZAombWYSUEjKfTNk0Ave4vtABxBy15BzkT53IZCsPoNCVDl7MMuHUfGIG04lHpDOtyR4Hzy3b0PQf9LjlhvyaoekbblKHfc4oM84wG5fka8rJMZAkNDrnMVyV1l70kIe8F021uHKfBG5n6Odyo4jGHbeYpXdhYapwi5Xy
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.socialAuthService.authState.subscribe((user) => {
      console.log(user,"userrr")
      this.socialUser = user;
      this.isLoggedin = user != null;
    });
  }
  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.socialAuthService.signOut();
  }
}