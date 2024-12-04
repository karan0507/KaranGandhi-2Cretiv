import { Contact } from '../app/models/contact.interface';

// Sample test data for the contact search feature
export const MOCK_CONTACTS: Contact[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@email.com',
    phoneNumber: '(555) 123-4567',
    streetAddress: '123 Main St',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    dateOfBirth: '1990-05-15'
  },
  {
    id: 2,
    firstName: 'Emma',
    lastName: 'Johnson',
    email: 'emma.j@email.com',
    phoneNumber: '(555) 234-5678',
    streetAddress: '456 Oak Ave',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90001',
    dateOfBirth: '1988-09-23'
  },
  {
    id: 3,
    firstName: 'Michael',
    lastName: 'Brown',
    email: 'michael.b@email.com',
    phoneNumber: '(555) 345-6789',
    streetAddress: '789 Pine Rd',
    city: 'Chicago',
    state: 'IL',
    zipCode: '60601',
    dateOfBirth: '1992-12-07'
  },
  // Add more test data to demonstrate pagination
  ...Array.from({ length: 47 }, (_, i) => ({
    id: i + 4,
    firstName: `Test${i + 4}`,
    lastName: `User${i + 4}`,
    email: `test.user${i + 4}@email.com`,
    phoneNumber: `(555) ${String(i + 4).padStart(3, '0')}-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`,
    streetAddress: `${i + 100} Test St`,
    city: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'][Math.floor(Math.random() * 5)],
    state: ['NY', 'CA', 'IL', 'TX', 'AZ'][Math.floor(Math.random() * 5)],
    zipCode: String(Math.floor(Math.random() * 90000) + 10000),
    dateOfBirth: `${1980 + Math.floor(Math.random() * 30)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`
  }))
];
