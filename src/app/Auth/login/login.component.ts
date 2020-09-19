import { users } from './../../Shared/mock-data/users.mock';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted: boolean;
  userSuccess: boolean;

  constructor(private formBuilder: FormBuilder,private router:Router) {}

  ngOnInit(): void {
    this.loginForm();
  }

  loginForm() {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    const fetchIndex = users.findIndex(
      (val) => val.userName === this.form.controls.userName.value
    );

    if (fetchIndex !== -1) 
    {
      if (
        this.form.controls.userName.value === users[fetchIndex].userName &&
        this.form.controls.password.value === users[fetchIndex].password
      ) 
      {
        this.router.navigate(['/search']);
        sessionStorage.setItem('userToken', 'ABCDEF12345');
      }
    } 
    else {
      this.userSuccess = true;
    }
  }
}
