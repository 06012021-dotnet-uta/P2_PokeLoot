import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from '../Models/login'
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


export class LoginPageComponent implements OnInit {

  isFormValid: boolean = false;
  isCredentialsValid: boolean = false;

  constructor(private authenticateService: AuthenticationService) { }

  ngOnInit(): void {
  }

  OnSubmit(loginInForm: NgForm) {

    if (!loginInForm.valid) {
      this.isFormValid = true;
      this.isCredentialsValid = false;
      return;
    }

    const login: Login = {
      email: loginInForm.value.email,
      password: loginInForm.value.password
    }

    if (!this.authenticateService.Authenticate(login)) {
      this.isFormValid = false;
      this.isCredentialsValid = true;
    }
  }

}
