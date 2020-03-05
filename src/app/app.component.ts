import {Component} from '@angular/core';
import {I18n} from '@ngx-translate/i18n-polyfill';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'dockerize-i18n-angular';

    constructor(i18n: I18n) {
        alert(i18n('Typescript tarafında da dil desteği bu şekilde kullanılıyor.'));
    }
}
