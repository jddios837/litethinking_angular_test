# LiteThinkingFe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

# Application Details

This application is going to handle 3 sections:
  1. Login
  2. List of Companies
  3. List of Products per Company

## Information of a User
- Name
- Email
- Password

## Information of a Company
- Name (required, max 100 characters)
- Address (required, max 500 characters)
- NIT (required, search) [Primary Key in DB]
- Phone (required only numbers)

For now is global and not oriented to be a SAAS is NOT NEEDED add any relation with USER

## Information of a Product
- Product Name
- Quantity
- Foreign Key (NIT of Company)



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
