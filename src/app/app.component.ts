import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular 13 application';
  userName = 'abc';
  price: number=100;
  person = {name: 'John Doe'}
  users: Observable<any> ;
  constructor(public appService: AppService ) {
    console.log(this.person.toString());
    this.users = this.appService.getUsers();
  }

}
