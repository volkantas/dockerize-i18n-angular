import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule, TRANSLATIONS, TRANSLATIONS_FORMAT} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {I18n} from '@ngx-translate/i18n-polyfill';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    /**
     * Dil implementasyonu için bilgilendirme:
     *
     * i18n-polyfill kullanarak ts dosyalarından dönüştürdüğümüz i18n text'lerini burada yüklüyoruz.
     */
    // {provide: LOCALE_ID, useValue: 'en'},
    {
      provide: TRANSLATIONS,
      useFactory: (locale) => {
        console.log(locale)
        /**
         * AOT buildi ise locale bilgisi dolu gelecek.
         */
        // @ts-ignore
        return require(`raw-loader!../locale/messages.${locale}.xlf`).default;
      },
      deps: [LOCALE_ID]
    },
    {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
    I18n
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
