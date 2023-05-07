import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }
  fetchPatients=()=>{
    return this.http.get("http://localhost:8081/view")
  }
  addpatient=(dataToSend:any)=>{
    return this.http.post("http://localhost:8081/add",dataToSend)

  }

}
