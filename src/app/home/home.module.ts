import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';
import { VMessageModule } from "../shared/components/vmessage/vmessage.module";

@NgModule({
  declarations: [HomeComponent, SigninComponent, SignupComponent],
  imports: [
      CommonModule,
      HomeRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule, 
      VMessageModule
  ],
  providers: [
    SignupService
  ]
})
export class HomeModule {}
