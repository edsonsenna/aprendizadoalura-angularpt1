import { NgModule } from '@angular/core';
import { VMessageComponent } from './vmessage.component';

const components = [
    VMessageComponent
];


@NgModule({
    declarations: [...components],
    exports: [...components]
})
export class VMessageModule { }