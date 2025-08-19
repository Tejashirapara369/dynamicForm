# Dynamic Form (Angular 11)

A tiny Angular demo showing how to build pages from **field metadata**:
- Define fields once (`fields` + `formObj`)
- Auto-generate a **Reactive FormGroup** with validators
- Render each field via a reusable `<app-form-control>`

##  What’s inside
- Angular **11.x** (CLI 11.2.x), **ReactiveForms**
- Two routes:
  - `/` → **Sign In**
  - `/fillup-form` → **Fill Up form**
- Central generator: `generateForm(fieldKeys)` builds `FormGroup` using per-field rules

##  How it works
1. **Describe** forms in `src/app/shared/fields.ts`:
   ```ts
   export const formObj = {
     signInForm: ['email','password'],
     fillupForm: ['firstname','lastName','email','mobile','dob','city','address']
   };

   export const fields = {
     email:    { controlType: 'email',    required: true, email: true,  label: 'Email Id',   placeholder: 'Enter your email ID' },
     password: { controlType: 'password', required: true,              minLength: 8,        label: 'Password',  placeholder: 'Enter your password' },
     firstname:{ controlType: 'text',     required: true,              minLength: 2,        label: 'First Name',placeholder: 'Enter your first name' },
     lastName: { controlType: 'text',     required: true,              minLength: 2,        label: 'Last Name', placeholder: 'Enter your last name' },
     mobile:   { controlType: 'tel',      required: true,              minLength: 10,       label: 'Mobile Number', placeholder: 'e.g. 6471234567' },
     dob:      { controlType: 'date',     required: true,                                   label: 'Date of Birth' },
     city:     { controlType: 'text',     required: true,                                   label: 'City', placeholder: 'Enter your city' },
     address:  { /* textarea special-case in component */               required: true,      label: 'Address', placeholder: 'Street, Apt, ...' }
   };




# DynamicForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
