import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentRoutingModule } from './student-routing.module';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';



@NgModule({
  declarations: [
    SearchComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
