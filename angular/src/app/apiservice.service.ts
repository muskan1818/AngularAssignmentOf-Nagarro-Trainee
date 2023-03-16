import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private data = new BehaviorSubject("")
  currentData = this.data.asObservable();
  constructor(private _http: HttpClient, private router:Router) { }
    //connect front end to backend
    apiUrl = 'http://localhost:5000';
    getStudentList():Observable<any>
    { 
        return this._http.get(`${this.apiUrl}/teacher/studentlist`)
    }
    postStudent(data:any):Observable<any>
    {
      return this._http.post(`${this.apiUrl}/teacher/studentdetails`,data)
    }
    deleteStudent(rollNo:any):Observable<any>
    {
      return this._http.delete(`${this.apiUrl}/teacher/delete/${rollNo}`);
    }
    getCurrentStudent(rollNo:any):Observable<any>
    {
      return this._http.get(`${this.apiUrl}/teacher/edit/${rollNo}`)
    }
    updateStudent(rollNo:any,data:any):Observable<any>
    {
      return this._http.post(`${this.apiUrl}/teacher/edit/${rollNo}`,data);
    }
    searchResult(data:any):Observable<any>
    {
      return this._http.post(`${this.apiUrl}/student/searchresult`,data)
    }
    setresult(data:any)
    {
      this.data.next(data)
    }
    loggedIn()
    {
      return !!localStorage.getItem('role');
    }
    logout()
    {
      localStorage.clear()
      this.router.navigate(['/'])
    }
}
