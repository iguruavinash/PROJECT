import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TemplateDrivenComponent} from './templatedriven/templatedriven.component';
import { from } from 'rxjs';




@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
