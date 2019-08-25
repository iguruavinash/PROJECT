import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  model: any = { };
  constructor() { }

  ngOnInit() {
  }
  formDetails(d) {
    console.log(d);
  }
  onSubmit() {
    alert(JSON.stringify(this.model));
  }

}


