import { Component, Inject, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { CookieService } from 'ngx-cookie-service';


export interface ProductListingInterface {
  product_name: string;
  brand: string;
  inventory: number;
  category: number;
}


@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {

  displayedColumns: string[] = ['productName', 'brand', 'categoryDescription', 'inventory','edit','delete','add_to_cart','refresh'];
  dataSource:any[] = [];
  editedDetail: any;
  constructor(private commonService: CommonService,
    private dialog: MatDialog,
  @Inject(CookieService) private cookieService :CookieService) {  }

  refreshProductListing(){
    this.commonService.retrieveProductListing().subscribe((response:any)=>{
      // this.cookieService.set('jwtToken', response.jwtToken, new Date('2025-02-25'), '/', '', true, 'Strict') 
        this.dataSource = response;
    });  
  }

  ngOnInit(): void {
    this.refreshProductListing();
  }

  onEdit(id:any){
    this.commonService.getEditProductDetail(id).subscribe((item :any)=>{
      console.log("item" + item);
      this.editedDetail = item;
      
      const dialogRef = this.dialog.open(EditDialogComponent, {
        width: '600px',
        data: {
          editedDetail: this.editedDetail,
          fromComponent : 'product-listing'
        }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Dialog result:', result); // Handle the updated data here
        }
      });
    });    
  }

  onDelete(id:any){
    console.log("id =>" , id);
    
    this.commonService.deleteProductDetail(id).subscribe((item : any) => {
      console.log(item);
    });
  }

  addToCart(elements : any){
    elements.productId= elements.id;
    elements.quantity= 1;
    this.commonService.addToCartDetail(elements).subscribe((item : any) => {
      console.log(item);
    });
  }

}
