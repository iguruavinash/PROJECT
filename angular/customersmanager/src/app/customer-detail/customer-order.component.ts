import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../core/services/data.service';
import { ICustomer, IOrder } from '../shared/interfaces';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css']
})
export class CustomerOrderComponent implements OnInit {
  orders: IOrder;
  customer: ICustomer;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    // Subscribe to params so if it changes we pick it up.  Could use this.route.parent.snapshot.params["id"] to simplify it.
    this.route.parent.params.subscribe((params: Params) => {
       this.dataService.getCustomerDataById(this.orders).subscribe((customer: ICustomer) => {
        this.customer = customer;
      });
    });
  }
}
