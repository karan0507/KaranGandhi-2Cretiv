import { Component } from '@angular/core';
import { ClientApiService } from './client-api.service';
import { Contact } from './models/contact.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[] = [];
  selectedContact: Contact | null = null;
  loading = false;
  currentPage = 1;
  pageSize = 10;
  total = 0;

  constructor(private clientApiService: ClientApiService) {
    this.loadContacts();
  }

  loadContacts(searchCriteria: Partial<Contact> = {}): void {
    this.loading = true;
    this.clientApiService.searchContacts(searchCriteria).subscribe({
      next: (contacts) => {
        this.contacts = contacts;
        this.total = contacts.length;
        this.currentPage = 1;
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
    this.loadContacts(searchCriteria);
  }

  onContactSelect(contact: Contact): void {
    this.selectedContact = contact;
  }

  onPageIndexChange(pageIndex: number): void {
    this.currentPage = pageIndex;
  }

  get paginatedContacts(): Contact[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.contacts.slice(startIndex, startIndex + this.pageSize);
  }
}
