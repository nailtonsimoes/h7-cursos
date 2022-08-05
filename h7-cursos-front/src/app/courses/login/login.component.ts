import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: UntypedFormGroup;

  constructor() { }

  ngOnInit() {
    this.loginForm = new UntypedFormGroup(
      {
        email: new UntypedFormControl('',[Validators.required, Validators.email]),
        password: new UntypedFormControl('',[Validators.required, Validators.minLength(6)])
      }
    );
  }

}
