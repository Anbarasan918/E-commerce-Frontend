import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register-page-component',
  templateUrl: './register-page-component.component.html',
  styleUrls: ['./register-page-component.component.scss']
})
export class RegisterPageComponentComponent implements OnInit {
  bioSection: any;

  constructor(private formBuilder: FormBuilder,
    private commonService: CommonService,
    private router: Router) { }



  ngOnInit(): void {
    this.bioSection = this.formBuilder.group({
      userId: ['', Validators.required],
      name: ['', Validators.required],
      emailId: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    })
  }

  onSubmmitRegisterPageDetails() {
    let formData = this.bioSection.value;

    this.commonService.registerUserDetails(formData).subscribe((response: any) => {
      if (response.Status == "SUCCESS") {
        this.router.navigateByUrl('/loginPage');
      }
    });;

  }

}
