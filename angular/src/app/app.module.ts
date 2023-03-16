import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { HomeComponent } from './home/home.component';
import { TeacherModule } from './teacher/teacher.module';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentModule } from './student/student.module';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TeacherModule,
    ReactiveFormsModule,
    FormsModule,
    StudentModule,
    AppRoutingModule
    
  ],
  providers: [ApiserviceService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
