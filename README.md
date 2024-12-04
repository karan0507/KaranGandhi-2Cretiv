# Contact Management Application

A modern Angular-based contact management system with advanced search and selection capabilities.

## Features

- Advanced contact search with multiple criteria
- Real-time filtering
- Checkbox-based contact selection
- Detailed contact view
- Responsive design
- US States dropdown with search functionality

## Technical Stack

- Angular 15.2.10
- NG-ZORRO Ant Design
- RxJS for state management
- Angular Reactive Forms

## Prerequisites

- Node.js (14.15.0 or higher)
- npm (6.14.8 or higher)
- Angular CLI (15.2.8)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── search-form/
│   │   └── results-table/
│   ├── models/
│   │   └── contact.interface.ts
│   ├── client-api.service.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets/
└── styles.css
```

## Features Implementation

### Search Form
- Two-column layout for form fields
- Required field validation
- State dropdown with search capability
- Date picker for Date of Birth

### Results Table
- Checkbox selection
- Pagination
- Responsive design
- Sortable columns

### Contact Details
- Detailed view of selected contact
- Clean and organized layout
- Responsive design

## Usage

1. Fill in the search criteria in the form
2. Click "Search" to filter contacts
3. Select contacts using checkboxes
4. View detailed information of selected contact

## Styling

The application uses NG-ZORRO components with custom styling to ensure a modern and professional look. The design is fully responsive and works well on both desktop and mobile devices.
