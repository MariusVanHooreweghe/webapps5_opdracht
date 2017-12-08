import { AuthGuardService } from './../user/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
// import { PromiseListComponent } from './../promise-list/promise-list.component';
// import { AddPromiseComponent } from './../add-promise/add-promise.component';

const appRoutes: Routes = [
  {
    path: 'promise',
    canActivate: [ AuthGuardService ],
    data: { preload: true },
    loadChildren: '../promise/promise.module#PromiseModule'
  },
  { path: '', redirectTo: 'promise/list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
