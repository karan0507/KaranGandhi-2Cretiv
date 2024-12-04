import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.interface';
import { ClientApiService } from '../../client-api.service';

interface ColumnItem {
  name: string;
  sortOrder: 'ascend' | 'descend' | null;
  sortFn: ((a: Contact, b: Contact) => number) | null;
  sortDirections: Array<'ascend' | 'descend' | null>;
  width?: string;
}

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css']
})
export class ResultsTableComponent implements OnInit {
  @Input() contacts: Contact[] = [];
  @Input() currentPage = 1;
  @Input() pageSize = 5;
  @Input() total = 0;

  @Output() pageIndexChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();
  @Output() contactSelect = new EventEmitter<Contact>();

  selectedContact: Contact | null = null;
  selectedId: number | null = null;

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

  constructor(private clientApiService: ClientApiService) {}

  ngOnInit() {
    if (this.contacts.length === 0) {
      this.loadContacts();
    }
  }

  loadContacts() {
    this.clientApiService.getContacts().subscribe(data => {
      this.contacts = data;
      this.total = data.length;
    });
  }

  onPageIndexChange(index: number): void {
    this.currentPage = index;
    this.pageIndexChange.emit(index);
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.currentPage = 1;
    this.pageSizeChange.emit(size);
  }

  onContactSelect(id: number, checked: boolean): void {
    this.selectedId = checked ? id : null;
    this.selectedContact = checked ? this.contacts.find(contact => contact.id === id) || null : null;
    if (this.selectedContact) {
      this.contactSelect.emit(this.selectedContact);
    }
  }
}
