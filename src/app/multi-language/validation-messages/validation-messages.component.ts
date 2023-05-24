import { Component } from '@angular/core';
import { BaseValidationMessagesComponent } from '@popeyelab/ngx-validator';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.scss']
})
export class ValidationMessagesComponent extends BaseValidationMessagesComponent {

}
