import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Code } from '../code/code.component';
import { equalTo } from '@popeyelab/ngx-validator';


const simpleLoginCode: Code = {
  html: `
  <div class="card login-card">
  <div class="card-body">
    <form (ngSubmit)="onSubmit()" [formGroup]="loginForm">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" formControlName="email">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" formControlName="password">
      </div>
      <div class="d-grid">
        <button class="btn btn-primary" type="submit">Login</button>
      </div>
    </form>
  </div>
</div>
  `,
  typescript: `
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(private formBuilder: FormBuilder) { }

  onSubmit(): void {
    console.log(this.loginForm)
  }
}
  `,
}

const nestedFormCode: Code = {
  html: `
<div class="card">
  <div class="card-body">
    <form (ngSubmit)="onSubmit()" [formGroup]="registerForm">
      <div class="row g-3">
        <div class="col mb-3">
          <label for="first-name" class="form-label">First name</label>
          <input type="text" class="form-control" id="first-name" formControlName="firstName">
        </div>
        <div class="col mb-3">
          <label for="last-name" class="form-label">Last name</label>
          <input type="text" class="form-control" id="last-name" formControlName="lastName">
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="email" formControlName="email">
        </div>
      </div>
      <div formGroupName="address">
        <div class="row">
          <div class="col mb-3">
            <label for="street" class="form-label">Street</label>
            <input type="text" class="form-control" id="street" formControlName="street">
          </div>
          <div class="col mb-3">
            <label for="city" class="form-label">City</label>
            <input type="text" class="form-control" id="city" formControlName="city">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" formControlName="password">
        </div>
        <div class="col mb-3">
          <label for="confirm-password" class="form-label">Confirm password</label>
          <input type="password" class="form-control" id="confirm-password" formControlName="confirmPassword">
        </div>
      </div>

      <div class="d-grid">
        <button class="btn btn-primary" type="submit">Register</button>
      </div>
    </form>
  </div>
</div>
`,
  typescript: `
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { equalTo } from '@popeyelab/ngx-validator';

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent {
  registerForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    address: this.formBuilder.group({
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
    }),
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, equalTo('password', 'Confirm password not match')]],
  });

  constructor(private formBuilder: FormBuilder) { }

  onSubmit(): void {
  }
}
`
};

@Component({
  selector: 'app-bootstrap',
  templateUrl: './bootstrap.component.html',
  styleUrls: ['./bootstrap.component.scss']
})
export class BootstrapComponent {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  registerForm = this.formBuilder.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    address: this.formBuilder.group({
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
    }),
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, equalTo('password', 'Confirm password not match')]],
  });

  simpleLoginCode = simpleLoginCode;
  nestedFormCode = nestedFormCode;

  constructor(private formBuilder: FormBuilder) { }

  onSubmit(): void {
    console.log(this.loginForm)
  }
}
