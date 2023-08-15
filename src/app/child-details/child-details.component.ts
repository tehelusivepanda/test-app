import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../interfaces/person.interface';

@Component({
  selector: 'app-child-details',
  templateUrl: './child-details.component.html',
  styleUrls: ['./child-details.component.css']
})

export class ChildDetailsComponent implements OnInit {
  person: Person;

  // Traverses active route
  constructor(private activatedRoute: ActivatedRoute) { }

  // this.person set to a <Person> object of the snapshot of the resolvedResponse
  //  snapshot is set in random-person.resolver.ts
  //
  ngOnInit(): void {
    console.log("ngOnInit of child-details.components")
    this.person = (<Person>(this.activatedRoute.snapshot.data['resolvedResponse'].results[0]));
  }
}
