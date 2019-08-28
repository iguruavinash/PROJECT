import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TemplateDrivenComponent} from './templatedriven/templatedriven.component';
import { from } from 'rxjs';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';




@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    ReactiveformComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
