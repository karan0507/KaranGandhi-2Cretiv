import { Component, OnInit } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';

export interface Data {
  id: number;
  name: string;
  age: number;
  address: string;
  disabled: boolean;
}

@Component({
  selector: 'nz-demo-table-row-selection-and-operation',
  standalone: true,
  imports: [NzButtonModule, NzTableModule],
  template: `
    <div class="send-request">
      <button
        nz-button
        nzType="primary"
        [disabled]="selectedId === null"
        [nzLoading]="loading"
        (click)="sendRequest()"
      >
        Send Request
      </button>
      <span>Selected {{ selectedId !== null ? '1' : '0' }} item</span>
    </div>
    <nz-table
      #rowSelectionTable
      nzShowPagination
      nzShowSizeChanger
      [nzData]="listOfData"
      (nzCurrentPageDataChange)="onCurrentPageDataChange($event)"
    >
      <thead>
        <tr>
          <th>Select</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        @for (data of rowSelectionTable.data; track data) {
          <tr>
            <td
              [nzChecked]="selectedId === data.id"
              [nzDisabled]="data.disabled"
              (nzCheckedChange)="onItemChecked(data.id, $event)"
            ></td>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.address }}</td>
          </tr>
        }
      </tbody>
    </nz-table>
  `,
  styles: [
    `
      .send-request {
        margin-bottom: 16px;
      }

      .send-request span {
        margin-left: 8px;
      }
    `
  ]
})
export class TableSingleSelectionComponent implements OnInit {
  loading = false;
  listOfData: readonly Data[] = [];
  listOfCurrentPageData: readonly Data[] = [];
  selectedId: number | null = null;

  onCurrentPageDataChange(listOfCurrentPageData: readonly Data[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.selectedId = checked ? id : null;
  }

  sendRequest(): void {
    this.loading = true;
    const selectedData = this.listOfData.find(data => data.id === this.selectedId);
    console.log(selectedData);
    setTimeout(() => {
      this.selectedId = null;
      this.loading = false;
    }, 1000);
  }

  ngOnInit(): void {
    // Creating 200 items for better pagination demonstration
    this.listOfData = new Array(200).fill(0).map((_, index) => ({
      id: index,
      name: `Edward King ${index}`,
      age: Math.floor(Math.random() * 30) + 25, // Random age between 25-54
      address: `London, Park Lane no. ${index}`,
      disabled: index % 10 === 0 // Disable every 10th row
    }));
  }
}
