# DockerizeI18nAngular

* Easy to use for HTML and Typescript
* Easy to generate & merge i18n files .xlf format | `npm run generate-i18n`
* Generated .xlf files are located in 'locale' folder
* Multiple build for different languages | `npm run i18n-build`
* Docker support, build on ngnix server | `docker-compose up`

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

## Sample of auto generated .xlf file (locale/messages.en.xlf)

```sh
<?xml version="1.0" encoding="UTF-8"?>
<xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
  <file source-language="tr" datatype="plaintext" original="ng2.template" target-language="en">
    <body>
      <trans-unit id="687f551882089d0fc824fef1e3a7fa430eecfd5d" datatype="html">
        <source>Merhaba Dünya</source>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">1</context>
        </context-group>
      <target state="new">Hello World</target></trans-unit><trans-unit id="8f0301b64b90846d7bf84a0519e087ad3f788234" datatype="html">
        <source>
  Bu yazı bir çok dilde görüntülenebilir.
</source>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">3</context>
        </context-group>
      <target state="new">
  This text is multilangual.
</target></trans-unit>
      <trans-unit id="88fe7b194cba7d237319098d3be9e96ee938ac21" datatype="html">
        <source>Typescript tarafında da dil desteği bu şekilde kullanılıyor.</source>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.ts</context>
          <context context-type="linenumber">1</context>
        </context-group>
      <target state="new">You can use language support from Typescript like this way!</target></trans-unit>
    </body>
  </file>
</xliff>
```

## Build

Run `npm run i18n-build` to build the project. Extract 2 folder (tr and en folders) The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Docker Build

Run `docker-compose up` to dockerize the project. It use nginx, you can check settings from nginx.conf file.
After run docker compose, run to app from `http://localhost/tr` or `http://localhost/en` 


