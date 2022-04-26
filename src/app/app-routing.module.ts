import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UseridComponent } from './userid/userid.component';
import { CanActivateGuard } from './can.activate.service';
import {ResolverService} from './resolver.service';
import { CanDeactivateGuard } from './can.deactivate.service';
import { SubModule} from './sub.module';
import { CustomPreloadingStrategyService } from './custom.preloading.strategy';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'user', component: UserComponent, data: {url: 'Google.com'}, resolve: {usersInfo: ResolverService},
  children: [
    { path: ':id', component: UseridComponent },
  ]},
  { path: 'lazyone', data: { preload: true},
  loadChildren: () => import('./lazyone.module').then(m => m.LazyoneModule)},
  { path: 'lazytwo', 
  loadChildren: () => import('./lazytwo.module').then(m => m.LazytwoModule)},
  {path: '**', component: NotfoundComponent}
];
// const routes: Routes = [
//   {path: '', component: HomeComponent},
//   { path: 'user', component: UserComponent},
//   {path: '**', redirectTo: ''}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}), SubModule],
//   exports: [RouterModule, SubModule]
// })
// export class AppRoutingModule { }
@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingStrategyService}), SubModule],
    exports: [RouterModule, SubModule]
  })
  export class AppRoutingModule { }
