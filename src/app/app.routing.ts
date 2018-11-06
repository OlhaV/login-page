import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {NgModule} from "@angular/core";
import {UnsuccessfulRegistrationComponent} from "./components/unsuccessful-registration/unsuccessful-registration.component";
import {MaterialLoginComponent} from "./components/material-login/material-login.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'unsuccessful', component: UnsuccessfulRegistrationComponent },
  { path: 'logout', component: MaterialLoginComponent },
  { path: 'order', loadChildren: 'app/order/order.module#OrderModule' },
  { path: 'user/:id', loadChildren: 'app/user/user.module#UserModule' },
  //   // { path: '**', component: PageNotExistsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
