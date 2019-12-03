import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { PhotoService } from '../../photo/photo.service';
import { PhotoComment } from '../../photo/photo-comment';

@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent {

    @Input() photoId: number;
    
    comments$: Observable<PhotoComment[]>;

    constructor(
        private photoService: PhotoService
    ) {}

    ngOnInit() {
        this.comments$ = this.photoService.getComments(this.photoId);
    }
}