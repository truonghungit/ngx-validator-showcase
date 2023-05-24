import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';

import { MultiLanguageRoutingModule } from './multi-language-routing.module';
import { MultiLanguageComponent } from './multi-language.component';
import { FormValidatorModule } from '@popeyelab/ngx-validator';
import { ValidationMessagesComponent } from './validation-messages/validation-messages.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MultiLanguageComponent,
    ValidationMessagesComponent
  ],
  imports: [
    CommonModule,
    TranslocoModule,
    ReactiveFormsModule,
    FormValidatorModule.configure({
      validationMessages: {
        required: 'required',
        email: 'email',
      },
      validationMessagesComponent: ValidationMessagesComponent
    }),
    MultiLanguageRoutingModule,

  ]
})
export class MultiLanguageModule { }
