import { NgModule } from '@angular/core';

import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';

@NgModule({
    declarations: [],
    imports: [
        PhotoDetailsModule,
        PhotoFormModule,
        PhotoListModule,
        PhotoModule
    ]
})
export class PhotosModule {}