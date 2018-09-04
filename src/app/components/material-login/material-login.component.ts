import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {SnackbarMessageComponent} from '../snackbar-message/snackbar-message.component';

@Component({
  selector: 'app-material-login',
  templateUrl: './material-login.component.html',
  styleUrls: ['./material-login.component.scss']
})
export class MaterialLoginComponent {

  public readonly EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.EMAIL_REGEX)]);

  constructor(public snackBar: MatSnackBar) {
  }

  public openSnackBar() {
    this.snackBar.openFromComponent(SnackbarMessageComponent, {
      duration: 1000,
    });
  }

}
