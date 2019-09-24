import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'customers', loadChildren: './customers/customers.module#CustomersModule'},  // lazy loading
  {path: 'customers/cardview/:id', loadChildren: './customer-detail/customer-detail.module#CustomerDetailModule'},
  {path: 'customers/listview/:id', loadChildren: './customer-detail/customer-detail.module#CustomerDetailModule'},
  // {path: 'orders', loadChildren: 'app/orders/orders.module#OrdersModule'},
  {path: '', redirectTo: 'customers', pathMatch: 'full'} // catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
