import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signin.component.html'
})
export class SigninComponent {

    loginForm: FormGroup;
    @ViewChild('userNameInput', {static: true}) userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService
        ) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.platformDetectorService.isPlatformBrowser() &&
                        this.userNameInput.nativeElement.focus();
    }

    login() {
        
        
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        
        this.authService
            .authenticate(userName, password)
            .subscribe(
                () => {
                    this.router.navigate(['user', userName])
                },
                () =>{
                    this.loginForm.reset()
                    this.platformDetectorService.isPlatformBrowser() &&
                        this.userNameInput.nativeElement.focus();
                    alert('Invalid user name or password provided! Retry!');
                } 
            );
    }
}