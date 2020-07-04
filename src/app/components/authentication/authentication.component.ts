import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LogService } from 'src/app/services/services';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})

export class AuthenticationComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private logService: LogService) { }

  ngOnInit(){
    this.initRegForm();
  }

  initRegForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    const val = this.loginForm.value;

    if (val.email && val.password) {
      this.logService.login({ email: val.email, password: val.password });
  }
}

}
