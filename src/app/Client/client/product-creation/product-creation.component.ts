import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../common.service';
import { CookieService } from 'ngx-cookie-service';

interface Categories {
  id: string;
  name: string;
}

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.scss']
})
export class ProductCreationComponent implements OnInit {
  selectedValue: any;
  productForm!: FormGroup;
  categoriesList : Categories[] = [];
  localConfig: any ={};
  @Input() editedDetail:any;

  constructor(private formBuilder: FormBuilder,
    private commonService: CommonService,
    @Inject(CookieService) private cookieService :CookieService,
  ) { }
 

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      product_name: ['', Validators.required],
      brand: ['', Validators.required],
      category: ['', Validators.required],
      inventory: ['', Validators.required],
      category_Description: ['']
    })
    this.retrieveCatagories();
    
    this.localConfig.isEditedDetailsFound= true;
    if(this.editedDetail !=null && this.editedDetail !=undefined){
      console.log("From the parent component " , this.editedDetail.value.editedDetail);
      this.productForm.patchValue(this.editedDetail.value.editedDetail);
      this.localConfig.isEditedDetailsFound= false;
    }
  }

  setCategoryName(selectedItem : any){
      this.productForm.patchValue({"category_Description":selectedItem.name});
  }

  retrieveCatagories() {
    this.commonService.retrieveCatagoriesAsList().subscribe((item : any) => {
      // this.cookieService.set('jwtToken', item.jwtToken, new Date('2025-01-01'), '/', '', true, 'Strict') 
      this.categoriesList = item;
    });
  }

  onSubmmitProductDetails() {
    let formData = this.productForm.value;
    this.commonService.productCreation(formData).subscribe();
  }
  
}
