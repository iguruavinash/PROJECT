import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  model: any = { };
  selectedDay: string = '';

selectChangeHandler(event: any) {
  this.selectedDay = event.target.value;
}

  constructor() { }

  ngOnInit() {
    this.model.firstName = 'FirstName';
    this.model.lastName = 'LastName';
    this.model.city = '';
  }
  // formDetails(d) {
  //   console.log(d);
  // }
  onSubmit(e) {
    console.log(e);
    // alert(JSON.stringify(this.model));
  }

}


