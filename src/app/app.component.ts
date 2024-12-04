import { Component, OnInit } from '@angular/core';
import { Contact } from './models/contact.interface';
import { ClientApiService } from './client-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contacts: Contact[] = [];
  currentPage = 1;
  pageSize = 5;
  total = 0;
  selectedContact: Contact | null = null;
  loading = false;

  constructor(private clientApiService: ClientApiService) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts(searchCriteria: Partial<Contact> = {}) {
    this.loading = true;
    this.clientApiService.searchContacts(searchCriteria).subscribe({
      next: (data) => {
        this.contacts = data;
        this.total = data.length;
        this.selectedContact = null;
      },
      error: (error) => {
        console.error('Error loading contacts:', error);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  onSearch(searchCriteria: Partial<Contact>): void {
    this.currentPage = 1;
    this.loadContacts(searchCriteria);
  }

  onContactSelect(contact: Contact): void {
    this.selectedContact = contact;
  }

  onPageIndexChange(index: number): void {
    this.currentPage = index;
  }

  onPageSizeChange(size: number): void {
    this.pageSize = size;
    this.currentPage = 1;
  }

  get paginatedContacts(): Contact[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.contacts.slice(startIndex, startIndex + this.pageSize);
  }
}
