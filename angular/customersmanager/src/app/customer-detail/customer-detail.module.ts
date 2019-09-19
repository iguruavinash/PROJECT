import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDetailRoutingModule } from './customer-detail-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerOrderComponent } from './customer-order.component';
import { CustomerDetailComponent } from './customer-detail.component';


@NgModule({
  declarations: [CustomerComponent, CustomerOrderComponent, CustomerDetailComponent],
  imports: [
    CommonModule,
    CustomerDetailRoutingModule
  ]
})
export class CustomerDetailModule { }
