import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { RandomPersonService } from './random-person.service';
import { Observable } from 'rxjs';
import { Response } from './interfaces/response.interface'

@Injectable({ providedIn: 'root' })
export class PersonResolver implements Resolve<Response> {
  constructor(private personService: RandomPersonService) {}

  resolve(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<Response> {
    console.log("executing resolve in random-person.resolver")
    console.log("resolver seed: " + route.params['seed']);
    return this.personService.getPerson(route.paramMap.get('seed')!);
  };
}
