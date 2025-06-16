import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  private registerApiUrl = '/appApi/api/auth/registrationDetails'; // Update this if using a proxy
  private loginApiUrl = '/appApi/api/auth/login'; // Update this if using a proxy
  private productCreationUrl = '/appApi/api/product/productCreation';
  private catagoryCreationUrl = '/appApi/api/product/catagoryCreation';
  private productListingUrl = '/appApi/api/product/productListing';
  private catagoriesList ='/appApi/api/product/catagoriesList';
  private editCategory ='/appApi/api/product/editCategoryDetail';
  private deleteCategory = '/appApi/api/product/deleteCategory';
  private editProduct = '/appApi/api/product/editProduct';
  private deleteProduct = '/appApi/api/product/deleteProduct';
  private addToCart = '/appApi/api/cart/add';
  private cartDetails ='/appApi/api/cart/summary';
  private deleteCartItem ='/appApi/api/cart/items';
  private quantityAndPriceUpdationUrl ="/appApi/api/cart/items";


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

  getEditCategoryDetail(id:any) : Observable<any> {
    return this.http.get(this.editCategory + "/" + id);
  }

  deleteCategoryDetail(id: any) {
    return this.http.delete(this.deleteCategory+ "/" + id);
  }

  getEditProductDetail(id:any) : Observable<any> {
    return this.http.get(this.editProduct + "/" + id);
  }

  deleteProductDetail(id: any) {
    return this.http.delete(this.deleteProduct+ "/" + id);
  }

  addToCartDetail(addTocartDetails : any){
    return this.http.post(this.addToCart, addTocartDetails);
  }

  retrieveCartDetails() : Observable<any>{
    return this.http.get(this.cartDetails);
  }

  deleteCartItemById(id:any){
      return this.http.delete(this.deleteCartItem+ "/" + id);
  }

  quantityAndPriceUpdation(item:any){
    return this.http.put(this.quantityAndPriceUpdationUrl + "/" + item.id, item);
  }
}
