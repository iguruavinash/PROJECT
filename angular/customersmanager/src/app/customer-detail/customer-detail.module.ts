import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDetailRoutingModule } from './customer-detail-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerOrderComponent } from './customer-order.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { EditcustomerComponent } from './editcustomer.component';


@NgModule({
  declarations: [CustomerComponent, CustomerOrderComponent, CustomerDetailComponent, EditcustomerComponent],
  imports: [
    CommonModule,
    CustomerDetailRoutingModule
  ]
})
export class CustomerDetailModule { }
