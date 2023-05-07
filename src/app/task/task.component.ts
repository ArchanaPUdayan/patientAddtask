import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(private route:Router){

  }
  addpatient=()=>{
    this.route.navigate(["/addpatient"])
  }

}
