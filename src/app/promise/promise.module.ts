import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule} from '@angular/http';
import { PromiseComponent } from './promise/promise.component';
import { AddPromiseComponent } from './add-promise/add-promise.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PromiseeComponent } from './promisee/promisee.component';
import { PromiseDataService } from './promise-data.service';
import { PromiseListComponent } from './promise-list/promise-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PromiseDetailComponent } from './promise-detail/promise-detail.component';
import { PromiseResolver } from './promise-resolver.service';
const routes: Routes = [
  { path: 'list', component: PromiseListComponent },
  { path: 'add', component: AddPromiseComponent },
  { path: ':id', component: PromiseDetailComponent, resolve: { promise: PromiseResolver}}  
];
@NgModule({
  declarations: [
    PromiseComponent,
    AddPromiseComponent,
    PromiseeComponent,
    PromiseListComponent,
    PromiseDetailComponent,
  ],
  imports: [
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [PromiseDataService, PromiseResolver],
})
export class PromiseModule { }
