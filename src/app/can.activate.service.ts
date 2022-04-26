import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class CanActivateGuard implements CanActivate {
    constructor() { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //return window.confirm('are you sure?');
        if(route.paramMap.get('id') == 'admin') {
            return true;
        } else {
            return false;
        }
    }
}