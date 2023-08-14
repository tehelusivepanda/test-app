import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ChildDetailsComponent } from './child-details/child-details.component';

const routes: Routes = [
  {path: 'child', component: ChildComponent},
  {path: 'data/:uuid', component: ChildDetailsComponent},
  {path: '**', redirectTo: 'child'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
