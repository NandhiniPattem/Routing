import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-userid',
  templateUrl: './userid.component.html',
  styleUrls: ['./userid.component.css']
})
export class UseridComponent implements OnInit {

  id!: string| null;
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((data) => {
      console.log('From Suscribe: ', data.get('id'))
      this.id = data.get('id')
    })
   }

  ngOnInit(): void {
  }

}
