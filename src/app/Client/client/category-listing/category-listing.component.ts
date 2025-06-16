import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.scss']
})
export class CategoryListingComponent implements OnInit {
  dataSource: any;
  editedDetail: any;
  displayedColumns =['name','description','edit','delete','refresh'];


  constructor(private commonService: CommonService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.refreshCategoryListing();
  }


  refreshCategoryListing(){
    this.commonService.retrieveCatagoriesAsList().subscribe( (item: any) => {
      this.dataSource = item;
  })
  }

  onEdit(id:any){
    this.commonService.getEditCategoryDetail(id).subscribe((item :any)=>{
      console.log("item" + item);
      this.editedDetail = item;
      
      const dialogRef = this.dialog.open(EditDialogComponent, {
        width: '600px',
        data: {
          editedDetail: this.editedDetail,
          fromComponent : 'category-listing'
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
    
    this.commonService.deleteCategoryDetail(id).subscribe((item : any) => {
      console.log(item);
    });
  }
}
