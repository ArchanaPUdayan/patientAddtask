import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrls: ['./viewpatient.component.css']
})
export class ViewpatientComponent {
  p: number = 1;
  total: number = 0;
  
  

  
  PatientAdd:any=[]
  constructor(private api:ApiServiceService){

    api.fetchPatients().subscribe(
      (response:any)=>{
        this.PatientAdd=response
      }
    )

  }
  pageChangeEvent(event: number){
    this.p = event;
    
}
 

}
  
  


