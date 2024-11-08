import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient
  ) { }

  private registerApiUrl = '/appApi/api/registrationDetails'; // Update this if using a proxy
  private loginApiUrl = '/appApi/api/loginConntroller'; // Update this if using a proxy
  private productCreationUrl = '/appApi/api/productCreation';
  private catagoryCreationUrl = '/appApi/api/catagoryCreation';
  private productListingUrl = '/appApi/api/productListing';
  private catagoriesList ='/appApi/api/catagoriesList';

  registerUserDetails(formdata: any) :Observable<any> {
   return this.http.post(this.registerApiUrl, formdata);
  }

  validateUserLogin(formData: any) :Observable<any> {
    return this.http.post(this.loginApiUrl, formData);
  }

  productCreation(formData: any) :Observable<any> {
   return this.http.post(this.productCreationUrl, formData);
  }

  retrieveProductListing() :Observable<any> {
    return this.http.get(this.productListingUrl);
  }

  categoryCreation(formData: any) :Observable<any> {
   return this.http.post(this.catagoryCreationUrl, formData);
  }

  retrieveCatagoriesAsList() : Observable<any> {
     return this.http.get(this.catagoriesList);
  }

}