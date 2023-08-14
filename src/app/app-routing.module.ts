import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildDetailsComponent } from './child-details/child-details.component';

const routes: Routes = [
  {path: 'parent', component: ParentComponent},
  {path: 'data/:uuid', component: ChildDetailsComponent},
  {path: '**', redirectTo: 'parent'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
