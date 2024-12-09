import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-category-creation',
  templateUrl: './category-creation.component.html',
  styleUrls: ['./category-creation.component.scss']
})
export class CategoryCreationComponent implements OnInit {
  categoryCreationForm!:FormGroup;
  constructor(private formBuilder: FormBuilder,
    private commonService: CommonService) { }

    @Input() editedDetail:any;
    localConfig :any ={};

  ngOnInit(): void {
    this.categoryCreationForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required]
    })
    this.localConfig.isEditedDetailsFound= true;
    if(this.editedDetail != null && this.editedDetail !=undefined){
      console.log("From the parent component " , this.editedDetail.value.editedDetail);
      this.categoryCreationForm.patchValue(this.editedDetail.value.editedDetail);
      this.localConfig.isEditedDetailsFound= false;
    }
   
  }

  onSubmmitCategoryDetails() {
    let formData = this.categoryCreationForm.value;
    this.commonService.categoryCreation(formData).subscribe();
  }

}
