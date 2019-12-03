import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotoModule } from '../photo/photo.module';
import { SharedModule } from '../../shared/shared.module';
import { SearchComponent } from './search/search.component';
import { DarkOnHoverModule } from '../../shared/directives/dark-on-hover/dark-on-hover.module';

@NgModule({
    declarations: [
        FilterByDescriptionPipe,
        LoadButtonComponent,
        PhotoListComponent,
        PhotosComponent,
        SearchComponent
    ],
    imports: [CommonModule, PhotoModule, SharedModule, DarkOnHoverModule, RouterModule]
})
export class PhotoListModule {

}