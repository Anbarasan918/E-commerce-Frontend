import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-category-creation',
  templateUrl: './category-creation.component.html',
  styleUrls: ['./category-creation.component.scss']
})
export class CategoryCreationComponent implements OnInit {
  categoryCreationForm:any;
  constructor(private formBuilder: FormBuilder,
    private commonService: CommonService) { }

  ngOnInit(): void {
    this.categoryCreationForm = this.formBuilder.group({
      id: ['', Validators.required],
      category_name: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  onSubmmitCategoryDetails() {
    let formData = this.categoryCreationForm.value;
    this.commonService.categoryCreation(formData).subscribe();
  }

}
