import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrderDataComponent } from './order-data/order-data.component';
import { OrderComponent } from './order.component';
import {OrderRoutingModule} from './order.routing';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  declarations: [
    OrdersListComponent,
    OrderDataComponent,
    OrderComponent
  ]
})
export class OrderModule { }
