import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginAComponent } from './plugin-a.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [PluginAComponent],
    entryComponents: [PluginAComponent],
    providers: [{
        provide: 'plugin-a',
        useValue: PluginAComponent,
    }]
})
export class PluginAModule { }