import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TeacherModule { }
