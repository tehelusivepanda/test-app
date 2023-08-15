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
  numPeople: number;

  constructor(private personService: RandomPersonService) {}

  // Take user input to generate number of results
  getNum (numPeople: string) {
    console.log("value received: " + numPeople);
    this.personService.getPeople(+numPeople).subscribe(
      (results: Response) => {
        console.log(results);
        this.response = results;
      }
    );
  }

  // Execute default value on load (1)
  ngOnInit(): void {
    console.log("ngOnInit of parent.component")
    this.personService.getPeople(1).subscribe(
      (results: Response) => {
        console.log(results);
        this.response = results;
      }
    );
  }
}