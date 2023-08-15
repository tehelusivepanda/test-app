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
  response: Response;

  constructor(private http: HttpClient) { }

  // Gets list of random people to populate parent component
  getPeople(size: number=5): Observable<Response> {
    console.log("executing getPeople in random-person.service")
    return this.http.get<Response>(`${this.api}/?results=${size}`).pipe(
      map(this.processResponse));
  }

  // Displays information about a single instance of a person
  getPerson(uuid: string): Observable<Response> {
    console.log("executing getPerson in random-person.service");
    console.log("service seed:  " + uuid);
    return this.http.get<Response>(`${this.api}/?uuid=${uuid}`).pipe(
      map(this.processResponse));
  }

  // Middle-end hook, copies entire API response which allows us to
  //  map only the parts we need, info is the meta data just to
  //  show the seed information
  private processResponse(response: Response): Response {
    console.log("executing processResponse in random-person.service");
    console.log(response.results[0]['login']['uuid']);
    response = {
      info: { ...response.info },
      results: response.results.map((
        person: any) => (<Person> {
          uuid: person.login.uuid,
          first: person.name.first,
          last: person.name.last,
          email: person.email,
          username: person.login.username,
          address: `${person.location.street.number} ${person.location.street.name}`,
          address2: `${person.location.city}, ${person.location.state}, ${person.location.country}`,
          birthday: person.dob.date,
          age: person.dob.age,
        }
      ))
    };
    console.log("got a response");
    console.log(response);
    return response;
  }
}
