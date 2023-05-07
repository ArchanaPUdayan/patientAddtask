import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrls: ['./addpatient.component.css']
})
export class AddpatientComponent {

  
  Name=""
  Description=""
  eventdata=""
  result:any=[]

  constructor(private api:ApiServiceService){}

  
  readValue=()=>{
    let data:any={
      "name":this.Name,
      "description":this.Description,
      "eventdata":this.eventdata

    }
    console.log(data)
    this.api.addpatient(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.result=response
        window.location.reload()
      }
      
    )
 
   
      
    }

    selectbox:boolean=true
    tog(){
      this.selectbox=!this.selectbox
    }
  }
  
  
  


