import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiserviceService } from 'src/app/apiservice.service';
import { formatDate } from "@angular/common";
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  editPost = new FormGroup({
    'rollNo':new FormControl(''),
    'name':new FormControl(''),
    'dob':new FormControl(''),
    'score':new FormControl('')
  });
  constructor(private activatedrouter:ActivatedRoute, public service:ApiserviceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getCurrentStudent(this.activatedrouter.snapshot.params['rollNo']).subscribe((result=>
      {
        const locale='en-US'
        this.editPost = new FormGroup({
          'rollNo':new FormControl(result[0]['rollNo']),
          'name':new FormControl(result[0].name),
          'dob':new FormControl(formatDate(result[0].dob,'yyyy-MM-dd',locale)),
          'score':new FormControl(result[0].score)
        });
      }))
  }
  update()
  {
    this.service.updateStudent(this.activatedrouter.snapshot.params['rollNo'],this.editPost.value).subscribe((res=>
      {
        this.router.navigate(['/teacher/list'])
      }))
  }
}
