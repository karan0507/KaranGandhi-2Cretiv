import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ResultsTableComponent } from './components/results-table/results-table.component';
import { ClientApiService } from './client-api.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    ResultsTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzTableModule,
    NzInputModule,
    NzButtonModule,
    NzSelectModule,
    NzGridModule,
    NzCardModule,
    NzDescriptionsModule,
    NzFormModule,
    NzSpinModule,
    NzTypographyModule,
    NzDatePickerModule
  ],
  providers: [ClientApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
