import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact, State } from './models/contact.interface';
import { US_STATES } from './data/static-data';
import { CONTACTS_DATA } from './data/contacts-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientApiService {
  constructor() {}

  getContacts(): Observable<Contact[]> {
    return of(CONTACTS_DATA);
  }

  getStates(): Observable<State[]> {
    return of(US_STATES);
  }

  searchContacts(criteria: Partial<Contact>): Observable<Contact[]> {
    if (!criteria || Object.keys(criteria).length === 0) {
      return this.getContacts();
    }

    return this.getContacts().pipe(
      map(contacts => {
        return contacts.filter(contact => {
          return Object.entries(criteria).every(([key, value]) => {
            const contactValue = contact[key as keyof Contact];
            if (!value || !contactValue) return true;
            return contactValue.toString().toLowerCase().includes(value.toString().toLowerCase());
          });
        });
      })
    );
  }
}
