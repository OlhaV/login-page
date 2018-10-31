import {Routes} from '@angular/router';
import {UserDetailsComponent} from './user-details/user-details.component';
import {UserEditInfoComponent} from './user-edit-info/user-edit-info.component';
import {UserOrdersComponent} from './user-orders/user-orders.component';

export const USER_CHILD_ROUTES: Routes = [
  { path: 'user-details', component: UserDetailsComponent},
  { path: 'user-edit-info', component: UserEditInfoComponent},
  { path: 'user-orders', component: UserOrdersComponent},
];
