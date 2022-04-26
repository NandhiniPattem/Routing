import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { AppService } from '../app.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   isSubmitted: boolean = false;
   users: any[] = [];
  constructor( private router: Router, private appService: AppService, 
    private route: ActivatedRoute ) {
    // this.appService.getUsers().subscribe((data: any) => {
    //   this.users = data;
    // })
    this.route.data.subscribe((data: any) => {
      console.log(data.url)
      this.users = data.usersInfo
    })
   }

  ngOnInit(): void {
  }
  canLeave() {
    return this.isSubmitted;
  }
  login(val: string) {
     this.isSubmitted = true;
  }
}
