import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialLoginComponent} from './components/material-login/material-login.component';
import {SnackbarMessageComponent} from './components/snackbar-message/snackbar-message.component';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {UnsuccessfulRegistrationComponent} from './components/unsuccessful-registration/unsuccessful-registration.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {MenuComponent} from './components/menu/menu.component';
import {PageNotExistsComponent} from './components/page-not-exists/page-not-exists.component';
import {MatButtonModule, MatInputModule, MatRadioModule, MatSnackBarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [
    MaterialLoginComponent,
    SnackbarMessageComponent,
    AboutComponent,
    HomeComponent,
    UnsuccessfulRegistrationComponent,
    ForgotPasswordComponent,
    MenuComponent,
    PageNotExistsComponent
  ],
  exports: [
    MenuComponent,
    MaterialLoginComponent,
    ForgotPasswordComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('Core module is already exported.');
    }
  }
}
