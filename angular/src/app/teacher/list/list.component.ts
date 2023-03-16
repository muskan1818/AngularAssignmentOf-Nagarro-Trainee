import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public service:ApiserviceService, private router:Router) { }

  list:any =[]
  ngOnInit(): void {
    this.service.getStudentList().subscribe((res)=>
    {
      this.list=res;
    })
  }
  deleteStudent(rollNo:any)
  {
    this.service.deleteStudent(rollNo).subscribe((res=>
      {
        this.list.splice(rollNo-1,1);
        this.router.navigate(['/teacher/list'])
      }))
  }
  updateStudent(rollNo:any)
  {
    this.service.deleteStudent(rollNo).subscribe((res=>
      {
        this.list.splice(rollNo-1,1);
        this.router.navigate(['/teacher/list'])
      }))
  }
}
