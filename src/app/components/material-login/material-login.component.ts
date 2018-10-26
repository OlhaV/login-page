import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {SnackbarMessageComponent} from '../snackbar-message/snackbar-message.component';
import {UserModel} from "../../models/user-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-material-login',
  templateUrl: './material-login.component.html',
  styleUrls: ['./material-login.component.scss']
})
export class MaterialLoginComponent {

  @ViewChild('username') username;
  @ViewChild('password') password;

  private users: UserModel[];

  public readonly EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.EMAIL_REGEX)]);

  constructor(public snackBar: MatSnackBar,
              private router: Router) {
    this.initUsers();
  }

  private initUsers() {
    this.users = [
      { login: 'olga', password: 'olga' },
      { login: 'gena', password: 'gena' },
      { login: 'lena', password: 'lena' },
    ]
  }

  public openSnackBar() {
    this.snackBar.openFromComponent(SnackbarMessageComponent, {
      duration: 1000,
    });
  }

  private redirect(path: any[]) {
    console.log(path)
    this.router.navigate(path);
  }

  public authorizationCheck(): void {
    let found = this.users.find((user) => {
      return user.login === this.username.nativeElement.value && user.password === this.password.nativeElement.value
    });
    found ? this.redirect(['']) : this.redirect(['unsuccessful']);
  }

}
