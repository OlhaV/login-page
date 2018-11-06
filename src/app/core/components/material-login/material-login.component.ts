import {Component, ViewChild, EventEmitter, Output, ElementRef} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {SnackbarMessageComponent} from '../snackbar-message/snackbar-message.component';
import {UserModel} from "../../../models/user-model";
import {AuthorizationService} from "../../../services/authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-material-login',
  templateUrl: './material-login.component.html',
  styleUrls: ['./material-login.component.scss']
})
export class MaterialLoginComponent {

  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  @Output() forgotPasswordEvent = new EventEmitter();

  private users: UserModel[];

  constructor(public snackBar: MatSnackBar,
              private authService: AuthorizationService,
              private router: Router) {
    this.initUsers();
  }

  private initUsers(): void {
    this.users = [
      { login: 'olga', password: 'olga' },
      { login: 'gena', password: 'gena' },
      { login: 'lena', password: 'lena' },
    ]
  }

  public openSnackBar(): void {
    this.snackBar.openFromComponent(SnackbarMessageComponent, {
      duration: 1000,
    });
  }

  private loginPasswordCheck(): UserModel {
    return this.users.find((user) => {
      return user.login === this.username.nativeElement.value && user.password === this.password.nativeElement.value
    });
  }

  public authorizationClick(): void {
    if (this.loginPasswordCheck()) {
      this.authService.loginSuccessfulEvent();
    } else {
      this.openSnackBar();
      this.authService.loginUnsuccessfulEvent();
    }
  }

  public forgotPasswordClick(): void {
    this.router.navigate(['forgot-password']);
    this.forgotPasswordEvent.emit();
  }
}
