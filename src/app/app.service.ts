import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AppService {
    constructor(private httpClient: HttpClient) { }
        getUsers() {
            return this.httpClient.get('https://jsonplaceholder.typicode.com/users').pipe(delay(6))
        }
}