# DockerizeI18nAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## Run development in Turkish language

Run `npm run start-tr` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Run development in English language

Run `npm run start-en` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run i18n-build` to build the project. Extract 2 folder (tr and en folders) The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Docker Build

Run `docker-compose up` to dockerize the project. It use nginx, you can check settings from nginx.conf file.
After run docker compose, run the app from `http://localhost/tr` or `http://localhost/en` 
