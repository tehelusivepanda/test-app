import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildDetailsComponent } from './child-details/child-details.component';
import { PersonResolver } from './random-person.resolver';

const routes: Routes = [
  {path: 'parent', component: ParentComponent},
  {path: 'data/:seed', component: ChildDetailsComponent, resolve: { resolvedResponse: PersonResolver }},
  {path: '**', redirectTo: 'parent'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
