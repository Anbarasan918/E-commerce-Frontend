import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';


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

  displayedColumns: string[] = ['product_name', 'brand', 'category_Description', 'inventory','edit','delete','refresh'];
  dataSource:any[] = [];
  editedDetail: any;
  constructor(private commonService: CommonService,
    private dialog: MatDialog) {  }

  refreshProductListing(){
    this.commonService.retrieveProductListing().subscribe((response:any)=>{
        this.dataSource = response;
    });  
  }

  ngOnInit(): void {
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

}
