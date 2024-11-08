import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './Client/client/client.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthendicatePageComponent } from './Client/authendicate-page/authendicate-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableDataSource } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    AuthendicatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientModule,
    HttpClientModule,
    BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent, ClientModule]
})
export class AppModule { }
