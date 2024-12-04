# Test Plan for Contact Search Application

## 1. Search Functionality Tests

### 1.1 Single Field Search
- **Test Case**: Search by First Name only
- **Input**: First Name = "John"
- **Expected**: Only contacts with first name containing "John" should be displayed
- **Status**: ✓

### 1.2 Multiple Field Search
- **Test Case**: Search with multiple criteria
- **Input**: First Name = "John", State = "CA"
- **Expected**: Only contacts matching both criteria should be displayed
- **Status**: ✓

### 1.3 Case Sensitivity
- **Test Case**: Search with different case variations
- **Input**: First Name = "john" vs "John"
- **Expected**: Both searches should return the same results
- **Status**: ✓

### 1.4 Partial Matches
- **Test Case**: Search with partial text
- **Input**: Email containing "@gmail"
- **Expected**: All Gmail addresses should be displayed
- **Status**: ✓

### 1.5 No Results
- **Test Case**: Search with non-existent criteria
- **Input**: First Name = "XYZABC"
- **Expected**: "No contacts found" message should be displayed
- **Status**: ✓

## 2. Table Functionality Tests

### 2.1 Sorting
- **Test Case**: Sort by each column
- **Action**: Click column headers
- **Expected**: Data should sort correctly in ascending/descending order
- **Status**: ✓

### 2.2 Pagination
- **Test Case**: Navigate through pages
- **Action**: Use pagination controls
- **Expected**: Correct page of results should be displayed
- **Status**: ✓

### 2.3 Row Selection
- **Test Case**: Select contact row
- **Action**: Click on any row
- **Expected**: Contact details should display below table
- **Status**: ✓

### 2.4 Responsive Layout
- **Test Case**: View on different screen sizes
- **Action**: Resize browser window
- **Expected**: Table should adjust layout appropriately
- **Status**: ✓

## 3. Contact Details Tests

### 3.1 Detail Display
- **Test Case**: Verify all contact fields
- **Action**: Select a contact
- **Expected**: All fields should display correctly
- **Status**: ✓

### 3.2 UI Updates
- **Test Case**: Change selected contact
- **Action**: Select different contacts
- **Expected**: Details should update immediately
- **Status**: ✓

## 4. Form Functionality Tests

### 4.1 Reset Button
- **Test Case**: Clear all search fields
- **Action**: Click Reset button
- **Expected**: All form fields should clear
- **Status**: ✓

### 4.2 State Dropdown
- **Test Case**: Select state from dropdown
- **Action**: Use state dropdown
- **Expected**: Should show filtered state list
- **Status**: ✓

## 5. Performance Tests

### 5.1 Search Response Time
- **Test Case**: Search with large dataset
- **Action**: Enter search criteria
- **Expected**: Results should appear within 1 second
- **Status**: ✓

### 5.2 Pagination Performance
- **Test Case**: Navigate through pages quickly
- **Action**: Click through pages rapidly
- **Expected**: Smooth page transitions
- **Status**: ✓

## Test Data Sample

```json
{
  "id": "1",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@gmail.com",
  "phoneNumber": "123-456-7890",
  "streetAddress": "123 Main St",
  "city": "San Francisco",
  "state": "CA",
  "zipCode": "94105",
  "dateOfBirth": "1990-01-01"
}
```

## Test Environment

- Browser: Chrome, Firefox, Safari
- Screen Sizes: Desktop (1920x1080), Tablet (768x1024), Mobile (375x667)
- Angular Version: 15
- Node Version: 14+
