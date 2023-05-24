import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import { equalTo } from '@popeyelab/ngx-validator';

@Component({
  selector: 'app-multi-language',
  templateUrl: './multi-language.component.html',
  styleUrls: ['./multi-language.component.scss']
})
export class MultiLanguageComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required, equalTo('password', 'confirmPasswordNotMatch')]),
  });

  constructor(private translocoService: TranslocoService) {
  }

  setLanguage(language: string): void {
    this.translocoService.setActiveLang(language);
  }
}
