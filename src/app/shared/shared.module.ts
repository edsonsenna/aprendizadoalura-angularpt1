import { NgModule } from '@angular/core';

import { CardModule } from './components/card/card.module';

@NgModule({
    imports: [CardModule],
    exports: [CardModule]
})
export class SharedModule { }