import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {NgModule} from "@angular/core";
import {UnsuccessfulRegistrationComponent} from "./components/unsuccessful-registration/unsuccessful-registration.component";
import {MaterialLoginComponent} from "./components/material-login/material-login.component";
import {OrderDataComponent} from './components/order-data/order-data.component';
import {UserComponent} from './components/user/user.component';
import {USER_CHILD_ROUTES} from './components/user/user.routes';
import {PageNotExistsComponent} from './components/page-not-exists/page-not-exists.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'unsuccessful', component: UnsuccessfulRegistrationComponent },
  { path: 'logout', component: MaterialLoginComponent },
  { path: 'order-data/:id', component: OrderDataComponent },
  { path: 'order-data', redirectTo: 'order-data/1' },
  { path: 'user/:id', component: UserComponent, children: USER_CHILD_ROUTES },
  { path: '**', component: PageNotExistsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
