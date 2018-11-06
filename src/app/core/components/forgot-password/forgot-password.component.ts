import { Component } from '@angular/core';
import {Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  public readonly EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.EMAIL_REGEX)
  ]);

}
