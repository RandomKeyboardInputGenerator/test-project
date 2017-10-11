![Angular](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/200px-Angular_full_color_logo.svg.png)

# Angular demonstration application

The project consists of progressive phases.

Task 1: Implement views - done  
Task 2: Make them responsive - done  
Task 3: Connect modal to users - done  
Task 4: Use templates - done  
Task 5: Add pagination and sorting - done  
Task 6: Add search - done  
Task 7: Implement voting - done  
Task 8: Add routing - done  

# Getting started

To get the server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `gulp` to generate html templates and run gulp watchers
- `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Code Overview

## Dependencies

- [angular] (https://github.com/angular/angular) - The platform for handling routing, pagination, sorting, search, voting, etc.
- [material2] (https://github.com/angular/material2) - For handling modal windows
- [angular-in-memory-web-api] (https://github.com/angular/in-memory-web-api) - For emulation CRUD operations over a RESTy API
- [bootstrap] (https://github.com/twbs/bootstrap) - For a base to custom styling
- [lodash] (https://github.com/lodash/lodash) - For complex operations with data
- [pug] (https://github.com/pugjs/pug) - For building complex templates
- [gulp] (https://github.com/gulpjs/gulp) - For generating elegant views from Pug templates

## Application Structure

- `e2e/` - This folder contains automated end-to-end UI tests
- `src/`
    - `app/`
        - `components/` - This folder contains configuration for aplication's components
        - `config/` - This folder contains base configuration for views loader and application's readonly default values
        - `modules/` - This folder contains configuration for app modules and the route definitions
        - `pipes/` - This folder contains pipes for data transformations 
        - `services/` - This folder contains services to organize and share code across the application
        - `styles/` - This folder contains custom Sass styles
        - `templates/` - This folder contains Pug templates and generated html templates
        - `tests/` - This folder contains unit tests for components, pipes and services
    - `assets/` - This folder contains images and fonts
    - `main.ts` - The entry point to the application.