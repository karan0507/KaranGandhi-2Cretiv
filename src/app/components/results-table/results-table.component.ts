import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.interface';

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
export class ResultsTableComponent {
  @Input() contacts: Contact[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phoneNumber: '123-456-7890', city: 'New York', state: 'NY', dateOfBirth: '01/01/1990', streetAddress: '123 Elm St', zipCode: '10001' },
    { id: 2, firstName: 'John', lastName: 'Doe', email: 'john.doe2@example.com', phoneNumber: '123-456-7891', city: 'New York', state: 'NY', dateOfBirth: '02/02/1991', streetAddress: '456 Oak St', zipCode: '10002' },
    { id: 3, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com', phoneNumber: '987-654-3210', city: 'Los Angeles', state: 'CA', dateOfBirth: '03/03/1992', streetAddress: '789 Pine St', zipCode: '90001' },
    { id: 4, firstName: 'Alice', lastName: 'Smith', email: 'alice.smith@example.com', phoneNumber: '555-123-4567', city: 'Chicago', state: 'IL', dateOfBirth: '04/04/1993', streetAddress: '101 Maple St', zipCode: '60601' },
    { id: 5, firstName: 'Bob', lastName: 'Smith', email: 'bob.smith@example.com', phoneNumber: '555-987-6543', city: 'Chicago', state: 'IL', dateOfBirth: '05/05/1994', streetAddress: '202 Birch St', zipCode: '60602' },
    { id: 6, firstName: 'Charlie', lastName: 'Brown', email: 'charlie.brown@example.com', phoneNumber: '555-111-2222', city: 'Houston', state: 'TX', dateOfBirth: '06/06/1995', streetAddress: '303 Cedar St', zipCode: '77001' },
    { id: 7, firstName: 'David', lastName: 'Wilson', email: 'david.wilson@example.com', phoneNumber: '555-333-4444', city: 'Phoenix', state: 'AZ', dateOfBirth: '07/07/1996', streetAddress: '404 Walnut St', zipCode: '85001' },
    { id: 8, firstName: 'Eva', lastName: 'Johnson', email: 'eva.johnson@example.com', phoneNumber: '555-555-6666', city: 'Philadelphia', state: 'PA', dateOfBirth: '08/08/1997', streetAddress: '505 Spruce St', zipCode: '19101' },
    { id: 9, firstName: 'Frank', lastName: 'Miller', email: 'frank.miller@example.com', phoneNumber: '555-666-7777', city: 'San Francisco', state: 'CA', dateOfBirth: '09/09/1998', streetAddress: '606 Pine St', zipCode: '94101' },
    { id: 10, firstName: 'Grace', lastName: 'Lee', email: 'grace.lee@example.com', phoneNumber: '555-777-8888', city: 'Seattle', state: 'WA', dateOfBirth: '10/10/1999', streetAddress: '707 Cedar St', zipCode: '98101' },
    { id: 11, firstName: 'Hank', lastName: 'Green', email: 'hank.green@example.com', phoneNumber: '555-888-9999', city: 'Denver', state: 'CO', dateOfBirth: '11/11/2000', streetAddress: '808 Birch St', zipCode: '80201' },
    { id: 12, firstName: 'Ivy', lastName: 'White', email: 'ivy.white@example.com', phoneNumber: '555-999-0000', city: 'Miami', state: 'FL', dateOfBirth: '12/12/2001', streetAddress: '909 Oak St', zipCode: '33101' },
    { id: 13, firstName: 'Jack', lastName: 'Black', email: 'jack.black@example.com', phoneNumber: '555-000-1111', city: 'Boston', state: 'MA', dateOfBirth: '01/01/2002', streetAddress: '1010 Maple St', zipCode: '02101' },
    { id: 14, firstName: 'Kara', lastName: 'Zor-El', email: 'kara.zor-el@example.com', phoneNumber: '555-111-2222', city: 'Metropolis', state: 'NY', dateOfBirth: '02/02/2003', streetAddress: '1111 Elm St', zipCode: '10003' },
    { id: 15, firstName: 'Liam', lastName: 'Neeson', email: 'liam.neeson@example.com', phoneNumber: '555-222-3333', city: 'Gotham', state: 'NJ', dateOfBirth: '03/03/2004', streetAddress: '1212 Pine St', zipCode: '07001' },
    { id: 16, firstName: 'Mia', lastName: 'Farrow', email: 'mia.farrow@example.com', phoneNumber: '555-333-4444', city: 'Atlantis', state: 'GA', dateOfBirth: '04/04/2005', streetAddress: '1313 Cedar St', zipCode: '30301' },
    { id: 17, firstName: 'Noah', lastName: 'Centineo', email: 'noah.centineo@example.com', phoneNumber: '555-444-5555', city: 'Star City', state: 'CA', dateOfBirth: '05/05/2006', streetAddress: '1414 Walnut St', zipCode: '90003' }
  ];
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
