import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService} from './app.service';

@Injectable({ providedIn: 'root' })
export class ResolverService implements Resolve<Observable<any>> {
    constructor(private appService: AppService) {}
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        return this.appService.getUsers();
    }
}