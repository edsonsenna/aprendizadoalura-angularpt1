import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImmeadiateClickDirective } from './immediate-click.directive';

@NgModule({
    declarations: [ImmeadiateClickDirective],
    exports: [ImmeadiateClickDirective],
    imports: [CommonModule]
})
export class ImmediateClickModule {}