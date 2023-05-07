import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';
import { NgxPaginationModule } from 'ngx-pagination';


import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';


import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';
import { HttpClientModule } from "@angular/common/http";
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';

import { HomepageComponent } from './homepage/homepage.component';

const myRoute:Routes=[
  {
    path:"",
    component:HomepageComponent
  },
  {
    path:"task",
    component:TaskComponent

  },
  {
    path:"addpatient",
    component:AddpatientComponent
  },
  {
    path:"viewpatient",
    component:ViewpatientComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AddpatientComponent,
    ViewpatientComponent,
    NavbarComponent,
    TaskComponent,
    RadiobuttonComponent,
    HomepageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
    
   
   
   
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
