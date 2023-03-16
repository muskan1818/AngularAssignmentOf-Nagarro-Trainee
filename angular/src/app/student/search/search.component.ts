import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from 'src/app/apiservice.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult = new FormGroup({
    'rollNo':new FormControl(''),
    'name':new FormControl('')
  });
  constructor(private service:ApiserviceService, private router:Router) { }
  searchedStudent:any
  ngOnInit(): void {
  }

  search()
  {
    this.service.searchResult(this.searchResult.value).subscribe((res)=>
    {
      if(res.length==0)
      {
        this.searchedStudent=true;
        this.router.navigate(['/student/search'])
      }
      else
      {
        this.service.setresult(res);
        this.router.navigate(['/student/result'])
      }
      
    })
  }
}
