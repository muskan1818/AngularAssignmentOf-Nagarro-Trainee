import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: 'student', children: [
    {path: 'search', component: SearchComponent},
    {path: 'result', component: ResultComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
