# A Basic Inventory System

## What is this?

This is a basic inventory system that I created in order to help my workplace digitize our medical supply inventory.

## Client Side ToDos

- [x] Create a basic dashboard with the search feature and a search table
- [x] Create a Search Page that has a searching feature with a table
- [x] Add edit and delete features within the search page itself (when editing/deleting, you open up to a page with the whole item shown)
- [x] Basic CRUD features to begin with
- [x] Add in a SideNavBar
- [x] Maybe have a tile that shows count of how many items are high alert/low in stock
- [x] Login/Register Page later on
- [x] Create a dashboard that shows different feature (number of items, items below threshold, order from most to least expensive/etc/)
- [ ] Create filtering params
  - [ ] Allow filtering by date added, name, least in stock, alert level, etc
- [ ] Update styling for tables (underlines, functionality)
- [ ] Make sure page refreshes upon changes
- [x] Gotta update it so that its in light mode
- [ ] Add a user account component that will open to a ProfilePage.jsx
- [ ] Fix Add Item and Update item widgets
  - [x] complete Add Item UI
  - [ ] Complete Add Item Functionality
  - [ ] Complete Edit Item UI
  - [ ] Complete Edit Item Functionality

## Backend Features/Upgrades

- [ ] add a param that lets you automate an alert if quantity below certain amount
- [ ] update status codes, 201 for new resource created and proper error codes
- [x] Add User Authentication
- [ ] Add User queries to Supabase for profile features
- [ ] Possibly move reorder point status to backend
- [ ] Create User Roles for Admin, Staff, Volunteers (NOT PRIORITY)
- [x] Implemenet JSON Web Tokens (JWTs) for authentication

## Edge Case

- [ ] What if someone deleted a storage location/category? How will that reflect with the items that already have that item?
- [ ] Should I have a create Storage Location/category route? Should that be done at onboarding?
