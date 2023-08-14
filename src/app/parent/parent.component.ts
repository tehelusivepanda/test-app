// Disregarding the app component as the two custom components, this is the component responsible for API firing

import { Component, OnInit } from '@angular/core';
import { RandomPersonService } from '../random-person.service';
import { Response } from '../interfaces/response.interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  response: Response;
  constructor(private personService: RandomPersonService) {}

  ngOnInit(): void {
    this.personService.getPeople(10).subscribe(
      (results: Response) => {
        console.log(results);
        this.response = results;
      }
    );
  }
}
