import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginBComponent } from './plugin-b.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [PluginBComponent],
    entryComponents: [PluginBComponent],
    providers: [{
        provide: 'plugin-b',
        useValue: PluginBComponent,
    }]
})
export class PluginBModule { }