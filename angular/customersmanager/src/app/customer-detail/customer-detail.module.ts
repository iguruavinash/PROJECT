import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDetailRoutingModule } from './customer-detail-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerOrderComponent } from './customer-order.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { EditcustomerComponent } from './editcustomer.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CustomerComponent, CustomerOrderComponent, CustomerDetailComponent, EditcustomerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomerDetailRoutingModule
  ]
})
export class CustomerDetailModule { }
