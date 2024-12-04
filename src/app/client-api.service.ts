import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Contact } from './models/contact.interface';

interface StateOption {
  label: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClientApiService {
  private contacts: Contact[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
      streetAddress: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      dateOfBirth: '1992-05-15',
      email: 'jane.smith@example.com',
      phoneNumber: '234-567-8901',
      streetAddress: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001'
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Johnson',
      dateOfBirth: '1988-09-10',
      email: 'michael.j@example.com',
      phoneNumber: '(555) 345-6789',
      streetAddress: '789 Pine Rd',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601'
    },
    {
      id: 4,
      firstName: 'Emily',
      lastName: 'Brown',
      dateOfBirth: '1992-03-25',
      email: 'emily.b@example.com',
      phoneNumber: '(555) 456-7890',
      streetAddress: '321 Elm St',
      city: 'Houston',
      state: 'TX',
      zipCode: '77001'
    },
    {
      id: 5,
      firstName: 'William',
      lastName: 'Davis',
      dateOfBirth: '1983-07-30',
      email: 'william.d@example.com',
      phoneNumber: '(555) 567-8901',
      streetAddress: '654 Maple Dr',
      city: 'Phoenix',
      state: 'AZ',
      zipCode: '85001'
    }
  ];

  private states: StateOption[] = [
    { label: 'Alabama', value: 'AL' },
    { label: 'Alaska', value: 'AK' },
    { label: 'Arizona', value: 'AZ' },
    { label: 'Arkansas', value: 'AR' },
    { label: 'California', value: 'CA' },
    { label: 'Colorado', value: 'CO' },
    { label: 'Connecticut', value: 'CT' },
    { label: 'Delaware', value: 'DE' },
    { label: 'Florida', value: 'FL' },
    { label: 'Georgia', value: 'GA' },
    { label: 'Hawaii', value: 'HI' },
    { label: 'Idaho', value: 'ID' },
    { label: 'Illinois', value: 'IL' },
    { label: 'Indiana', value: 'IN' },
    { label: 'Iowa', value: 'IA' },
    { label: 'Kansas', value: 'KS' },
    { label: 'Kentucky', value: 'KY' },
    { label: 'Louisiana', value: 'LA' },
    { label: 'Maine', value: 'ME' },
    { label: 'Maryland', value: 'MD' },
    { label: 'Massachusetts', value: 'MA' },
    { label: 'Michigan', value: 'MI' },
    { label: 'Minnesota', value: 'MN' },
    { label: 'Mississippi', value: 'MS' },
    { label: 'Missouri', value: 'MO' },
    { label: 'Montana', value: 'MT' },
    { label: 'Nebraska', value: 'NE' },
    { label: 'Nevada', value: 'NV' },
    { label: 'New Hampshire', value: 'NH' },
    { label: 'New Jersey', value: 'NJ' },
    { label: 'New Mexico', value: 'NM' },
    { label: 'New York', value: 'NY' },
    { label: 'North Carolina', value: 'NC' },
    { label: 'North Dakota', value: 'ND' },
    { label: 'Ohio', value: 'OH' },
    { label: 'Oklahoma', value: 'OK' },
    { label: 'Oregon', value: 'OR' },
    { label: 'Pennsylvania', value: 'PA' },
    { label: 'Rhode Island', value: 'RI' },
    { label: 'South Carolina', value: 'SC' },
    { label: 'South Dakota', value: 'SD' },
    { label: 'Tennessee', value: 'TN' },
    { label: 'Texas', value: 'TX' },
    { label: 'Utah', value: 'UT' },
    { label: 'Vermont', value: 'VT' },
    { label: 'Virginia', value: 'VA' },
    { label: 'Washington', value: 'WA' },
    { label: 'West Virginia', value: 'WV' },
    { label: 'Wisconsin', value: 'WI' },
    { label: 'Wyoming', value: 'WY' }
  ];

  constructor() {}

  getContacts(): Observable<Contact[]> {
    return of(this.contacts);
  }

  getStates(): Observable<StateOption[]> {
    return of(this.states);
  }

  searchContacts(criteria: Partial<Contact>): Observable<Contact[]> {
    if (!Object.keys(criteria).length) {
      return of(this.contacts);
    }

    const filteredContacts = this.contacts.filter(contact => {
      return Object.entries(criteria).every(([key, value]) => {
        const contactValue = contact[key as keyof Contact];
        if (!value || !contactValue) return true;
        return contactValue.toString().toLowerCase().includes(value.toString().toLowerCase());
      });
    });

    return of(filteredContacts);
  }
}
