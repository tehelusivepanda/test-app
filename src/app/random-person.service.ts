import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Person } from './interfaces/person.interface';
import { Response } from './interfaces/response.interface';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})

export class RandomPersonService {
  private readonly api: string = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getPeople(size: number=5): Observable<Response> {
    return this.http.get<Response>(`${this.api}/?results=${size}`).pipe(
      map(response => this.processResponse(response)));
  }

  getPerson(uuid: number=1): Observable<Response> {
    return this.http.get<Response>(`${this.api}/?uuid=${uuid}`).pipe(
      map(response => this.processResponse(response)));
  }

  private processResponse(response: Response): Response {
    return {
      info: { ...response.info },
      results: response.results.map((person: any) => (<Person>{
        uuid: person.login.uuid,
        first: person.name.first,
        last: person.name.last,
        email: person.email,
        username: person.login.username,
        address: `${person.location.street.number} ${person.location.street.name}`,
      }))
    };
  }
}
