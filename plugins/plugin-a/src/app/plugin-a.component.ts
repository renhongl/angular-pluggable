import { Component, Input } from '@angular/core';

@Component({
    selector: 'plugin-a-component',
    template: `<h3>Hi, I am the Plugin A component.</h3>`
})
export class PluginAComponent {

    @Input('login') login;
    @Input('data') data;
    constructor() {
        console.log(this.login);
        console.log(this.data);
    }
}