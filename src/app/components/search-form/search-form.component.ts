import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClientApiService } from '../../client-api.service';
import { State } from '../../models/contact.interface';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() search = new EventEmitter<any>();
  searchForm: FormGroup;
  loading = false;
  states: State[] = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' }
  ];

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [''],
      city: [''],
      state: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.searchForm.valid) {
      this.loading = true;
      const searchCriteria = Object.entries(this.searchForm.value)
        .filter(([_, value]) => value !== '')
        .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

      this.search.emit(searchCriteria);
      
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }

  resetForm(): void {
    this.searchForm.reset();
    this.search.emit({});
  }
}
