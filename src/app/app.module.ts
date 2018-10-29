import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialLoginComponent} from './components/material-login/material-login.component';
import {PrimengLoginComponent} from './components/primeng-login/primeng-login.component';
import {SnackbarMessageComponent} from './components/snackbar-message/snackbar-message.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule, GrowlModule, InputTextareaModule, InputTextModule, PasswordModule, RadioButtonModule} from 'primeng/primeng';
import {MatButtonModule, MatInputModule, MatRadioModule, MatSnackBarModule} from '@angular/material';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from "./app.routing";
import { UnsuccessfulRegistrationComponent } from './components/unsuccessful-registration/unsuccessful-registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialLoginComponent,
    PrimengLoginComponent,
    SnackbarMessageComponent,
    AboutComponent,
    HomeComponent,
    UnsuccessfulRegistrationComponent,
    ForgotPasswordComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    PasswordModule,
    RadioButtonModule,
    ButtonModule,
    GrowlModule,
    MatRadioModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SnackbarMessageComponent],
})
export class AppModule {
}
