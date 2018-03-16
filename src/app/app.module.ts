import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { HomeModule } from './home/home.module'; // <-- Uncomment this line to get e2e tests to work


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'example'}),
    // HomeModule, // <-- uncomment this line to get e2e tests to work
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
