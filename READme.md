# A Basic Inventory System

## What is this?

This is a basic inventory system that I created in order to help my workplace digitize our medical supply inventory.

## Client Side features

- [x] Create a basic dashboard with the search feature and a search table
- [x] Create a Search Page that has a searching feature with a table
- [ ] Add edit and delete features within the search page itself (when editing/deleting, you open up to a page with the whole item shown)
- [ ] Basic CRUD features to begin with
- [ ] Turn the TopNavBar into just something with the name, logo and possibly settings if that comes up later on
- [x] Add in a SideNavBar
- [ ] Maybe have a tile that shows count of how many items are high alert/low in stock
- [ ] Login/Register Page later on
- [ ] Create a dashboard that shows different feature (number of items, items below threshold, order from most to least expensive/etc/)
- [ ] filter by quantity less than certain amount or by least to greatest quantity
- [ ] then allow to filter by alert param

### SideBar adjustments

- [ ] Gotta update it so that its in light mode
- [ ] Add a user account component that will have an auth context passed to it and add settings there
- [ ] Limit functionality for now

## Possible New Backend Features/Upgrades

- [ ] add a param that lets you automate an alert if quantity below certain amount
- [ ] update status codes, 201 for new resource created and proper error codes
- [ ] Add User Authentication
- [ ] Create User Roles for Admin, Staff, Volunteers
- [ ] Implemenet JSON Web Tokens (JWTs) for authentication

### Possible New Schema Params to add

- units per quantity
- alert quantity
- location
- priority
