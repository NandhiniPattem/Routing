import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubComponent } from './sub/sub.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes= [
  { path: 'sub', component: SubComponent }
]


@NgModule({
  declarations: [
    SubComponent
  ],
  imports: [
   CommonModule, RouterModule.forChild(routes)
  ]
})
export class SubModule { }
