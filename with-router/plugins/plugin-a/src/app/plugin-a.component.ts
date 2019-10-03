import { Component, Input } from '@angular/core';

@Component({
    selector: 'plugin-a-component',
    templateUrl: 'plugin-a.component.html'
})
export class PluginAComponent {

    @Input('login') login;
    @Input('data') data;
    constructor() {
        console.log(this.login);
        console.log(this.data);
    }
}