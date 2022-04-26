import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazytwoComponent } from './lazytwo/lazytwo.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes= [
  { path: '', component: LazytwoComponent }
]


@NgModule({
  declarations: [
    LazytwoComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class LazytwoModule { }
