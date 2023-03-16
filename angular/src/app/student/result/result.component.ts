import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private service:ApiserviceService) { }
  result:any
  ngOnInit(): void {
    this.service.currentData.subscribe(data => {
      this.result=data 
    });

  }

}
