import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { AuthGuard } from '../auth.guard';
const routes: Routes = [
  {path: 'teacher', children: [
  {path: 'list', component: ListComponent,canActivate:[AuthGuard]},
  {path: 'create', component: CreateComponent,canActivate:[AuthGuard]},
  {path: 'update/:rollNo',component:UpdateComponent,canActivate:[AuthGuard]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
