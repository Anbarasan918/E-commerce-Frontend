import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login-page-component',
  templateUrl: './login-page-component.component.html',
  styleUrls: ['./login-page-component.component.scss']
})
export class LoginPageComponentComponent implements OnInit {
  loginFormSection: any;
  constructor(private formBuilder: FormBuilder,
    private commonService: CommonService,
    private router: Router) { }


  ngOnInit(): void {
    console.log(this.loginFormSection);
    this.loginFormSection = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmmitLoginPageDetails() {
    let formData = this.loginFormSection.value;
    this.commonService.validateUserLogin(formData).subscribe((response: any) => {
      if (response.Status == "SUCCESS") {
        this.commonService.SessionJWTToken = response.jwtToken;
        this.router.navigateByUrl('/homePage');
      }
    });;
  }

}
