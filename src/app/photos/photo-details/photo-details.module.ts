import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { PhotoDetailsComponent } from "./photo-details.component";
import { PhotoModule } from "../photo/photo.module";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';

@NgModule({
  declarations: [PhotoDetailsComponent, PhotoCommentsComponent],
  exports: [PhotoDetailsComponent],
  imports: [
      CommonModule, 
      PhotoModule, 
      ReactiveFormsModule, 
      RouterModule,
      VMessageModule
    ]
})
export class PhotoDetailsModule {}