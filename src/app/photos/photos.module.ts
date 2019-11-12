import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FilterByDescriptionPipe } from './photo-list/filter-by-description.pipe';
import { PhotoComponent } from './photo/photo.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosComponent } from './photo-list/photos/photos.component';

@NgModule({
    declarations: [
        FilterByDescriptionPipe,
        PhotoComponent,
        PhotoFormComponent,
        PhotoListComponent,
        PhotosComponent
    ],
    imports: [HttpClientModule, CommonModule]
})
export class PhotosModule {}