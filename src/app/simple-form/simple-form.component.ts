import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { equalTo } from '@popeyelab/ngx-validator';
import { Code } from '../code/code.component';

const demoCode: Code = {
  html: `
<form [formGroup]="form">
<div>
  <label>Your Name</label>
  <input type="text" formControlName="name" />
</div>

<div>
  <label>Email Address</label>
  <input type="email" formControlName="email" />
</div>

<div>
  <label>Password</label>
  <input type="password" formControlName="password" />
</div>

<div>
  <label>Confirm Password</label>
  <input type="password" formControlName="confirmPassword" />
</div>

<div>
  <button type="submit">Submit</button>
</div>
</form>`,

  typescript: `
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { equalTo } from '@popeyelab/ngx-validator';
import { Code } from '../code/code.component';

@Component({
selector: 'app-simple-form',
templateUrl: './simple-form.component.html',
styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent {
form = new FormGroup({
  name: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  confirmPassword: new FormControl('', [Validators.required, equalTo('password')]),
});
}
`
};

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, equalTo('password')]),
  });

  code = demoCode;
}
