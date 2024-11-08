import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../common.service';

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

  constructor(private formBuilder: FormBuilder,
    private commonService: CommonService
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
    
  }

  setCategoryName(selectedItem : any){
      this.productForm.patchValue({"category_Description":selectedItem.name});
  }

  retrieveCatagories() {
    this.commonService.retrieveCatagoriesAsList().subscribe((item : any) => {
      this.categoriesList = item;
    });
  }

  onSubmmitProductDetails() {
    let formData = this.productForm.value;
    this.commonService.productCreation(formData).subscribe();
  }
  
}
