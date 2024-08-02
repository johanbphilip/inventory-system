# A Basic Inventory System
## What is this?
This is a basic inventory system that I created as part of a project for my workplace. 
This program uses MongoDB for its database. I currently have the backend built out and need to start working on the front end

## Client Side features
- [ ] Basic CRUD features to begin with
- [ ] Login/Register Page later on
- [ ] Create a dashboard that shows different feature (number of items, items below threshold, order from most to least expensive/etc/)
## Possible New Backend Features/Upgrades
- [ ] filter by quantity less than certain amount or by least to greatest quantity
- [ ] add a param that lets you automate an alert if quantity below certain amount
- [ ] then allow to filter by this alert param
- [ ] update status codes, 201 for new resource created and proper error codes
- [ ] Add User Authentication
- [ ] Create User Roles for Admin, Staff, Volunteers
- [ ] Implemenet JSON Web Tokens (JWTs) for authentication
### Possible New Schema Params to add
- units per quantity
- alert quantity
- location
- priority