# Contact Search Application

A modern contact search application built with Angular and ng-zorro-antd UI library.

## Features

- Multiple search filters (First Name, Last Name, Email, Phone, City, State)
- Sortable table with pagination
- Single contact selection with detailed view
- Responsive design
- Modern UI with ng-zorro components

## Prerequisites

- Node.js (v14 or higher)
- Angular CLI (v15)
- npm package manager

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## Usage

1. Search Contacts:
   - Use any combination of search filters
   - Click "Search" to find matching contacts
   - Click "Reset" to clear all filters

2. View Results:
   - Results are displayed in a sortable table
   - Click column headers to sort
   - Use pagination to navigate through results

3. View Contact Details:
   - Click any row to view detailed contact information
   - Details are displayed in a card below the table

## Test Plan

### Test Cases

1. Search Functionality
   - Test single field search
   - Test multiple field search
   - Test case-insensitive search
   - Test partial matches
   - Test with no results

2. Table Functionality
   - Test sorting (all columns)
   - Test pagination
   - Test row selection
   - Test responsive layout

3. Contact Details
   - Test detail display accuracy
   - Test UI updates on selection

### Sample Data

The application uses a JSON file containing sample contact data with the following structure:

```typescript
interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  dateOfBirth: string;
}
```

## Technologies Used

- Angular 15
- ng-zorro-antd
- TypeScript
- RxJS
- HTML5/CSS3
