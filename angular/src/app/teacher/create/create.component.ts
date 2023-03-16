import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  studentPost = new FormGroup({
    'rollNo':new FormControl(''),
    'name':new FormControl(''),
    'dob':new FormControl(''),
    'score':new FormControl('')
  });
  constructor(public service:ApiserviceService, private router:Router) { }
  studentDataPosted:any
  ngOnInit(): void {
    
  }
  studentData()
  {
    this.service.postStudent(this.studentPost.value).subscribe((res)=>
    {
      if(res.index==0)
      {
        this.studentDataPosted=true;
        this.router.navigate(['/teacher/create'])
      }
      else
      {
        this.studentDataPosted=false;
        this.router.navigate(['/teacher/list'])
      }
      
    })
  }

}
