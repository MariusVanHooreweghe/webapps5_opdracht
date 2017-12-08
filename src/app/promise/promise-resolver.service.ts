import { PromiseDataService } from './promise-data.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Promise } from './promise.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PromiseResolver implements Resolve<Promise> {
    constructor(private promiseService: PromiseDataService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Promise> {
        return this.promiseService.getPromise(route.params['id']);
    }
}
