import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NG-ZORRO modules
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';

@NgModule({
  imports: [
    CommonModule,
    NzButtonModule,
    NzInputModule,
    NzCardModule,
    NzIconModule,
    NzGridModule,
    NzTableModule,
    NzSpinModule,
    NzPaginationModule,
  ],
  exports: [
    NzButtonModule,
    NzInputModule,
    NzCardModule,
    NzIconModule,
    NzGridModule,
    NzTableModule,
    NzSpinModule,
    NzPaginationModule,
  ],
})
export class SharedModule { }
