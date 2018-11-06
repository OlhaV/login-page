import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserOrdersComponent} from './components/user-orders/user-orders.component';
import {UserEditInfoComponent} from './components/user-edit-info/user-edit-info.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UserComponent} from './user.component';
import {UserRoutingModule} from './user.routing';
import {SharedAppModule} from '../shared/shared-app.module';

@NgModule({
  declarations: [
    UserOrdersComponent,
    UserEditInfoComponent,
    UserDetailsComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedAppModule
  ]
})
export class UserModule { }
