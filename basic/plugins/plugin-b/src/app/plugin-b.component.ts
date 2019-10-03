import { Component, Input } from '@angular/core';

@Component({
    selector: 'plugin-b-component',
    template: `<h3>Hi, I am the Plugin B component.</h3>`
})
export class PluginBComponent {

    @Input('login') login;
    @Input('data') data;
    constructor() {
        console.log(this.login);
        console.log(this.data);
    }
}