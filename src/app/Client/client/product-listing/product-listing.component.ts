import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';


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

  displayedColumns: string[] = ['product_name', 'brand', 'category_Description', 'inventory'];
  dataSource:any[] = [];
  constructor(private commonService: CommonService) {  }

  refreshProductListing(){
    this.commonService.retrieveProductListing().subscribe((response:any)=>{
        this.dataSource = response;
    });
    console.log(this.dataSource);
    
    
  }

  ngOnInit(): void {
  }



}
