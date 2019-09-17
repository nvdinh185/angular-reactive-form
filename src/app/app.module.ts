import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup.component';
import { Signup3Component } from './signup3/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    Signup2Component,
    Signup3Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
