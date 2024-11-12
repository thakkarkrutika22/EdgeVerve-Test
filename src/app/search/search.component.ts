import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomChipsComponent } from "../custom-chips/custom-chips.component";
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule, CustomChipsComponent, TableComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
searchForm!: FormGroup;

  ngOnInit() {
    this.searchForm = new FormGroup({
      role: new FormControl('', Validators.required),
      accessControlType: new FormControl('',[Validators.required]),
      caseCategory: new FormControl(),
      caseSubCategory: new FormControl()
    })
  }

  onItemsChange(items: string[]) {
    console.log('Current items:', items);
  }
}
