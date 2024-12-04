import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.interface';

interface ColumnItem {
  name: string;
  sortOrder: 'ascend' | 'descend' | null;
  sortFn: ((a: Contact, b: Contact) => number) | null;
  sortDirections: Array<'ascend' | 'descend' | null>;
}

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent {
  @Input() contacts: Contact[] = [];
  @Input() currentPage = 1;
  @Input() pageSize = 10;
  @Input() total = 0;
  @Output() contactSelect = new EventEmitter<Contact>();
  @Output() pageIndexChange = new EventEmitter<number>();

  selectedContact: Contact | null = null;

  listOfColumns: ColumnItem[] = [
    {
      name: 'First Name',
      sortOrder: null,
      sortFn: (a: Contact, b: Contact) => a.firstName.localeCompare(b.firstName),
      sortDirections: ['ascend', 'descend', null]
    },
    {
      name: 'Last Name',
      sortOrder: null,
      sortFn: (a: Contact, b: Contact) => a.lastName.localeCompare(b.lastName),
      sortDirections: ['ascend', 'descend', null]
    },
    {
      name: 'Email',
      sortOrder: null,
      sortFn: (a: Contact, b: Contact) => a.email.localeCompare(b.email),
      sortDirections: ['ascend', 'descend', null]
    },
    {
      name: 'Phone',
      sortOrder: null,
      sortFn: (a: Contact, b: Contact) => a.phoneNumber.localeCompare(b.phoneNumber),
      sortDirections: ['ascend', 'descend', null]
    },
    {
      name: 'City',
      sortOrder: null,
      sortFn: (a: Contact, b: Contact) => a.city.localeCompare(b.city),
      sortDirections: ['ascend', 'descend', null]
    },
    {
      name: 'State',
      sortOrder: null,
      sortFn: (a: Contact, b: Contact) => a.state.localeCompare(b.state),
      sortDirections: ['ascend', 'descend', null]
    }
  ];

  onPageIndexChange(index: number): void {
    this.pageIndexChange.emit(index);
  }

  onContactSelect(contact: Contact): void {
    this.selectedContact = contact;
    this.contactSelect.emit(contact);
  }
}
