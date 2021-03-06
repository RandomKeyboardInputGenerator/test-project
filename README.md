![Angular](https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/200px-Angular_full_color_logo.svg.png)

# Angular demonstration application

Discussion forum consisting of three views. 
Lists of all topics, a single topic with a discussion about it, and a user profile view. 
Project demonstrating the use of the Angular framework, 
implementation of responsive views, integration with modal windows, 
use of templates, routing, data manipulation in the services, 
and implementation RESTful API calls.

# Getting started

To get the server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `gulp` to generate html templates and run gulp watchers
- `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Code Overview

## Dependencies

- [angular](https://github.com/angular/angular) - The platform for handling routing, pagination, sorting, search, voting, etc.
- [material2](https://github.com/angular/material2) - For handling modal windows
- [angular-in-memory-web-api](https://github.com/angular/in-memory-web-api) - Emulation CRUD operations over a RESTy API
- [bootstrap](https://github.com/twbs/bootstrap) - A base to custom styling
- [lodash](https://github.com/lodash/lodash) - For complex operations with data
- [pug](https://github.com/pugjs/pug) - Templates engine
- [gulp](https://github.com/gulpjs/gulp) - For generating elegant views from Pug templates

## Application Structure

- `e2e/` - Automated end-to-end UI tests
- `src/`
    - `app/`
        - `components/` - Configuration for aplication's components
        - `config/` - Base configuration for views loader and application's readonly default values
        - `modules/` - This folder contains configuration for app modules and the route definitions
        - `pipes/` - Pipes for data transformations 
        - `services/` - Services to organize and share code across the application
        - `styles/` - Custom Sass styles
        - `templates/` - Pug templates and generated html templates
        - `tests/` - Unit tests for components, pipes and services
    - `assets/` - Images and fonts
    - `main.ts` - The entry point to the application.