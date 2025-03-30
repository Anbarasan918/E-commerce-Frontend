import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientModule } from './Client/client/client.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthendicatePageComponent } from './Client/authendicate-page/authendicate-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtInterceptorInterceptor } from './Client/jwt-interceptor.interceptor';
import { CookieService } from 'ngx-cookie-service';

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
  providers: [{provide : HTTP_INTERCEPTORS, useClass:JwtInterceptorInterceptor, multi:true},CookieService
  ],
  bootstrap: [AppComponent, ClientModule]
})
export class AppModule { }
