import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  teacherPost = new FormGroup({
    role: new FormControl('')
  });
  studentPost = new FormGroup({
    role: new FormControl('')
  });
  constructor(private service:ApiserviceService, private location: Location, private router:Router) { }
  
  ngOnInit(): void {
  }
  
  public teacherClicked()
  {
    this.teacherPost.controls['role'].setValue('teacher')
    localStorage.setItem('role',this.teacherPost.value['role'])
    this.router.navigate(['/teacher/list'])
  }
  public studentClicked()
  {
    this.router.navigate(['/student/search'])
  }
}
