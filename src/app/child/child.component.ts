import { Component, OnInit } from '@angular/core';
import { RandomPersonService } from '../random-person.service';
import { Response } from '../interfaces/response.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  response!: Response;
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
