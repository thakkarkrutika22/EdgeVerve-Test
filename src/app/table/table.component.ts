import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  tableData = [
    { caseCategory: 'Category 1', caseSubCategory: 'Sub Category A', fieldName: 'Field 1', accessType: 'Read', maskingPreview: 'XXXXX6777' },
    { caseCategory: 'Category 2', caseSubCategory: 'Sub Category B', fieldName: 'Field 2', accessType: 'Write', maskingPreview: '7776XXXXX' },
    { caseCategory: 'Category 3', caseSubCategory: 'Sub Category C', fieldName: 'Field 3', accessType: 'Read', maskingPreview: 'XXXXXX3344' },
    { caseCategory: 'Category 4', caseSubCategory: 'Sub Category D', fieldName: 'Field 4', accessType: 'Write', maskingPreview: '6567XXXXX' }
  ];

  viewItem(row: any) {
    console.log('View item:', row);
  }

  editItem(row: any) {
    console.log('Edit item:', row);
  }
}
