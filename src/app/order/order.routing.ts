import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {OrderDataComponent} from './order-data/order-data.component';
import {OrdersListComponent} from './orders-list/orders-list.component';
import {OrderComponent} from './order.component';

export const ORDER_ROUTES: Routes = [
  {
    path: '', component: OrderComponent, children: [
      {path: '', redirectTo: 'list'},
      {path: 'data/:id', component: OrderDataComponent},
      {path: 'list', component: OrdersListComponent},
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(ORDER_ROUTES)],
  exports: [RouterModule]
})
export class OrderRoutingModule {
}
