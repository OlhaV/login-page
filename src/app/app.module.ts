import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialLoginComponent} from './components/material-login/material-login.component';
import {SnackbarMessageComponent} from './components/snackbar-message/snackbar-message.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule, GrowlModule, InputTextareaModule, InputTextModule, PasswordModule, RadioButtonModule} from 'primeng/primeng';
import {MatButtonModule, MatInputModule, MatRadioModule, MatSnackBarModule} from '@angular/material';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from "./app.routing";
import { UnsuccessfulRegistrationComponent } from './components/unsuccessful-registration/unsuccessful-registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { OrderDataComponent } from './components/order-data/order-data.component';
import { MenuComponent } from './components/menu/menu.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';
import { UserEditInfoComponent } from './components/user/user-edit-info/user-edit-info.component';
import { UserOrdersComponent } from './components/user/user-orders/user-orders.component';
import { PageNotExistsComponent } from './components/page-not-exists/page-not-exists.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialLoginComponent,
    SnackbarMessageComponent,
    AboutComponent,
    HomeComponent,
    UnsuccessfulRegistrationComponent,
    ForgotPasswordComponent,
    OrderDataComponent,
    MenuComponent,
    UserComponent,
    UserDetailsComponent,
    UserEditInfoComponent,
    UserOrdersComponent,
    PageNotExistsComponent
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
