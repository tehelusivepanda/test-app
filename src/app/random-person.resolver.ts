import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Router } from '@angular/router';
import { RandomPersonService } from './random-person.service';
import { Response } from './interfaces/response.interface'

// @Injectable({ providedIn: 'root' })
export const personResolver: ResolveFn<Response> = (route: ActivatedRouteSnapshot) =>
{
  const router = inject(Router);
  const rps = inject(RandomPersonService);
  const uuid = route.paramMap.get('uuid')!;

  return rps.getPerson(uuid);
}
// {
//   constructor(private personService: RandomPersonService) {}

//   resolve(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<Response> {
//     console.log("executing resolve in random-person.resolver")
//     console.log("resolver seed: " + route.params['seed']);
//     return this.personService.getPerson(route.paramMap.get('seed')!);
//   };
// }
