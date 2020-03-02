# DockerizeI18nAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.

## HTML usage

```sh
// Standard usage with description
<h1 i18n="An introduction header for this sample">Hello i18n!</h1>

// Standard usage
<span i18n>Lorem ipsum sit dolor amet...</span>

// Attribute usage
<img [src]="logo" i18n-title title="text here" />
```
Click the link for more detail https://angular.io/guide/i18n

## Typescript usage

```sh
import { Component } from "@angular/core";
import { I18n } from "@ngx-translate/i18n-polyfill";

@Component({
  selector: "app-root",
  template: "./app.component.html"
})
export class AppComponent {
  constructor(i18n: I18n) {
    console.log(i18n("This is a test {{myVar}} !", {myVar: "^_^"}));
  }
}
```

Click the link for more detail https://github.com/ngx-translate/i18n-polyfill

## Generate or update i18n files

Run `npm run generate-i18n` to generate i18n files into locale folder. locale/messages.xlf, locale/messages.tr.xlf, locale/messages.en.xlf

## Serve app in Turkish

Run `npm run start-tr` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Serve app in English

Run `npm run start-en` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run i18n-build` to build the project. Extract 2 folder (tr and en folders) The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Docker Build

Run `docker-compose up` to dockerize the project. It use nginx, you can check settings from nginx.conf file.
After run docker compose, run the app from `http://localhost/tr` or `http://localhost/en` 


