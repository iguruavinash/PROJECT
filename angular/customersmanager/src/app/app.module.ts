import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Main routes for application
    CoreModule, // Singleton objects (services, components that are loaded only once, etc.)
    HttpClientModule,
    LoginModule       // Eager loaded since we may need to go here right away as browser loads based on route user enters
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
