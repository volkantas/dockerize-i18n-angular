# DockerizeI18nAngular [![Actions Status](https://github.com/volkantas/dockerize-i18n-angular/workflows/CI/badge.svg)](https://github.com/volkantas/dockerize-i18n-angular/actions)

#### :earth_americas: This is a starter applicaton for multilingual angular 9 project.
<br><br>
| Details |
| :------|
| Easy to use with HTML and Typescript   |
| Easy to generate & merge i18n files to .xlf format - `npm run generate-i18n` |
| Multiple build for different languages - `npm run i18n-build`    |
| Docker support, nginx using for server - `docker-compose up`    |
| This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.    |

<br><br>
| Build Steps |
| :------|
| Add i18n attribute for multilanguage texts like `<h1 i18n>Title</h1>` |
| For typescript, inject I18n service and use like `i18n("This test for basic exmaple")` |
| Generate i18n - `npm run generate-i18n` |
| Translate .xlf files by manual or use xlf editors |
| Build project using Docker - `docker-compose up` |
| Run project from `http://localhost/tr/` or `http://localhost/en/` |


<br><br>
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

<br><br>
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
    console.log(i18n("This test for basic exmaple"));
    console.log(i18n("This is another test {{myVar}} !", {myVar: "^_^"}));
  }
}
```

Click the link for more detail https://github.com/ngx-translate/i18n-polyfill

<br><br>
## Generate i18n files

Run `npm run generate-i18n` to generate/update i18n files into [locale](https://github.com/volkantas/dockerize-i18n-angular/tree/master/src/locale) folder.

<br><br>
## Edit i18n files

You can edit xlf file directly or use one of the xlf file editors.

| Original  | Turkish  | English |
| ------------- | ------------- | ------------- |
| `locale/messages.xlf`  | `locale/messages.tr.xlf`  | `locale/messages.en.xlf` |

<br><br>
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
        
        <source>Bu yazı bir çok dilde görüntülenebilir.</source>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">3</context>
        </context-group>
        <target state="new">This text is multilingual.</target>
     
        ...
```

<br><br>
## Serve in Turkish

Run `npm run start-tr` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

<br><br>
## Serve in English

Run `npm run start-en` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

<br><br>
## Adding new language

:warning: Don't forget to check following codes for adding or removing languages:
* :file_folder: [package.json](https://github.com/volkantas/dockerize-i18n-angular/blob/master/package.json) > scripts 
* :file_folder: [angular.json](https://github.com/volkantas/dockerize-i18n-angular/blob/master/angular.json) > ... > build > configurations > dev-{lang}
* :file_folder: [angular.json](https://github.com/volkantas/dockerize-i18n-angular/blob/master/angular.json) > ... > build > configurations > production-{lang}
* :file_folder: [angular.json](https://github.com/volkantas/dockerize-i18n-angular/blob/master/angular.json) > ... > serve > configurations > {lang}

<br><br>
## Build

* Run `npm run i18n-build` to build the project. 
* The build artifacts will be stored in the `dist/` directory. 
* Extract 2 folders :

| Turkish  | English |
| ------------- | ------------- |
| `dist/tr/`  | `dist/en/` |

<br><br>
## Docker Build

* Run `docker-compose up` to dockerize the project. 
* It use nginx, you can check settings from [nginx.conf](https://github.com/volkantas/dockerize-i18n-angular/blob/master/nginx.conf) file.
* After docker compose, use that links for access :

| Turkish  | English |
| ------------- | ------------- |
| `http://localhost/tr/`  | `http://localhost/en/`  |

<br><br>
## Lint

* Run `npm run lint` to ts linting. 
