import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { CanActivate, ActivatedRouteSnapshot, UrlTree, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, TimeoutError } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class LoginGuard implements CanActivate{
    
    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        if(this.userService.isLogged()) {
            this.router.navigate(['user', this.userService.getUsername()])
            return false;
        }

        return true;
    }

}